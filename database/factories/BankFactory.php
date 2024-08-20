<?php

namespace Database\Factories;

use App\Models\Bank;
use Illuminate\Database\Eloquent\Factories\Factory;

class BankFactory extends Factory
{
    protected $model = Bank::class;

    public function definition()
    {
        return [
            'image' => $this->faker->imageUrl(640, 480, 'business', true),
            'name' => $this->faker->company,
            'description' => $this->faker->paragraph,
            'loan_interest' => $this->faker->randomFloat(2, 1, 10), // Interest rate between 1% and 10%
            'email' => $this->faker->unique()->safeEmail,
            'website' => $this->faker->url,
            'primary_phone' => $this->faker->phoneNumber,
            'secondary_phone' => $this->faker->optional()->phoneNumber,
            'postal_code' => $this->faker->postcode,
            'swift_code' => strtoupper($this->faker->lexify('????????')),
            'status' => $this->faker->randomElement(['active', 'inactive']),
            'created_at' => now(),
            'updated_at' => now(),
        ];
    }
}