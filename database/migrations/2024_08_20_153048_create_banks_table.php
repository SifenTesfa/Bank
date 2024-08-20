<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateBanksTable extends Migration
{
    public function up()
    {
        Schema::create('banks', function (Blueprint $table) {
            $table->bigIncrements('id'); // Custom primary key
            $table->string('image')->nullable(); // Column for bank image URL
            $table->string('name'); // Column for bank name
            $table->text('description')->nullable(); // Column for bank description
            $table->decimal('loan_interest', 5, 2)->nullable(); // Column for loan interest rate
            $table->string('email')->nullable(); // Column for contact email
            $table->string('website')->nullable(); // Column for bank website
            $table->string('primary_phone')->nullable(); // Column for primary phone number
            $table->string('secondary_phone')->nullable(); // Column for secondary phone number
            $table->string('postal_code')->nullable(); // Column for postal code
            $table->string('swift_code')->nullable(); // Column for SWIFT code
            $table->string('status')->default('active'); // Set a default status (active/inactive)
            $table->timestamps(); // Created at and updated at timestamps
        });
    }

    public function down()
    {
        Schema::dropIfExists('banks');
    }
}