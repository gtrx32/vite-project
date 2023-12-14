<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ReviewRequest extends FormRequest
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
            'name' => 'required|min:5|max:255|string',
            'date' => 'required',
            'imageUrl' => 'required',
            'description' => 'required',
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
            'name.required' => 'Это поле обязательно для заполнения',
            'date.required' => 'Это поле обязательно для заполнения',
            'imageUrl.required' => 'Это поле обязательно для заполнения',
            'description.required' => 'Это поле обязательно для заполнения',
        ];
    }
}
