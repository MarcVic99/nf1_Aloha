<?php

namespace App\Providers;
namespace App\Http\Controllers;


use Illuminate\Database\Eloquent\Model;

class PropertiesAloha extends Model
{
    protected $table = "properties";
    protected $fillable = [
    "name_header", "country", "city", "address", "description", "additional_info",
    "bedrooms", "bathrooms", "guest_number", "user_id"
    ];
}
