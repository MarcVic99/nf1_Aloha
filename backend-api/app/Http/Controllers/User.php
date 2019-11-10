<?php
namespace App\Http\Controllers;
use Illuminate\Database\Eloquent\Model;

class User extends Model
{
    protected $table = "users";
    protected $fillable = ["name","password",'email','last_name','user_photo','phone_number','ishost'];

    protected $hidden = ['password','phone_number'];
}

