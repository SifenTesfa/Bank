<?php

// database/migrations/xxxx_xx_xx_create_reviews_table.php
namespace App\Models;


use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class ReviewA extends Model
{
public function up()
{
    Schema::create('reviews', function (Blueprint $table) {
        $table->id();
        $table->text('review');
        $table->enum('status', ['pending', 'approved'])->default('pending');
        $table->timestamps();
    });
}
}