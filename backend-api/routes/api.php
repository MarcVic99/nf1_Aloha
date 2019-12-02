<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
Route::post('signUp', 'AuthController@signUp');
Route::group([
    'prefix' => 'auth',
], function () {
    Route::post('login', 'AuthController@login');
    Route::post('logout', 'AuthController@logout');
    Route::post('refresh', 'AuthController@refresh');
    Route::post('me', 'AuthController@me');

});
/*
Route::get('/', function () {
    return view('welcome');
});
Route::get('/property/{id}', 'GetsController@getProperty');
Route::get('/users/{id}', 'GetsController@getUsers');
Route::post('/login','PostsController@logIn');
Route::get('/info/{email}/pass/{password}', 'GetsController@ShowUserInfo');
Route::post('/post', 'PostsController@createUser');
Route::post('/signup', 'PostsController@signUp');
Route::post('/property', 'PropertiesController@createProperty');

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
*/
