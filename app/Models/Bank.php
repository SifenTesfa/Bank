<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Bank extends Model
{
    use HasFactory; // Add this line to enable factory support

    // Specify which attributes should be mass-assignable
    protected $fillable = [
        'image',
        'name',
        'description',
        'loan_interest',
        'email',
        'website',
        'primary_phone',
        'secondary_phone',
        'postal_code',
        'swift_code',
        'status',
    ];
}