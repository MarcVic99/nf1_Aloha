<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Bookings extends Model
{

        public function User()
    {
        return $this->belongsTo('App\User', 'user-id');
    }

        public function property()
    {
        return $this->belongsTo('App\Property', 'property_id');
    }
}
