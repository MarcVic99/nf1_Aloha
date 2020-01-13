<?php


/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::post('/api/signUp', 'AuthController@signUp');
Route::post('/api/login', 'AuthController@login');
Route::put('/api/profile/edit', 'AuthController@update');

//Mostrar usuaros
Route::get('/api/user', 'AuthController@getUser');
Route::get('/api/users', 'AuthController@showUser');
Route::get('/api/users/{id}', 'AuthController@showUserByid');


Route::group([
    'prefix' => 'auth',
], function () {

    Route::post('uploade', 'AuthController@upload');
    Route::post('logout', 'AuthController@logout');
    Route::post('refresh', 'AuthController@refresh');
    Route::get('me', 'AuthController@me');

});


//Route::middleware('auth:api')->get('/user', function (Request $request) {
   // return $request->user();
//
