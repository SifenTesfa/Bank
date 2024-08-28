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
        'user_id' => 'required|exists:users,id',
        'bank_id' => 'required|exists:banks,id',
        'rating' => 'required|integer|min:1|max:5',
        'review' => 'required|string|max:255',
    ]);


    $review = new Review();
    $review->userp_id = $request->user_id;
    $review->bank_id = $request->bank_id;
    $review->rating = $request->rating;
    $review->review = $request->review;
    $review->status = 1; // Set status to 1 when created
    $review->save();

    return redirect()->back()->with('success', 'Review submitted successfully!');
}

public function update(Request $request, $id)
{
    $review = Review::findOrFail($id);

    $request->validate([
        'rating' => 'required|integer|min:1|max:5',
        'review' => 'required|string|max:255',
    ]);

    $review->rating = $request->rating;
    $review->review = $request->review;
    $review->save();

    return redirect()->back()->with('success', 'Review updated successfully!');
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
    public function list()
    {
        return Review::all();
    }

}
