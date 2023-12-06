<?php

namespace App\Http\Controllers\Admin;

use App\Http\Requests\MessageRequest;
use Backpack\CRUD\app\Http\Controllers\CrudController;
use Illuminate\Http\Request;

class MessageController extends CrudController
{
    use \Backpack\CRUD\app\Http\Controllers\Operations\ListOperation;
    use \Backpack\CRUD\app\Http\Controllers\Operations\CreateOperation;
    use \Backpack\CRUD\app\Http\Controllers\Operations\UpdateOperation;
    use \Backpack\CRUD\app\Http\Controllers\Operations\DeleteOperation;

    public function setup()
    {
        $this->crud->setModel('App\Models\Message');
        $this->crud->setRoute(config('backpack.base.route_prefix') . '/message');
        $this->crud->setEntityNameStrings('message', 'messages');
    }

    protected function setupListOperation() {
        $this->crud->addColumn([
            'name' => 'text',
            'type' => 'text',
        ]);
        $this->crud->addColumn([
            'name' => 'date',
            'type' => 'text',
        ]);
        $this->crud->addColumn([
			'name' => 'userName',
			'type' => 'text',
		]);
		$this->crud->addColumn([
			'name' => 'userEmail',
			'type' => 'text',
	    ]);
    }

    protected function setupCreateOperation()
    {
        $this->crud->setValidation(MessageRequest::class);

        $this->crud->addField([
            'name' => 'text',
            'type' => 'text',
            'label' => 'Текст сообщения',
        ]);
        $this->crud->addField([
            'name' => 'date',
            'type' => 'text',
            'label' => 'Дата отправки',
        ]);
        $this->crud->addField([
		    'name' => 'userName',
			'type' => 'text',
			'label' => 'имя отправителя',
		]);
		$this->crud->addField([
			'name' => 'userEmail',
			'type' => 'text',
			'label' => 'email отправителя',
		]);
    }

    protected function setupUpdateOperation() {
        $this->setupCreateOperation();
    }

    private function messages(): array {
        $messages = $this->crud->model->all();
        return $messages->toArray();
    }

    public function store(Request $request) {
        $request->validate([
            'text' => 'required',
            'date' => 'required',
            'userName' => 'required',
            'userEmail' => 'required',
        ]);

        $messages = $this->crud->create([
            'text' => $request->text,
            'date' => $request->date,
            'userName' => $request->userName,
            'userEmail' => $request->userEmail,
        ]);

        $messages->save();

        return redirect($this->crud->route);
    }
}
