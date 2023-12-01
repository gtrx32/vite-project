<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ProductRequest extends FormRequest
{
    public function authorize()
    {
        // only allow updates if the user is logged in
        return backpack_auth()->check();
    }

    public function rules()
    {
        return [
            'name' => 'required|min:5|max:255|string',
            'price' => 'required|numeric',
            'description' => 'required',
            'imageUrl' => 'required',
            'rating' => 'required|numeric',
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
            'price.required' => 'Это поле обязательно для заполнения',
            'description.required' => 'Это поле обязательно для заполнения',
            'imageUrl.required' => 'Это поле обязательно для заполнения',
            'rating.required' => 'Это поле обязательно для заполнения',
        ];
    }
}
