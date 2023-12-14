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
            'title' => 'required',
            'subtitle' => 'required',
            'description' => 'required',
            'date' => 'required',
            'imageUrl' => 'required',
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
            'title.required' => 'Это поле обязательно для заполнения',
            'subtitle.required' => 'Это поле обязательно для заполнения',
            'description.required' => 'Это поле обязательно для заполнения',
            'date.required' => 'Это поле обязательно для заполнения',
            'imageUrl.required' => 'Это поле обязательно для заполнения',
        ];
    }
}
