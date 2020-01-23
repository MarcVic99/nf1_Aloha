<?php

namespace App\Http\Controllers;

use App\Bookings;
use Illuminate\Http\Request;
use App\Http\Controllers\Response;
use Illuminate\Support\Facades\Auth;

class BookingsController extends Controller
{
    public function index()
    {
        $bookings = Bookings::all();

        return response()->json([
            'code' => 200,
            'status' => 'success',
            'bookings' => $bookings
        ]);
    }

    public function store(Request $request)
    {
        $reserved = $this->reservedDays($request);
        if ($reserved) {
            return response()->json(['status'=>400,'message'=>'the property is already reserved']);
        } else {
            $bookings = new Bookings();
            $bookings->status = $request->status;
            $bookings->checkin = $request->checkin;
            $bookings->checkout = $request->checkout;
            $bookings->property_id = $request->property_id;
            $bookings->user_id = $request->user_id;
            $bookings->total = $request->total;

            $bookings->save();
        }
        $data = [
            'code' => 200,
            'status' => 'succes',
            'bookings' => $bookings
        ];
        return response()->json($data, $data['code']);
    }

    private function reservedDays($request){
        $reserved = false;
        $initial_reservation = Bookings::where('property_id',$request->property_id)
            ->where('checkin','<=',$request->checkin)
            ->where('checkout','>=',$request->checkout)
            ->count();
        if($initial_reservation > 0){
            $reserved = true;
        }

        $final_reservation = Bookings::where('property_id',$request->property_id)
            ->where('checkin','<=',$request->checkin)
            ->where('checkout','>=',$request->checkout)
            ->count();
        if($final_reservation > 0){
            $reserved = true;
        }

        $inicial_final_reservation = Bookings::where('property_id',$request->property_id)
            ->where('checkin','>=',$request->checkin)
            ->where('checkout','<=',$request->checkout)
            ->count();
        if($inicial_final_reservation > 0){
            $reserved = true;
        }

        return $reserved;

    }

    //************************************************






    public function show($id)
    {
        $bookings = Bookings::where('property_id', '=', $id)
            ->join('properties', 'properties.id', '=', 'bookings.property_id')
            ->join('users', 'users.id', '=', 'bookings.user_id')
            ->select('checkin', 'checkout', 'users.name', 'bookings.id', 'bookings.status')
            ->get();
        return response()->json($bookings);
    }

    public function update(Request $request, $id)
    {

        //recoger datos por post
        $params_array = $request->all();

        if (!empty($params_array)) {
            //Validar los datos
            $validate = \Validator::make($params_array, [
                'checkin' => 'required',
                'checkout' => 'required',
                'property_id' => 'required',
                'status' => 'required',
                'user_id' => 'required',

            ]);

            if($validate->fails()) {
                return Response()->json([
                    'code' => 404,
                    'status' => 'error',
                    'message' => 'the data sent is incorrect'
                ]);
            }else {
                //Quitar datos que no quiero actualizar
                unset($params_array['id']);
                unset($params_array['created_at']);
                unset($params_array['updated_at']);


                //Actualizar la reserva

                $bookings = Bookings::find($id);
                if (!empty($bookings)) {
                    $bookings_update = Bookings::where('id', $id)->update($params_array);

                    $data = [
                        'code' => 200,
                        'status' => 'succes',
                        'bookings' => $bookings,
                        'bookings_update' => $params_array
                    ];
                }else {
                    $data = [
                        'code' => 404,
                        'status' => 'error',
                        'message' => 'bookings does not exist'
                    ];
                }
            }
            //Devolver respuesta
            return response()->json($data, $data['code']);
        }
    }



}
