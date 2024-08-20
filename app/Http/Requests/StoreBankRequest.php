<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class StoreBankRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            "name" => ['required', 'max:255'],
            'image' => ['nullable', 'image'],
            "description" => ['nullable', 'string'],
            'loan_interest' => ['nullable', 'numeric', 'between:0,100'], // Interest rate as a percentage
            'website' => ['nullable', 'url'],
            'email' => ['nullable', 'email'],
            'primary_phone' => ['nullable', 'string'],
            'secondary_phone' => ['nullable', 'string'],
            'postal_code' => ['nullable', 'string', 'max:10'],
            'swift_code' => ['nullable', 'string', 'max:11'], // SWIFT codes can be up to 11 characters
            'user_id' => ['required', 'integer', 'exists:users,id'] // Required user ID
        ];
    }
}