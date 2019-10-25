<?php


namespace App\Http\Controllers;


class PropertiesController extends Controller
{
    public function getUser($id){
        $user=array(
            "id"=>$id,
            "nombre"=>"Juan",
            "email"=>"test@test.com"
        );
        return $user;
    }

    public function getUsers()
    {
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
        return [$user1, $user2, $user3];
    }
}

