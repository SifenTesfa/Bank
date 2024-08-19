<?php

namespace App\Http\Controllers;
use App\Models\Blog;
use Illuminate\Http\Request;

class BlogController extends Controller
{
    //
    function addBlog(Request $req){
        $blog_post = new Blog;
        $blog_post->title=$req->input('title');
        $blog_post->content=$req->input('content');
        $blog_post->image=$req->file('image')->store('products');
        $blog_post->save();
        return $blog_post;
    }
    function listBlog(){
        return Blog::all();

    }
}
