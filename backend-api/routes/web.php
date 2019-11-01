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

Route::get('/properties/{id}','PropertiesController@returnProperties');

Route:: get("properties/{id}", "PropertiesController@getUser");

Route:: get("properties/", "PropertiesController@getUsers");

Route:: post("api/v1/post/","PostController@createUser");






