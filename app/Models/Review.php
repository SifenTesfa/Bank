<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Review extends Model
{
    use HasFactory;
    protected $fillable =['user_id', 'bank_id', 'rating', 'review', 'status'];

    public function Bank()
    {
        return $this->belongsTo(Bank::class);
    }
}
