<?php

namespace App\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Yajra\DataTables\Facades\DataTables;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Dashboard/Users/Index');
    }

    function dataTable(){
        return DataTables::eloquent(User::orderBy('created_at', 'desc'))
        ->addIndexColumn()
        ->addColumn('id', function ($data){
            return '<div class="custom-checkbox custom-control">
                        <input data-checkbox-role="child" type="checkbox" name="id" value="'.$data->id.'" id="checkbox-'.$data->id.'" class="custom-control-input">
                        <label class="custom-control-label" for="checkbox-'.$data->id.'">&nbsp;</label>
                    </div>';
        })
        ->addColumn('action', function ($data) {
            $button = [
                '<button data-original-title="Edit" class="btn btn-sm btn-warning m-1 edit-button"
                    data-toggle="tooltip" data-placement="top" data-id="'.$data->id.'">
                    <i class="fas fa-edit"></i>
                </button>',
                '<button data-original-title="Hapus" class="btn btn-sm btn-danger m-1 delete-button"
                    data-toggle="tooltip" data-placement="top" data-id="'.$data->id.'" data-name="'.$data->name.'">
                    <i class="fas fa-trash"></i>
                </button>',
            ];
            return implode("",$button);
        })
        ->rawColumns(['id','action'])
        ->toJson();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request): RedirectResponse
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:'.User::class,
        ]);

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make('vyanary11'),
        ]);

        return Redirect::to(route('users'))->with('message', [
            'type'      => 'success',
            'title'     => 'Success',
            'content'   => 'Your flash message goes here'
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        return response()->json(User::findorFail($id));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request): RedirectResponse
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:'.User::class,
        ]);

        $user = User::find($request->update_id);
        $user->name = $request->name;
        $user->email = $request->email;
        $user->save();

        return Redirect::to(route('users'))->with('message', [
            'type'      => 'success',
            'title'     => 'Success',
            'content'   => 'Your flash message goes here'
        ]);;
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Request $request): RedirectResponse
    {
        $user = User::find($request->id);
        $user->delete();

        return Redirect::to(route('users'))->with('message', [
            'type'      => 'success',
            'title'     => 'Success',
            'content'   => 'Your Data Had Been Deleted'
        ]);
    }
}
