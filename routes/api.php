<?php

use Illuminate\Auth\Middleware\Authenticate;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\BanklistController;
use App\Http\Controllers\BlogpController;
use App\Http\Controllers\ReviewController;
use App\Http\Controllers\UserpController;
Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware(Authenticate::using('sanctum'));
Route::post ("addBank",[BanklistController::class,"addBank"]);
Route::get("list",[BanklistController::class,"list"]);
Route::post ("addBlog",[BlogpController::class,"addBlog"]);
Route::get("listBlog",[BlogpController::class,"listBlog"]);
Route::post('reviews', [ReviewController::class, 'store']);
Route::put('/reviews/{id}', [ReviewController::class, 'update']);
Route::delete('/reviews/{id}', [ReviewController::class, 'destroy']);
Route::post('/reviews/{id}/approve', [ReviewController::class, 'approve']);
Route::get('list', [ReviewController::class, 'list']);
Route::post('register', [UserpController::class, 'register']);
Route::post("login",[UserpController::class,"login"]);