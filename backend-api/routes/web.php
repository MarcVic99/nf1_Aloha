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

Route::get('/property/{id}', 'GetsController@getProperty');
Route::get('/users/{id}', 'GetsController@getUsers');
Route::get('/login/{email}/pass/{password}','GetsController@logIn');
Route::get('/info/{email}/pass/{password}', 'GetsController@ShowUserInfo');

Route::post('/post', 'PostsController@createUser');
Route::post('/signup', 'PostsController@signUp');