<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Backpack\CRUD\app\Models\Traits\CrudTrait;

class Review extends Model
{
	use CrudTrait;

	protected $fillable = [
		'title',
		'subtitle',
		'description',
		'date',
		'imageUrl',
	];
}