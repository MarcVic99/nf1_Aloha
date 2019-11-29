<?php


namespace App\Http\Controllers;
use Illuminate\Http\Request;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Response;

class PropertiesController extends Controller
{
    public function createProperty(Request $request){

        $request = $request->all();
        $post = "";
        $address = $request["address"];

        $find = PropertiesAloha::where('address', '=', $address)->first();

        if(!empty($find))
        {
            $post = "Property already created";
            return $post;
        }

        else {
            $post = PropertiesAloha::create([
                "name_header" => $request["name_header"],
                "country" => $request["country"],
                "city" => $request["city"],
                "address" => $request["address"],
                "description" => $request["description"],
                "additional_info" => $request["additional_info"],
                "bedrooms" => $request["bedrooms"],
                "bathrooms" => $request["bathrooms"],
                "guest_number" => $request["guest_number"],
                "user_id" => $request["user_id"]
            ]);
            return $post;
        }
    }
}

