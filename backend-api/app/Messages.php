<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Messages extends Model
{
    public function User()
    {
        return $this->belongsTo('App\User', 'user-id');
    }

    public function Bookings()
    {
        return $this->belongsTo('App\Bookings', 'bookings_id');
    }
}
