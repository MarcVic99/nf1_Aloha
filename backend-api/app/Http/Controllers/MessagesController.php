<?php

namespace App\Http\Controllers;

use App\Bookings;
use App\Messages;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class MessagesController extends Controller
{
    public function store(Request $request)
    {
            //Recoger los datos por post
        $params_array = $request->all();

        if (!empty($params_array)) {
            //Validar los datos
        $validate = \Validator::make($params_array, [
        'bookings_id' => 'required',
        'content' => 'required',
        ]);

            //Guardar los mensages
        if ($validate->fails()) {
        $data = [
        'code' => 404,
        'status' => 'error',
        'message' => 'the data sent is incorrect'
        ];
        } else {
            $messages = new Messages();
            $messages->user_id = Auth::user()->id;
            $messages->bookings_id = $params_array['bookings_id'];
            $messages->content = $params_array['content'];
            $messages->save();

            $data = [
                'code' => 200,
                'status' => 'succes',
                'message' => $messages
            ];
        }

        } else {
            $data = [
                'code' => 404,
                'status' => 'error',
                'message' => 'no has enviado ninguna mensage'
            ];
        }

        //Devolver resultados
        return response()->json($data, $data['code']);
        }

    public function show($id)
    {
            $bookings = Bookings::where('bookings.id', '=', $id)
                ->join('users', 'users.id', '=', 'bookings.user_id')
                ->join('properties', 'properties.id', '=', 'bookings.property_id')
                ->select('bookings.id', 'bookings.checkin', 'bookings.checkout', 'bookings.status',
                     'properties.name_header', 'properties.address', 'properties.city',
                    'users.name', 'bookings.total')
                ->first();

            $messages = Messages::where('messages.bookings_id', '=', $bookings->id)
                ->join('users', 'users.id', '=', 'messages.user_id')
                ->select('users.name', 'users.id', 'messages.content', 'messages.created_at')
                ->orderBy('created_at', 'DESC')
                ->get();

            $bookings['messages'] = $messages;
            $bookings['auth']  = Auth::user()->id;

            return response()->json($bookings);
    }
}
