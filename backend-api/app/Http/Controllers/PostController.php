<?php


namespace App\Http\Controllers;


use App\Post;

use Illuminate\Http\Request;

class PostController extends Controller
{
    public function createUser(Request $request){
        $request = $request->all();


        $post = Post::create([
            "name" => $request["name"],
            "last_name" => $request["last_name"],
            "email" => $request["email"],

            "phone_number" => $request["phone_number"],
        ]);

        return $post;
    }
};
/*protected $fillable = ['id','name','surname','email','phone_number'];

protected $hidden = ['email','phone_number'];
}
*/

