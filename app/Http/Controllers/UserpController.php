<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Userp;
use Illuminate\Support\Facades\Hash;
class UserpController extends Controller
{
    //
    function register(Request $req){
        $user= new Userp;
        $user->name= $req->input("name");
        $user->email= $req->input("email");
        $user->password=Hash::make ($req->input("password"));
        $user->image=$req->file('image')->store('products');
        $user->save();

        return $user;
    }
    function login(Request $req){
        $user= Userp::where("email",$req->email)->first();
        if(!$user ||!Hash::check($req->password,$user->password)){
            return ["error"=>"email or password is not matched"];
        }
        return $user;
    }
}
