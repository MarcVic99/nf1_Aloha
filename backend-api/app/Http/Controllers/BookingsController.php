<?php

namespace App\Http\Controllers;

use App\Bookings;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class BookingsController extends Controller
{
    public function index()
    {
        //
    }

    public function store(Request $request)
    {
        //Recoger los datos por post
        $params_array = $request->all();

        if (!empty($params_array)) {
            //Validar los datos
            $validate = \Validator::make($params_array, [
                'checkin' => 'required',
                'checkout' => 'required',
                'user_id' => 'required',
                'property_id' => 'required',
                'status' => 'required',
                'total' => 'required',
            ]);
            //Guardar la propiedad
            if ($validate->fails()) {
                $data = [
                    'code' => 404,
                    'status' => 'error',
                    'message' => 'Its already reserved'
                ];
            } else {
                $bookings = new Bookings;
                $bookings->checkin = $params_array['checkin'];
                $bookings->checkout = $params_array['checkout'];
                $bookings->user_id = Auth::user()->id;
                $bookings->property_id = $params_array['property_id'];
                $bookings->status = $params_array['status'];
                $bookings->total = $params_array['total'];
                $bookings->save();
            }
            $data = [
                'code' => 200,
                'status' => 'succes',
                'bookings' => $bookings
            ];
        } else {
            $data = [
                'code' => 404,
                'status' => 'error',
                'message' => 'you have not made any reservation'
            ];
        }

        //Devolver resultados
        return response()->json($data, $data['code']);
    }

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
