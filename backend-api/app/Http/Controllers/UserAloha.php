<?php

namespace App\Providers;
namespace App\Http\Controllers;


use Illuminate\Database\Eloquent\Model;

class UserAloha extends Model
{
    protected $table = "users";
    protected $fillable = [
        "name", "last_name", "email", "password"
    ];
    protected $hidden = [
        "password"
        //, "birthdate"
    ];
}
