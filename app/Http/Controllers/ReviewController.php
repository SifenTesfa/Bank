<?php

namespace App\Http\Controllers;
use App\Models\Review;
use Illuminate\Http\Request;

class ReviewController extends Controller
{
    //

public function store(Request $request)
{
    $request->validate([
        'bank_id' => 'required|exists:banks,id',
        'rating' => 'required|integer|min:1|max:5',
        'review' => 'required|string|max:255',
    ]);

    $review = Review::where(['user_id' => auth()->id(), 'bank_id' => $request->bank_id])->first();
    if(!$review){
        $review = new Review();
    }
    $review->user_id = auth()->id();
    $review->bank_id = $request->bank_id;
    $review->rating = $request->rating;
    $review->review = $request->review;
    $review->status = 1; // Set status to 1 when created
    $review->save();

    return response()->json([
        'success' => true,
        'message' => 'Review submitted successfully',
    ], 200);
}



public function destroy($id)
{
    $review = Review::findOrFail($id);
    $review->delete();

    return redirect()->back()->with('success', 'Review deleted successfully!');
}
public function approve($id)
    {
        $review = Review::findOrFail($id);
        $review->status = 2; // Set status to 2 when approved
        $review->save();

        return redirect()->back()->with('success', 'Review approved successfully!');
    }
    public function listReview()
{
    // Fetch all reviews where the status is 2
    $reviews = Review::where('status', 2)->get();

    // Return the results as a JSON response
    return response()->json($reviews);
}

}
