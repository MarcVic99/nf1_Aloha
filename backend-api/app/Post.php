<?php


namespace App;


use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    protected $table = 'users';

    protected $fillable = ['id','name','last_name','email','phone_number'];

    protected $hidden = ['email','phone_number',];


};


