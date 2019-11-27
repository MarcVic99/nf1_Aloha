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
Route::get('/', function () {
    return view('welcome');
});
Route::get('/property/{id}', 'GetsController@getProperty');
Route::get('/users/{id}', 'GetsController@getUsers');
Route::post('/login','PostsController@logIn');
Route::get('/info/{email}/pass/{password}', 'GetsController@ShowUserInfo');
Route::post('/post', 'PostsController@createUser');
Route::post('/signup', 'PostsController@signUp');

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
