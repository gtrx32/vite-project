<?php

namespace App\Http\Controllers;

use App\Http\Requests\LoginRequest;
use App\Http\Requests\SugnupRequest;
use App\Models\User;
use App\Models\Game;
use App\Models\Message;
use App\Models\Review;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;

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

    public function game($id): JsonResponse
    {
        $game = Game::find($id);

        if (!$game)
            return response()->json(['message' => 'Game not found'], 404);

        return response()->json($game);
    }

    public function messages(): JsonResponse
    {
        return response()->json(Message::all());
    }

    public function reviews(): JsonResponse
    {
        return response()->json(Review::all());
    }

    public function createMessage(Request $request): JsonResponse
    {
        try {
            $message = Message::create([
                'text' => $request['text'],
                'date' => $request['date'],
                'userName' => $request['userName'],
                'userEmail' => $request['userEmail']
            ]);
    
            return response()->json([
                'message' => 'Message successfully created',
                'data' => $message
            ]);
        } catch (\Throwable $e) {
            return response()->json(['message' => $e->getMessage()], 400);
        }
    }
    
    public function create(SugnupRequest $request)
    {
        try {
            $data = $request->validated();
            /** @var \App\Models\User $user */
            $user = User::create([
                'name' => $data['name'],
                'email' => $data['email'],
                'password' => Hash::make($data['password']),
                'is_admin' => "not admin",
            ]);
    
            $token = $user->createToken("main")->plainTextToken;
            
            return response(compact('user', 'token'));
        } catch (\Throwable $e) {
            return response()->json(['message' => $e->getMessage()], 400);
        }
    }

    public function setUserAvatar(Request $request): JsonResponse
    {
        try {
            $user = User::where('email', $request->email)->first();
            $user->avatar = $request->avatar;
            $user->save();
    
            return response()->json([
                'message' => 'Avatar successfully updated',
                'data' => $user
            ]);
        } catch (\Throwable $th) {
            return response()->json(['message' => $th->getMessage()], 400);
        }
    }

    public function setUserPhone(Request $request): JsonResponse
    {
        try {
            $user = User::where('email', $request->email)->first();
            $user->phone = $request->phone;
            $user->save();
    
            return response()->json([
                'message' => 'Phone successfully updated',
                'data' => $user
            ]);
        } catch (\Throwable $th) {
            return response()->json(['message' => $th->getMessage()], 400);
        }
    }

    public function login(LoginRequest $request) 
    {
        $credentials = $request->validated();
        if(!Auth::attempt($credentials)) {
            return response([
                'message' => 'Provided email or password is incorrect',
                'errors' => [
                    'text' => 'Provided email or password is incorrect',
                ]
            ], 422);
        }

        /** @var \App\Models\User $user */
        $user = Auth::user();
        $token = $user->createToken('main')->plainTextToken;

        return response(compact('user', 'token'));
    }

    public function logout(Request $request)
    {
        /** @var \App\Models\User $user */
        $user = $request->user();
        $user->currentAccessToken()->delete();

        return response("", 204);
    }
}
