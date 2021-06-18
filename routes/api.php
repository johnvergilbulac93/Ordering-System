<?php

use App\Http\Controllers\SomoController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/show/beverages',                [SomoController::class, 'getBeverages'])->name('beverages');
Route::get('/show/burgers',                [SomoController::class, 'getBurgers'])->name('burger');
Route::get('/show/combos',                [SomoController::class, 'getCombos'])->name('combos');
Route::get('/products',                [SomoController::class, 'getProducts'])->name('products');


Route::post('/coupon',                [SomoController::class, 'checkCoupon'])->name('coupon');
Route::post('/orders',                [SomoController::class, 'placeOrder'])->name('order');
Route::post('/product/save',                [SomoController::class, 'saveProduct'])->name('s-product');
Route::post('/coupon/save',                [SomoController::class, 'saveCoupon'])->name('s-coupon');




