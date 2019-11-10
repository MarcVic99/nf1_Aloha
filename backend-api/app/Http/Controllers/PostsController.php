<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class PostsController extends Controller{

    public function createUser(Request $request){
        

        $input = $request->all();
        echo $request->input('name');
        $post = User::create([
                'name' => $input['name'],
                'password' => $input['password'],
                'email' => $input['email'],
                'last_name' => $input['last_name'],
                'phone_number' => $input['phone_number'],
                'user_photo' => $input['user_photo'],
                'is_host' => $input['is_host']
            ]);
            echo "Hasta aqui llego2";
            return $post;
    }
    
    public function signUp(Request $request)
    {
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
                        'password' => $input['password'],
                        'email' => $input['email'],
                        'last_name' => $input['last_name']
                        ]);
                    return $userPost . $query . $comprovationMsg[0];     
                }
            }
       
               
    }
}