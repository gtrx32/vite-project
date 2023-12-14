<?php

namespace App\Http\Controllers\Admin;

use App\Http\Requests\ReviewRequest;
use Backpack\CRUD\app\Http\Controllers\CrudController;
use Illuminate\Http\Request;

class ReviewController extends CrudController
{
    use \Backpack\CRUD\app\Http\Controllers\Operations\ListOperation;
    use \Backpack\CRUD\app\Http\Controllers\Operations\CreateOperation;
    use \Backpack\CRUD\app\Http\Controllers\Operations\UpdateOperation;
    use \Backpack\CRUD\app\Http\Controllers\Operations\DeleteOperation;

    public function setup()
    {
        $this->crud->setModel('App\Models\Review');
        $this->crud->setRoute(config('backpack.base.route_prefix') . '/review');
        $this->crud->setEntityNameStrings('review', 'reviews');
    }

    protected function setupListOperation() {
        $this->crud->addColumn([
            'name' => 'title',
            'type' => 'text',
        ]);
        $this->crud->addColumn([
            'name' => 'subtitle',
            'type' => 'text',
        ]);
        $this->crud->addColumn([
            'name' => 'date',
            'type' => 'text',
        ]);
        $this->crud->addColumn([
            'name' => 'description',
            'type' => 'text',
        ]);
        $this->crud->addColumn([
            'name' => 'imageUrl',
            'type' => 'custom_html',
            'value' => function ($model) {
                return '<img src="' . $model->imageUrl . '" width="100">';
            },
        ]);
    }

    protected function setupCreateOperation()
    {
        $this->crud->setValidation(ReviewRequest::class);

        $this->crud->addField([
            'name' => 'title',
            'type' => 'text',
            'label' => 'Заголовок',
        ]);
        $this->crud->addField([
            'name' => 'subtitle',
            'type' => 'text',
            'label' => 'Подзаголовок',
        ]);
        $this->crud->addField([
            'name' => 'description',
            'type' => 'textarea',
            'label' => 'Описание',
        ]);
        $this->crud->addField([
            'name' => 'date',
            'type' => 'text',
            'label' => 'Дата',
        ]);
        $this->crud->addField([
            'name' => 'imageUrl',
            'type' => 'text',
            'label' => 'Главное изображение',
        ]);
    }

    protected function setupUpdateOperation() {
        $this->setupCreateOperation();
    }

    private function reviews(): array {
        $reviews = $this->crud->model->all();
        return $reviews->toArray();
    }

    public function store(Request $request) {
        $request->validate([
            'title' => 'required',
            'subtitle' => 'required',
            'date' => 'required',
            'description' => 'required',
            'imageUrl' => 'required',
        ]);

        $reviews = $this->crud->create([
            'title' => $request->title,
            'subtitle' => $request->subtitle,
            'description' => $request->description,
            'date' => $request->date,
            'imageUrl' => $request->imageUrl,
        ]);

        $reviews->save();

        return redirect($this->crud->route);
    }
}
