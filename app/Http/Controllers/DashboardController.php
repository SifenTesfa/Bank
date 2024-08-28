<?php

namespace App\Http\Controllers;

use App\Models\Bank;
use App\Models\Blog;
use App\Models\ReviewA;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    public function index()
    {
        $user = auth()->user();
        
        // Total counts for all records
        $totalBanks = Bank::count(); // Total number of banks
        $totalBlogs = Blog::count(); // Total number of blogs
        $totalReviews = ReviewA::count(); // Total number of reviews

        // Assuming you want to count all records without filtering by user (since user_id is not present):
        $userBanks = Bank::count(); // Count all banks (no user-specific filter)
        $userBlogs = Blog::count(); // Count all blogs (no user-specific filter)
        $userReviews = ReviewA::count(); // Count all reviews (no user-specific filter)

        return inertia('Dashboard', [
            'auth' => ['user' => $user],
            'totalBanks' => $totalBanks,
            'userBanks' => $userBanks,
            'totalBlogs' => $totalBlogs,
            'userBlogs' => $userBlogs,
            'totalReviews' => $totalReviews,
            'userReviews' => $userReviews,
        ]);
    }
}