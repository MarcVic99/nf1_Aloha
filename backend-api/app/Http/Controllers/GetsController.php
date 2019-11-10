<?php
namespace App\Http\Controllers;

class GetsController extends Controller{
    public function getProperty($id){

        $property = array(
            "Id"=>100,
            "Nombre"=>"Juan",
            "Mail"=>"test@test.com"
        );
        return $property;
        // return $id * 10;
    }
    public function getUsers($id)
    {
        $errorText = "NO HAY TANTOS USERS. PRUEBA CON ID=3";

        $user1 = array(
            "id" => 0,
            "nombre" => "Juan",
            "email" => "test@test.com"
        );
        $user2 = array(
            "id" => 1,
            "nombre" => "Juan",
            "email" => "test@test.com"
        );
        $user3 = array(
            "id" => 2,
            "nombre" => "Juan",
            "email" => "test@test.com"
        );

        if($id <= 3) return ${"user" . $id};
        else return $errorText;
    }

    public function logIn($email,$password){

        $errors = array("User not found");
        $userRecord = User::where("email","=",$email)
            ->where("password","=",$password)
            ->first();
        $idGetter = $userRecord['id'];

        $comprovationMsgLogIn = array("You've been Logged. 
                                    Nice to see ya again $idGetter");
        if(!empty($userRecord)){
            return $comprovationMsgLogIn[0];
        }
        else{
            return $errors[0];
        }
    }
    public function ShowUserInfo($email, $password){

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
}
