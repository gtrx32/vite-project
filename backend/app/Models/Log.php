<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Backpack\CRUD\app\Models\Traits\CrudTrait;

class Log extends Model
{
	use CrudTrait;

	protected $fillable = [
		'date',
		'action',
		'userEmail',
	];
}