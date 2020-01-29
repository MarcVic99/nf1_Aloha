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
Route::put('/api/update', 'AuthController@update');

//Mostrar usuaros
Route::get('/api/user', 'AuthController@getUser');
Route::get('/api/users', 'AuthController@showUser');
Route::get('/api/users/{id}', 'AuthController@showUserByid');


Route::group([
    'prefix' => 'auth',
], function () {

    Route::post('upload', 'AuthController@upload');
    Route::post('logout', 'AuthController@logout');
    Route::post('refresh', 'AuthController@refresh');
    Route::get('me', 'AuthController@me');

});

//Ctegories
Route::resource('/api/category', 'CategoryController');

//Properties

Route::resource('/api/property', 'PropertyController');
Route::post('/api/property/upload', 'PropertyController@upload');
Route::get('/api/property/image/{filename}', 'PropertyController@getImage');
Route::get('/api/property/category/{id}', 'PropertyController@getPropertyByCategory');
Route::get('/api/property/user/{id}', 'PropertyController@getPropertyByUser');
Route::get('/api/search/property/city/{city}/checkin/{checkin}/checkout/{checkout}', 'PropertyController@search');


//Bookings
Route::resource('/api/booking', 'BookingsController');


//Messages
Route::resource('/api/message', 'MessagesController');

//Cmments
Route::resource('/api/comment', 'CommentsController');

//Map
Route::resource('/api/maps', 'MapController');








