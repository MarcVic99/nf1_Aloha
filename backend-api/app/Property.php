<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Property extends Model
{
    protected $table = 'properties';

    //Relacion de uno a muchos
    public function orders(){

        return $this->hasMany('App\users');
    }
}
