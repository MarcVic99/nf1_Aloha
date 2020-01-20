<?php

namespace App\Http\Controllers;

use App\Comments;
use App\Property;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class CommentsController extends Controller
{
    public function index()
    {
        $comments = Comments::all();

        return response()->json([
            'code' => 200,
            'status' => 'success',
            'comments' => $comments
        ]);
    }

    public function store(Request $request)
    {
        //Recoger los datos por post
        $params_array = $request->all();

        if (!empty($params_array)) {
            //Validar los datos
            $validate = \Validator::make($params_array, [
                'property_id' => 'required',
                'content' => 'required',
            ]);

            //Guardar los comentarios
            if ($validate->fails()) {
                $data = [
                    'code' => 404,
                    'status' => 'error',
                    'message' => 'the data sent is incorrect'
                ];
            } else {
                $comments = new Comments();
                $comments->user_id = Auth::user()->id;
                $comments->property_id = $params_array['property_id'];
                $comments->content = $params_array['content'];
                $comments->save();

                $data = [
                    'code' => 200,
                    'status' => 'succes',
                    'comments' => $comments
                ];
            }

        } else {
            $data = [
                'code' => 404,
                'status' => 'error',
                'message' => 'no has enviado ninguna comentario'
            ];
        }

        //Devolver resultados
        return response()->json($data, $data['code']);
    }

    public function show($id)
    {
//        $properties = Property::where('properties.id', '=', $id)
//            ->join('users', 'users.id', '=', 'properties.user_id')
//            //->join('properties', 'properties.id'', '=', 'comments.property_id')
//            ->select('properties.name_header', 'properties.address', 'properties.city',
//                'users.name')
//            ->first();
//
//        $comments = Comments::where('comments.property_id', '=', $properties->id)
//            ->join('users', 'users.id', '=', 'comments.user_id')
//            ->select('users.name', 'users.id', 'comments.content', 'comments.created_at')
//            ->orderBy('created_at', 'DESC')
//            ->get();
//
//        $properties['comments'] = $comments;
//        $properties['auth']  = Auth::user()->id;
//
//        return response()->json($properties);
//    }

        $comments = Comments::where('property_id', $id)->get();

        return response()->json([
            'status' => 'succes',
            'comments' => $comments
        ], 200);


    }
}
