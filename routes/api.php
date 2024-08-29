<?php

use Illuminate\Auth\Middleware\Authenticate;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\BanklistController;
use App\Http\Controllers\UserController;
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
Route::post('reviews', [ReviewController::class, 'store'])->middleware(Authenticate::using('sanctum'));
Route::get('listReview', [ReviewController::class, 'listReview']);
Route::post("register",[UserpController::class, "register"]);
Route::post("login",[UserpController::class,"login"]);
