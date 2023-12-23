<?php

use App\Http\Controllers\ApiController;
use Illuminate\Support\Facades\Route;
use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/
Route::middleware('auth:sanctum')->group(function () {
	Route::get('/user', function (Request $request) {
			return $request->user();
	});
	Route::post('/logout', [ApiController::class, 'logout']);
	Route::post('/message', [ApiController::class, 'createMessage']);

	Route::post('/userAvatar', [ApiController::class, 'setUserAvatar']);
	Route::post('/userPhone', [ApiController::class, 'setUserPhone']);
	
	Route::get('/logs', [ApiController::class, 'logs']);
});

Route::get('/users', [ApiController::class, 'users']);
Route::post('/signup', [ApiController::class, 'create']);
Route::post('/login', [ApiController::class, 'login']);

Route::get('/games', [ApiController::class, 'games']);
Route::get('/game/{id}', [ApiController::class, 'game']);

Route::get('/messages', [ApiController::class, 'messages']);

Route::get('/reviews', [ApiController::class, 'reviews']);

Route::post('/log', [ApiController::class, 'createLog']);

