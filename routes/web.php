<?php

use App\DataTables\UsersDataTable;
use App\Http\Controllers\Dashboard\UserController;
use App\Http\Controllers\ProfileController;
use App\Models\User;
use Illuminate\Foundation\Application;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Yajra\DataTables\Facades\DataTables;
use Inertia\Response;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Http\RedirectResponse;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return redirect('/dashboard');
})->name('wellcome');

Route::prefix('dashboard')->middleware(['auth', 'verified'])->group(function () {
    Route::get('/', function () {
        return Inertia::render('Dashboard/Index');
    })->name('dashboard');

    Route::prefix('users')->group(function () {
        Route::get('/', [UserController::class, 'index'])->name('users');
        Route::get('/datatable', [UserController::class, 'dataTable'])->name('users.dataTable');
        Route::get('/show/{id}', [UserController::class, 'show'])->name('users.show');
        Route::post('/store', [UserController::class, 'store'])->name('users.store');
        Route::post('/update', [UserController::class, 'update'])->name('users.update');
        Route::post('/delete', [UserController::class, 'destroy'])->name('users.delete');
    });
});

require __DIR__.'/auth.php';
