<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class BlogPr extends Model
{
    protected $fillable = [
        'title', 'content', 'status', 'image_path', 'slug'
    ];

    /**
     * Automatically set the slug when creating or updating the blog.
     */
    protected static function boot()
    {
        parent::boot();

        static::creating(function ($blog) {
            $blog->slug = $blog->generateSlug($blog->title);
        });

        static::updating(function ($blog) {
            if ($blog->isDirty('title')) {
                $blog->slug = $blog->generateSlug($blog->title);
            }
        });
    }

    /**
     * Generate a unique slug based on the title.
     *
     * @param string $title
     * @return string
     */
    protected function generateSlug($title)
    {
        return Str::slug($title) . '-' . Str::random(6);
    }
}
