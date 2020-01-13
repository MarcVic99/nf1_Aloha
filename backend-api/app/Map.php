<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Map extends Model
{
    protected $fillable = [
        'user_id','property_id', 'description','title', 'address', 'radius', 'latitude', 'longitude',
    ];
    public function property()
    {
        return $this->belongsTo('App\property');
    }
}
