<?php

use App\Http\Controllers\ApiController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

Route::get('/user/{id}', [ApiController::class, 'user']);
Route::get('/users', [ApiController::class, 'users']);
Route::post('/user', [ApiController::class, 'create']);
Route::get('/games', [ApiController::class, 'games']);
