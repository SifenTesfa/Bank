<?php

// app/Models/BlogPost.php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BlogPost extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'content',
        'slug',
        'status',
        'image_path',
    ];
}