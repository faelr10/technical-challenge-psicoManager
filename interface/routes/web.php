<?php

use App\Http\Controllers\ChatController;
use App\Http\Controllers\LoginController;
use Illuminate\Support\Facades\Route;

Route::get('/login', [LoginController::class, 'authUser'])->name('login');;
Route::post('/login', [ChatController::class, 'processLogin'])->name('processLogin');
Route::get('/', [ChatController::class, 'index'])->name('chat');;
