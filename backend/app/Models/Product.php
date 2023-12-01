<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Backpack\CRUD\app\Models\Traits\CrudTrait;

class Product extends Model
{
	use CrudTrait;

	protected $fillable = [
		'name',
		'price',
		'description',
		'imageUrl',
		'rating',
	];
}