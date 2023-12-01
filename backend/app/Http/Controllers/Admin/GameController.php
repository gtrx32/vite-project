<?php

namespace App\Http\Controllers\Admin;

use App\Http\Requests\GameRequest;
use Backpack\CRUD\app\Http\Controllers\CrudController;
use Illuminate\Http\Request;

class GameController extends CrudController
{
    use \Backpack\CRUD\app\Http\Controllers\Operations\ListOperation;
    use \Backpack\CRUD\app\Http\Controllers\Operations\CreateOperation;
    use \Backpack\CRUD\app\Http\Controllers\Operations\UpdateOperation;
    use \Backpack\CRUD\app\Http\Controllers\Operations\DeleteOperation;

    public function setup()
    {
        $this->crud->setModel('App\Models\Game');
        $this->crud->setRoute(config('backpack.base.route_prefix') . '/game');
        $this->crud->setEntityNameStrings('game', 'games');
    }

    protected function setupListOperation() {
        $this->crud->addColumn([
            'name' => 'name',
            'type' => 'text',
        ]);
        $this->crud->addColumn([
            'name' => 'date',
            'type' => 'text',
        ]);
        $this->crud->addColumn([
            'name' => 'creator',
            'type' => 'text',
        ]);
        $this->crud->addColumn([
            'name' => 'platform',
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
        $this->crud->setValidation(GameRequest::class);

        $this->crud->addField([
            'name' => 'name',
            'type' => 'text',
            'label' => 'Название игры',
        ]);
        $this->crud->addField([
            'name' => 'date',
            'type' => 'text',
            'label' => 'Дата выхода',
        ]);
        $this->crud->addField([
            'name' => 'creator',
            'type' => 'text',
            'label' => 'Разработчик',
        ]);
        $this->crud->addField([
            'name' => 'platform',
            'type' => 'text',
            'label' => 'Платформа',
        ]);
        $this->crud->addField([
            'name' => 'imageUrl',
            'type' => 'text',
            'label' => 'Изображение',
        ]);
        $this->crud->addField([
            'name' => 'genres',
            'type' => 'text',
            'label' => 'Жанры',
        ]);
    }

    protected function setupUpdateOperation() {
        $this->setupCreateOperation();
    }

    private function games(): array {
        $games = $this->crud->model->all();
        return $games->toArray();
    }

    public function store(Request $request) {
        $request->validate([
            'name' => 'required',
            'date' => 'required',
            'creator' => 'required',
            'platform' => 'required',
            'imageUrl' => 'required',
            'genres' => 'required',
        ]);

        $games = $this->crud->create([
            'name' => $request->name,
            'date' => $request->date,
            'creator' => $request->creator,
            'platform' => $request->platform,
            'imageUrl' => $request->imageUrl,
            'genres' => $request->genres,
        ]);

        $games->save();

        return redirect($this->crud->route);
    }
}
