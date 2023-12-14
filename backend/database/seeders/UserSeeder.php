<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{


    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        User::create([
            'name' => 'timur',
            'email' => 'timur@gmail.com',
            'password' => Hash::make('timur'),
            'is_admin' => "admin"
        ]);
    }

    public function up(): void {
        // 
    }
}
