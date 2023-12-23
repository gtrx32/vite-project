<?php

namespace App\Http\Controllers\Admin;

use App\Http\Requests\LogRequest;
use Backpack\CRUD\app\Http\Controllers\CrudController;
use Illuminate\Http\Request;

class LogController extends CrudController
{
    use \Backpack\CRUD\app\Http\Controllers\Operations\ListOperation;
    use \Backpack\CRUD\app\Http\Controllers\Operations\CreateOperation;
    use \Backpack\CRUD\app\Http\Controllers\Operations\UpdateOperation;
    use \Backpack\CRUD\app\Http\Controllers\Operations\DeleteOperation;

    public function setup()
    {
        $this->crud->setModel('App\Models\Log');
        $this->crud->setRoute(config('backpack.base.route_prefix') . '/log');
        $this->crud->setEntityNameStrings('log', 'logs');
    }

    protected function setupListOperation() {
        $this->crud->addColumn([
            'name' => 'date',
            'type' => 'text',
        ]);
        $this->crud->addColumn([
			'name' => 'action',
			'type' => 'text',
		]);
		$this->crud->addColumn([
			'name' => 'userEmail',
			'type' => 'text',
	    ]);
    }

    protected function setupCreateOperation()
    {
        $this->crud->setValidation(LogRequest::class);

        $this->crud->addField([
            'name' => 'date',
            'type' => 'text',
            'label' => 'Дата',
        ]);
        $this->crud->addField([
		    'name' => 'action',
			'type' => 'text',
			'label' => 'Действие',
		]);
		$this->crud->addField([
			'name' => 'userEmail',
			'type' => 'text',
			'label' => 'email пользователя',
		]);
    }

    protected function setupUpdateOperation() {
        $this->setupCreateOperation();
    }

    private function messages(): array {
        $logs = $this->crud->model->all();
        return $logs->toArray();
    }

    public function store(Request $request) {
        $request->validate([
            'date' => 'required',
            'action' => 'required',
            'userEmail' => 'required',
        ]);

        $logs = $this->crud->create([
            'date' => $request->date,
            'action' => $request->action,
            'userEmail' => $request->userEmail,
        ]);

        $logs->save();

        return redirect($this->crud->route);
    }
}
