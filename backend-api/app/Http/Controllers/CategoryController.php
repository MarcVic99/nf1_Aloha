<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;
use App\Category;

class CategoryController extends Controller{

    public function __construct(){
        $this->middleware('auth:api', ['except' => ['index', 'show']]);
    }

    public function index(){
        $categories = Category::all();

        return response()->json([
            'code' => 200,
            'status' => 'success',
            'categories' => $categories
        ]);
    }
    public function show($id){
        $categories = Category::find($id);

        if(is_object($categories)){

            $data= [
                'code' => 200,
                'status' => 'success',
                'categories' => $categories
            ];
        }else{
            $data= [
                'code' => 404,
                'status' => 'error',
                'categories' => 'La categoria no existe'
            ];
        }
        return \response()->json($data, $data['code']);
    }

    public function store(Request $request){
        //Recoger los datos por post
        $params_array = $request->all();

        if(!empty($params_array)) {
            //Validar los datos
            $validate = \Validator::make($params_array, [
                'name' => 'required|unique:categories',
            ]);

            //Guardar la categoria
            if ($validate->fails()) {
                $data = [
                    'code' => 404,
                    'status' => 'error',
                    'message' => 'La categoria ya existe'
                ];
            } else {
                $category = User::find(Auth::user()->id);
                $category = new Category();
                $category->name = $params_array['name'];
                $category->save();

                $data = [
                    'code' => 200,
                    'status' => 'succes',
                    'category' => $category
                ];
            }

        }else{
            $data = [
                'code' => 404,
                'status' => 'error',
                'message' => 'no has enviado ninguna categoria categoria'
            ];
        }

        //Devolver resultados
        return response()->json($data, $data['code']);
    }

    public function update($id, Request $request){
        //recoger datos por post
        $params_array = $request->all();

        if(!empty($params_array)){
            //Validar los datos
            $validate = \Validator::make($params_array, [
                'name' => 'required'
            ]);

            //Quitar datos que no quiero actualizar
            unset($params_array['id']);
            unset($params_array['created_at']);

            //Actualizar la categoria
            $category = Category::where('id', $id)->update($params_array);

            $data = [
                'code' => 200,
                'status' => 'succes',
                'category' => $params_array
            ];
        }else{
            $data = [
                'code' => 404,
                'status' => 'error',
                'message' => 'no has enviado ninguna categoria categoria'
            ];
        }
        //Devolver respuesta
        return response()->json($data, $data['code']);
    }

}
