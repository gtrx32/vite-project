<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Backpack\CRUD\app\Models\Traits\CrudTrait;

class Message extends Model
{
	use CrudTrait;

	protected $fillable = [
		'text',
		'date',
		'userName',
		'userEmail',
	];
}