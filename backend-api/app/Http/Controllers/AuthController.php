<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Controller;

class AuthController extends Controller
{
    /**
     * Create a new AuthController instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['login','signUp']]);
    }

    /**
     * Get a JWT via given credentials.
     *
     * @return \Illuminate\Http\JsonResponse
     */


    public function signUp(Request $request)
    {
        $errors = ["User exists","Invalid email format"];
        $passErrors = array("Password must contain at least 8 characters",
            "Password must contain at least 1 number",
            "Password must contain at least 1 capital letter",
            "Password must contain at least 1 lowercase letter",
            "Please, confirm password",
            "Please, enter a password");
        $comprovationMsg = array("Sign Up Completed. Welcome to Aloha!!!");
        $userEmail = $request->get('email');
        $userPass = $request->get('password');
        $userName = $request->get('name');
        $userLastName = $request->get('last_name');
        $confirmUserPass = $request->get('confirm_pass');
        $query = User::where("email","=",$userEmail)->first();
        if(!empty($query)) return response() ->json(["errors" => $errors[0]], Response::HTTP_NOT_FOUND);
        else if(!preg_match("/([\w\-]+\@[\w\-]+\.[\w\-]+)/",$userEmail))
        {
            return response() ->json(["errors" => $errors[1]], Response::HTTP_NOT_FOUND);
        }
        else if(!is_null($userPass) && is_null($confirmUserPass))return response() ->json(["errors" => $passErrors[4]], Response::HTTP_NOT_FOUND);
        else if(is_null($userPass) && !is_null($confirmUserPass))return response() ->json(["errors" => $passErrors[5]], Response::HTTP_NOT_FOUND);
        else if(!is_null($userPass) && !is_null($confirmUserPass)
            && $userPass == $confirmUserPass){
            if(strlen($userPass) <= '7') return response() ->json(["errors" => $passErrors[0]], Response::HTTP_NOT_FOUND);
            else if(!preg_match("#[0-9]+#",$userPass))return response() ->json(["errors" => $passErrors[1]], Response::HTTP_NOT_FOUND);
            else if(!preg_match("#[A-Z]+#",$userPass))return response() ->json(["errors" => $passErrors[2]], Response::HTTP_NOT_FOUND);
            else if(!preg_match("#[a-z]+#",$userPass))return response() ->json(["errors" => $passErrors[3]], Response::HTTP_NOT_FOUND);
            else{
                $userPost = User::create([
                    'name' => $userName,
                    'password' => bcrypt($userPass),
                    'email' => $userEmail,
                    'last_name' => $userLastName
                ]);
                if (isset($userPost)){
                    return response() ->json($userPost, Response::HTTP_OK);
                }
            }
        }
    }

    public function login(Request $request)
    {
        $userEmail = $request->get('email');

        $userPass = $request->get('password');

        $user = User::where("email","=",$userEmail)
            ->first();
        $credentials = request(['email', 'password']);

        if (! $token = auth()->attempt($credentials)) {
            return response()->json(['errors' => '"No hay ninguna cuenta asociada a esta dirección de correo electrónico o la contraseña es incorrecta. Inténtelo de nuevo."'], 401);
        }/*
        if(isset($user) && Hash::check($userPass, $user->password)){

            return response()->json($user, Response::HTTP_OK);
        }*/

        return $this->respondWithToken($token);
        //return response()->json($user, Response::HTTP_OK);
        //FALTA SACAR DEL ARRAY EL $USER.
        /*  if(isset($user) && Hash::check($userPass, $user->password)){

            return response()->json($user, Response::HTTP_OK);
        }*/
    }

    /**
     * Get the authenticated User.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function me()
    {
        return response()->json(auth()->user());
    }

    /**
     * Log the user out (Invalidate the token).
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function logout()
    {
        auth()->logout();

        return response()->json(['message' => 'Successfully logged out']);
    }

    /**
     * Refresh a token.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function refresh()
    {
        return $this->respondWithToken(auth()->refresh());
    }

    /**
     * Get the token array structure.
     *
     * @param  string $token
     *
     * @return \Illuminate\Http\JsonResponse
     */
    protected function respondWithToken($token)
    {
        return response()->json([
            'access_token' => $token,
            'token_type' => 'bearer',
            'expires_in' => auth()->factory()->getTTL() * 60,
            'user' => auth()->user(),
        ]);
    }

    public function update(Request $request)
    {
        $user = User::find(Auth::user()->id);
        $user->name  	= $request->input('name');
        $user->email 	= $request->input('email');
        $user->last_name 	= $request->input('last_name');
        $user->avatar	= $request->input('avatar');
        $user->save();
    }

    public function getUser()
    {
        $user = \App\User::find(Auth::user()->id);
        return response()->json($user);
    }

    public function showUser($id)
    {
        $user = User::find($id);
        return response()->json($user);
    }

    public function upload(Request $request)
    {

        $data = array(
            'code' => 404,
            'status' => 'error',
            'message' => 'Error al subir imagen'
        );

        return response()->json($data, $data['code']);
    }
}
