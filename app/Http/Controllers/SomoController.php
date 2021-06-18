<?php

namespace App\Http\Controllers;

use App\Models\Coupons;
use App\Models\OrderHead;
use App\Models\OrderLine;
use App\Models\Products;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;


class SomoController extends Controller
{
    public function getBeverages()
    {
        return DB::table('products')->where('category', '=', 'beverage')->get();
    }
    public function getBurgers()
    {
        return DB::table('products')->where('category', '=', 'burger')->get();
    }
    public function getCombos()
    {
        return DB::table('products')->where('category', '=', 'cmeal')->get();
    }
    public function getProducts()
    {
        return DB::table('products')->get();
    }
    public function checkCoupon(Request $request)
    {

        $coupon = Coupons::where('coupon_code', $request->coupon)->exists();

        if ($coupon) {
            return 'valid';
        } else {
            return 'invalid';
        }
    }
    public function placeOrder(Request $request)
    {
        $products = $request->product;
        $trans_no = 'OR-' . time();
        foreach ($products as $product) {
            $order_line = array(
                'order_no'      =>  $trans_no,
                'description'   => $product['product'],
                'quantity'      => intval($product['quantity']),
                'price'         => floatval($product['price']),
            );

            OrderLine::insert($order_line);
        }

        $order_head = array(
            'order_no'          => $trans_no,
            'coupon_use'        => $request->coupon,
            'total_amt'         => floatval($request->total_amt),
            'total_order_amt'   => floatval($request->total_order_amt)
        );
        OrderHead::insert($order_head);
    }
    public function saveProduct(Request $request)
    {
        $data = array(
            'description' => $request->description,
            'price'       =>  floatval($request->price),
            'category'     => $request->category,
            'image'       => $request->image
        );
        Products::insert($data);
    }
    public function saveCoupon(Request $request)
    {
        $data = array(
            'coupon_code'        => $request->coupon,
            'discount'       => floatval($request->discount),
        );
        Coupons::insert($data);
    }
}
