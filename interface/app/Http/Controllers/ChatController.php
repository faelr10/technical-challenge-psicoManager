<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ChatController extends Controller
{
    public function index(Request $request)
    {
        $valor = $request->input('user');
        return view('chat', ['valor' => $valor]);
    }

    public function processLogin(Request $request)
    {
        $nome = $request->input('nome');
        return redirect()->route('chat', ['user' => $nome]);
    }
}
