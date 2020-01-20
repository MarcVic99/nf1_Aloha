<?php

namespace App\Http\Controllers;
use App\Property;
use Auth;
use App\Map;
use Illuminate\Http\Request;

class MapController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $map = Map::all();

        return response()->json([
            'code' => 200,
            'status' => 'success',
            'map' => $map
        ]);
    }

    public function show($id){
        $map = Map::find($id);

        if(is_object($map)){

            $data= [
                'code' => 200,
                'status' => 'success',
                'map' => $map
            ];
        }else{
            $data= [
                'code' => 404,
                'status' => 'error',
                'message' => 'La direccion no existe'
            ];
        }
        return \response()->json($data, $data['code']);
    }

        public function create()
        {
            $property = Property::all();

        }

        public function store(Request $request)
        {
            //Recoger los datos por post
            $params_array = $request->all();

            if(!empty($params_array)) {
            //Validar los datos
            $validate = \Validator::make($params_array, [
                'property_id' => 'required',
                'description' => 'required',
                'title' => 'required',
                'address' => 'required',
                'radius' => 'required',
                'latitude' => 'required',
                'longitude' => 'required'

            ]);

            //Guardar la categoria
            if ($validate->fails()) {
                $data = [
                    'code' => 404,
                    'status' => 'error',
                    'message' => 'La direccion no existe'
                ];
            } else {
            $map = new Map;
            $map->user_id = Auth::user()->id;
            $map->property_id = $params_array['property_id'];
            $map->description = $params_array['description'];
            $map->title = $params_array['title'];
            $map->address = $params_array['address'];
            $map->radius = $params_array['radius'];
            $map->latitude = $params_array['latitude'];
            $map->longitude = $params_array['longitude'];
            $map->save();

            $data = [
                    'code' => 200,
                    'status' => 'succes',
                    'map' => $map
                ];
            }

        }else{
            $data = [
                'code' => 404,
                'status' => 'error',
                'message' => 'no has enviado ninguna direccion'
            ];
        }

        //Devolver resultados
        return response()->json($data, $data['code']);
    }

        public function edit(Map $map)
        {
            $category = Property::all();
            return view('map.edit', compact('map', 'category'));
        }

        public function update(Request $request, Map $map)
        {
            $map->user_id   = Auth::user()->id;
            $map->category_id = $request->category;
            $map->description = $request->description;
            $map->title     = $request->title;
            $map->address   = $request->location;
            $map->radius    = $request->radius;
            $map->latitude  = $request->lat;
            $map->longitude = $request->long;
            $map->save();

        }

        public function destroy(Map $map)
        {
            $map->delete();

        }
}

