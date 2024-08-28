<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Review extends Model
{
    use HasFactory;
    protected $fillable = ['bank_id', 'rating', 'review'];

    public function Bank()
    {
        return $this->belongsTo(Bank::class);
    }
}
