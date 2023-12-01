<?php

namespace App\Http\Controllers\Admin;

use App\Http\Requests\ProductRequest;
use Backpack\CRUD\app\Http\Controllers\CrudController;
use Illuminate\Http\Request;

class ProductController extends CrudController
{
    use \Backpack\CRUD\app\Http\Controllers\Operations\ListOperation;
    use \Backpack\CRUD\app\Http\Controllers\Operations\CreateOperation;
    use \Backpack\CRUD\app\Http\Controllers\Operations\UpdateOperation;
    use \Backpack\CRUD\app\Http\Controllers\Operations\DeleteOperation;

    public function setup()
    {
        $this->crud->setModel('App\Models\Product');
        $this->crud->setRoute(config('backpack.base.route_prefix') . '/product');
        $this->crud->setEntityNameStrings('product', 'products');
    }

    protected function setupListOperation() {
        $this->crud->addColumn([
            'name' => 'name',
            'type' => 'text',
        ]);
        $this->crud->addColumn([
            'name' => 'price',
            'type' => 'number',
        ]);
        $this->crud->addColumn([
            'name' => 'description',
            'type' => 'textarea',
        ]);
        $this->crud->addColumn([
            'name' => 'rating',
            'type' => 'number',
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
        $this->crud->setValidation(ProductRequest::class);

        $this->crud->addField([
            'name' => 'name',
            'type' => 'text',
            'label' => 'Название',
        ]);
        $this->crud->addField([
            'name' => 'price',
            'type' => 'number',
            'label' => 'Цена',
        ]);
        $this->crud->addField([
            'name' => 'description',
            'type' => 'textarea',
            'label' => 'Описание',
        ]);
        $this->crud->addField([
            'name' => 'imageUrl',
            'type' => 'text',
            'label' => 'Изображение',
        ]);
        $this->crud->addField([
            'name' => 'rating',
            'type' => 'number',
            'label' => 'Рейтинг',
        ]);
    }

    protected function setupUpdateOperation() {
        $this->setupCreateOperation();
    }

    private function products(): array {
        $products = $this->crud->model->all();
        return $products->toArray();
    }

    public function store(Request $request) {
        $request->validate([
            'name' => 'required',
            'price' => 'required',
            'description' => 'required',
            'imageUrl' => 'required',
            'rating' => 'required',
        ]);

        $product = $this->crud->create([
            'name' => $request->name,
            'price' => $request->price,
            'description' => $request->description,
            'imageUrl' => $request->imageUrl,
            'rating' => $request->rating,
        ]);

        $product->save();

        return redirect($this->crud->route);
    }
}
