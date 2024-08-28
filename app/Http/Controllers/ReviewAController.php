<?php

namespace App\Http\Controllers;

use App\Models\ReviewA;
use Illuminate\Http\Request;

class ReviewAController extends Controller
{
    public function store(Request $request)
    {
        $request->validate([
            'review' => 'required|string',
        ]);

        $review = ReviewA::create($request->only('review'));

        return response()->json($review, 201);
    }

    public function index()
    {
        return ReviewA::all();
    }

    public function approve($id)
    {
        $review = ReviewA::findOrFail($id);
        $review->status = 'approved';
        $review->save();

        return response()->json($review);
    }
}
