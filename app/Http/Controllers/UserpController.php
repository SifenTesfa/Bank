<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use App\Models\Userp;
use Illuminate\Support\Facades\Hash;
class UserpController extends Controller
{
    //
    function register(Request $req){
        $user= new User();
        $user->name= $req->input("name");
        $user->email= $req->input("email");
        $user->password=Hash::make ($req->input("password"));
        if($req['image']){
            $user->image=$req->file('image')->store('products');
        }
        $user->role = 2;
        $user->save();

        return $user;
    }

    function login(Request $req){
        $user= User::where(['email' => $req->email, 'role' => '2'])->first();
        if(!$user ||!Hash::check($req->password,$user->password)){
            return ["error"=>"email or password is not matched"];
        }
        return $user;
    }
}
