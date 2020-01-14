<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    protected $table = 'categories';
    protected $fillable = [
        "name_header", "country", "city", "address", "description", "additional_info",
        "bedrooms", "bathrooms", "guest_number", "user_id"
    ];

    //Relacion de uno a muchos
    public function categories(){

        return $this->hasMany('App\Property');
    }
}
