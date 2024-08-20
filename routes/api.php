<?php

use Illuminate\Auth\Middleware\Authenticate;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\BanklistController;
use App\Http\Controllers\BlogController;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware(Authenticate::using('sanctum'));
Route::post ("addBank",[BanklistController::class,"addBank"]);
Route::get("list",[BanklistController::class,"list"]);
Route::post ("addBlog",[BlogController::class,"addBlog"]);
Route::get("listBlog",[BlogController::class,"listBlog"]);