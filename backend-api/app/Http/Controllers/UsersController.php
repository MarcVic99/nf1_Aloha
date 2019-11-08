<?php


namespace App\Http\Controllers;

use Illuminate\Http\Request;

class UsersController extends Controller
{
    public function createUser(Request $request) {

        $request = $request->all();

        $post = UserAloha::create([
            "name" => $request["name"],
            "last_name" => $request["last_name"],
            "email" => $request["email"],
            "password" => $request["password"],

        ]);


        return $post;
    }

    public function signUpUser(Request $request){

        $request = $request->all();
        $post = "";
        $email = $request["email"];

        $find = UserAloha::where('email', '=', $email)->first();

        if(!empty($find))
        {
            $post = "Username already exists";
            return $post;
        }

        else {
            $post = UserAloha::create([
                "name" => $request["name"],
                "last_name" => $request["last_name"],
                "email" => $request["email"],
                "password" => $request["password"]
            ]);
            return $post;
        }
    }
    public function loginUser($email, $password){

        $getUser = UserAloha::where('email', '=', $email)
            ->where('password', '=', $password)
            ->first();

        $userInfo = array($getUser['id'],$getUser['name'],$getUser['last_name'],$getUser['password']);

        if(!empty($getUser))
        {
            echo "User id is ".userInfo[0].
            "Name: ".$userInfo[1].
            "Last name: ".$userInfo[2].
            "password is: ".$userInfo[3];
        }
        else
        {
            echo "There isn’t an account associated with this email address. Please try another email.";
        }

    }
}
