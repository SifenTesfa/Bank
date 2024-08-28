<?php

namespace App\Http\Controllers;

use App\Http\Resources\BankResource;
use App\Http\Requests\StoreBankRequest;
use App\Http\Requests\UpdateBankRequest;
use App\Models\Bank;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class BankController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $query = Bank::query();

        $sortField = request("sort_field", 'created_at');
        $sortDirection = request("sort_direction", "desc");

        if (request("name")) {
            $query->where("name", "like", "%" . request("name") . "%");
        }
        if (request("status")) {
            $query->where("status", request("status"));
        }

        $banks = $query->orderBy($sortField, $sortDirection)
            ->paginate(10)
            ->onEachSide(1);

        return inertia("Bank/Index", [
            "banks" => BankResource::collection($banks),
            'queryParams' => request()->query() ?: null,
            'success' => session('success'),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return inertia("Bank/Create");
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreBankRequest $request)
    {
        $data = $request->validated();
        /** @var $image \Illuminate\Http\UploadedFile */
        $image = $data['image'] ?? null;
        $data['created_by'] = Auth::id();
        if ($image) {
            $data['image_path'] = $image->store('bank/' . Str::random(), 'public');
        }
        Bank::create($data);

        return to_route('bank.index')
            ->with('success', 'Bank was created');
    }

    /**
     * Display the specified resource.
     */
    public function show(Bank $bank)
    {
        return inertia('Bank/Show', [
            'bank' => new BankResource($bank),
            'success' => session('success'),
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Bank $bank)
    {
        return inertia('Bank/Edit', [
            'bank' => new BankResource($bank),
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateBankRequest $request, $bankId)
    {
        $data = $request->validated();
        $bank = Bank::find($bankId);
        
        
        $image = $data['image'] ?? null;
        if ($image) {
            if ($bank->image_path) {
                Storage::disk('public')->deleteDirectory(dirname($bank->image_path));
            }
            $data['image_path'] = $image->store('bank/' . Str::random(), 'public');
        }
        $bank->update($data);

        return to_route('bank.index')
            ->with('success', "Bank \"$bank->name\" was updated");
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Bank $bank)
    {
        $name = $bank->name;
        $bank->delete();
        if ($bank->image_path) {
            Storage::disk('public')->deleteDirectory(dirname($bank->image_path));
        }
        return to_route('bank.index')
            ->with('success', "Bank \"$name\" was deleted");
    }
}