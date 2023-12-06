<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class MessageRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        // only allow updates if the user is logged in
        return backpack_auth()->check();
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'text' => 'required',
            'date' => 'required',
			'userName' => 'required', 
			'userEmail' => 'required', 
        ];
    }

    public function attributes()
    {
        return [
            //
        ];
    }

    public function messages()
    {
        return [
            'text.required' => 'Это поле обязательно для заполнения',
            'date.required' => 'Это поле обязательно для заполнения',
            'userName.required' => 'Это поле обязательно для заполнения',
            'userEmail.required' => 'Это поле обязательно для заполнения',
        ];
    }
}
