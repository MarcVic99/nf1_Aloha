<?php

namespace App\Http\Controllers;
use App\Bookings;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;
use App\Property;


class PropertyController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api',
            ['except' =>
            ['index', 'show', 'getPropertyByCategory',
            'getPropertyByUser', 'getImage', 'search',]]);
    }

    public function index()
    {
        $property = Property::all();

        return response()->json([
            'code' => 200,
            'status' => 'success',
            'properties' => $property
        ]);

    }

    public function show($id)
    {
        $property = Property::find($id);

        if (is_object($property)) {

            $data = [
                'code' => 200,
                'status' => 'success',
                'property' => $property
            ];
        } else {
            $data = [
                'code' => 404,
                'status' => 'error',
                'message' => 'La propiedad no existe'
            ];
        }
        return \response()->json($data, $data['code']);
    }

    public function store(Request $request)
    {
        //Recoger los datos por post
        $params_array = $request->all();

        if (!empty($params_array)) {
            //Validar los datos
            $validate = \Validator::make($params_array, [
                'nameHeader' => 'required',
                'rooms' => 'required',
                'beds'=> 'required',
                'toilets'=> 'required',
                'country' => 'required',
                'city' => 'required',
                'address' => 'required|unique:properties',
                'title'=> 'required',
                'description' => 'required',
                'price' => 'required',
                'category_id' => 'null',
                'image' => 'null'

            ]);

            //Guardar la propiedad
           if ($validate->fails()) {
                $data = [
                    'code' => 404,
                    'status' => 'error',
                    'message' => 'Error en la validación de campos introducidos.'
                ];
            } else {

                $property = new Property();
                $property->user_id = Auth::user()->id;
                $property->nameHeader = $params_array['nameHeader'];
                $property->rooms = $params_array['rooms'];
                $property->beds = $params_array['beds'];
                $property->toilets = $params_array['toilets'];
                $property->country = $params_array['country'];
                $property->city = $params_array['city'];
                $property->address = $params_array['address'];
                $property->title = $params_array['title'];
                $property->description = $params_array['description'];
                $property->price = $params_array['price'];
                //$property->category_id = $params_array['category_id'];
                //$property->image  =  $params_array['image'];
                $property->save();



                $data = [
                    'code' => 200,
                    'status' => 'succes',
                    'properties' => $property
                ];
            }

        } else {
            $data = [
                'code' => 404,
                'status' => 'error',
                'message' => 'no has enviado ninguna propiedad'
            ];
        }

        //Devolver resultados
        return response()->json($data, $data['code']);
    }

    public function update($id, Request $request)
    {
        //recoger datos por post
        $params_array = $request->all();

        if (!empty($params_array)) {
            //Validar los datos
            $validate = \Validator::make($params_array, [
                'name_header' => 'required',
                'country' => 'required',
                'city' => 'required',
                'address' => 'required',
                'category_id' => 'required',
                'image' => 'required',
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
                //unset($params_array['user_id']);

                //Actualizar la propiedad
                //$user = User::find(Auth::user()->id);
                $properties = Property::find($id);
            if (!empty($properties)) {
                    $property_update = Property::where('id', $id)->update($params_array);

                $data = [
                    'code' => 200,
                    'status' => 'succes',
                    //'$user_id' => $user,
                    'properties' => $properties,
                    'property_update' => $params_array
                ];
            }else {
                $data = [
                    'code' => 404,
                    'status' => 'error',
                    'message' => 'Property does not exist'
                ];
                }
            }
            //Devolver respuesta
            return response()->json($data, $data['code']);
        }
    }

    public function destroy($id, Request $request){
        //Consiguir la propiedad
        $property = Property::find($id);

        if(!empty($property)){
            //Borrarla
            $property->delete();

            //Devolver mensage indicando estado de la propiedad
            $data = [
              'code' => 200,
              'status' => 'succes',
              'menssage' => 'The property has been deleted successfully',
              'property' => $property
            ];

        }else{
            $data = [
                'code' => 400,
                'status' => 'error',
                'menssage' => 'Property does not exist'
            ];
        }

        return response()->json($data, $data['code']);
    }

    //Consiguir lista de proiedades por categoria

    public function getPropertyByCategory($id)
    {
          $property = Property::where('category_id', $id)->get();

          return response()->json([
              'status' => 'succes',
              'property' => $property
          ], 200);
    }

    //Consiguir lista de proiedades por usuario

    public function getPropertyByUser($id)
    {
            $property = Property::where('user_id', $id)->get();

            return response()->json([
                'status' => 'succes',
                'properties' => $property
            ], 200);
    }

    //Subir imagenes
    public function upload(Request $request) {

        //Recoger la imager por post
        $image = $request->file('file0');

        //Validar imagen
        $validate = \Validator::make($request->all(),[
            'file0'=>'required|image|mimes:jpg,jpeg,png,gif',
        ]);
        //Guardar la imagen
        if(!$image || $validate->fails()){
            $data=[
                'code' => 400,
                'status' => 'error',
                'mensage' => 'Error uploading image'
            ];
        }else{
            $image_name = time().$image->getClientOriginalName();
            \Storage::disk('images')->put($image_name, \File::get($image));

            $data = [
                'code' => 200,
                'status' => 'success',
                'image' => $image_name
            ];
        }
        //Devolver datos
        return response()->json($data, $data['code']);
    }

    //Consiguir imagen por get
    public function getImage($filename){
        //Comprobar si existe el fichero
        $isset = \Storage::disk('images')->exists($filename);

        if($isset){
            //Consiguir la imagen
            $file = \Storage::disk('images')->get($filename);

            //Devolver la imagen
            return new Response($file, 200);

        }else{
            $data = [
                'code' => 404,
                'status' => 'error',
                'image' => 'La imagen no existe'
            ];
        }

        return \response()->json($data, $data['code']);
    }

    public function search($city, $checkin, $checkout)
    {

        $booked = Bookings::where('checkin', '<=', $checkout)
            ->where('checkout', '>=', $checkin)
            ->pluck('property_id');

        $properties = Property::where('properties.city', $city)
            ->groupBy('properties.id')
            ->whereNotIn('properties.id', $booked)
            ->get();

        return response()->json([
            'status' => 'succes',
            'properties' => $properties
        ], 200);

//       $properties = Property::where('properties.city', $city)->get();
//
//       return response()->json([
//            'status' => 'succes',
//            'properties' => $properties
//       ], 200);



    }

}
