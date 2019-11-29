<?php

namespace App\Http\Controllers\Auth;

class UserAuthController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api',['except'=>['logInUser','signUpUser']]);
    }

    public function signUpUser(Request $request){
        $errors = array("User exists","Invalid email format");
        $passErrors = array("Password must contain at least 8 characters",
            "Password must contain at least 1 number",
            "Password must contain at least 1 capital letter",
            "Password must contain at least 1 lowercase letter",
            "Please, confirm password",
            "Please, enter a password");
        $comprovationMsg = array("Sign Up Completed. Welcome to Aloha!!!");

        $input = $request->all();
        $userEmail = $request->only(['email']);
        $userPass = $request->only(['password']);
        $confirmUserPass = $request->only(['confirm_pass']);

        $query = User::where("email","=",$userEmail)->first();

        if(!empty($query))return $errors[0];
        else if(!preg_match("/([\w\-]+\@[\w\-]+\.[\w\-]+)/",$userEmail['email']))
        {
            return $errors[1];
        }
        else if(!empty($userPass) && empty($confirmUserPass))return $passErrors[4];
        else if(empty($userPass) && !empty($confirmUserPass))return $passErrors[5];
        else if(!empty($userPass) && !empty($confirmUserPass)
            && $userPass['password'] == $confirmUserPass['confirm_pass']){
            if(strlen($userPass["password"]) <= '7')return $passErrors[0];
            else if(!preg_match("#[0-9]+#",$userPass['password']))return $passErrors[1];
            else if(!preg_match("#[A-Z]+#",$userPass['password']))return $passErrors[2];
            else if(!preg_match("#[a-z]+#",$userPass['password']))return $passErrors[3];
            else{
                $userPost = User::create([
                    'name' => $input['name'],
                    'password' => bcrypt($input['password']),
                    'email' => $input['email'],
                    'last_name' => $input['last_name']
                ]);
                return $userPost . $query . $comprovationMsg[0];
            }
        }
    }

    public function logInUser(Request $request){

        $userRequest = request(['email','password']);

        if(!$token = auth()->attempt($userRequest))
        {
            return response()->json(['error'=>'Unauthorized'],401);
        }

        return $this->respondWithToken($token);

   }
    public function refresh()
    {
        return $this->respondWithToken(auth()->refresh());
    }

    public function me()
    {
        return response()->json(auth()->user());
    }
/*
    public function payload()
    {
        return response()->json(auth()->payload());
    }
*/
    public function logOutUser()
    {
        auth()->logout();
        return response()->json(['message'=>'successfully logged out']);
    }

    public function respondWithToken($token)
    {
        return response()->json([
            'access_token' => $token,
            'token_type' => 'bearer',
            'expires_in' =>auth()->factory()->getTTL() * 60,
        ]);
    }
//5   public function logOutUser{
// here the logOutUser function
//}
//3  public function editUserInfo{
//// here the editUserInfo function
////}
/*4
 *     public function showUserInfo($email, $password){

        $errors = array("User not found");

        $searchUserInfo = User::where("email","=",$email)
            ->where("password","=",$password)
            ->first();
        $userInfo = array($searchUserInfo['id'],$searchUserInfo['name'],
            $searchUserInfo['last_name'],$searchUserInfo['email'],
            $searchUserInfo['password']);

        $comprovationMsg = array("You are the user $userInfo[0] with name $userInfo[1] $userInfo[2]
                                and email $userInfo[3]. Your password is $userInfo[4]");

        if(!empty($searchUserInfo))
        {
            return $comprovationMsg[0];
        }
        else{
            return $errors[0];
        }
    }
*/

}

