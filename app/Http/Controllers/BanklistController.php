<?php

namespace App\Http\Controllers;
use App\Models\Bank;
use Illuminate\Http\Request;

class BanklistController extends Controller
{
    //
    function addBank(Request $req){
        $bank = new Bank;
        $bank->name=$req->input('name');
        $bank->email=$req->input('email');
        $bank->description=$req->input('description');
        $bank->primary_phone=$req->input('primary_phone');
        $bank->secondary_phone=$req->input('secondary_phone');
        $bank->postal_code=$req->input('postal_code');
        $bank->swift_code=$req->input('swift_code');
        $bank->image=$req->file('image')->store('products');
        $bank->loan_interest=$req->input('loan_interest');
        $bank->website=$req->input('website');
        $bank->save();
        return $bank;
    }
    function list(){
        return Bank::all();

    }
    
}
