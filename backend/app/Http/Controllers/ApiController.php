<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\Game;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\Hash;

class ApiController extends Controller
{
    public function user($id): JsonResponse
    {
        $user = User::find($id);

        if (!$user)
            return response()->json(['message' => 'User not found'], 404);

        return response()->json($user);
    }

    public function users(): JsonResponse
    {
        return response()->json(User::all());
    }

    public function games(): JsonResponse
    {
        return response()->json(Game::all());
    }

    public function create(Request $request): JsonResponse
    {
        try {
            $user = User::create([
                'name' => $request['name'],
                'email' => $request['email'],
                'password' => Hash::make($request['password'])
            ]);
    
            return response()->json([
                'message' => 'User successfully created',
                'data' => $user
            ]);
        } catch (\Throwable $e) {
            return response()->json(['message' => $e->getMessage()], 400);
        }
    }
}
