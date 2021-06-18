<template>
    <div class="md:mt-5 md:mr-5 sm:ml-20 sm:my-5">
        <header
            class="uppercase font-bold text-gray-700 text-2xl sm:mr-5 md:m-0"
        >
            Order Summary
        </header>
        <div
            v-if="check_coupon === 'invalid'"
            class="w-96 bg-red-500 px-2 py-1 flex justify-between items-center text-white bg-opacity-80"
        >
            <span>Invalid Coupon Code</span>
            <!-- <button class="focus:outline-none" @click="clear">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M6 18L18 6M6 6l12 12"
                    />
                </svg>
            </button> -->
        </div>
        <table class="w-96 divide-y divide-gray-300  mt-5 ">
            <thead
                class=" bg-gray-100 text-gray-700 tracking-wide font-poppins"
            >
                <tr class="tr">
                    <th class="th text-left">Desciption</th>
                    <th class="th text-center">Quantity</th>
                    <th class="th text-center">Price</th>
                </tr>
            </thead>
            <tbody class="tbody text-center ">
                <tr class="tr" v-if="!cart.length">
                    <td colspan="3" class="td font-semibold ">
                        NO ORDER AVAILABLE
                    </td>
                </tr>
                <tr v-for="(item, i) in cart" :key="i" class="tr">
                    <td class="td text-left">{{ item.product }}</td>
                    <td class="td text-center">{{ item.quantity }}</td>
                    <td class="td text-center">${{ item.price }}</td>
                </tr>
            </tbody>
            <tfoot
                class=" bg-gray-100 text-gray-700 tracking-wide font-poppins "
            >
                <tr class="tr">
                    <th class="th text-center " colspan="2">
                        TOTAL
                    </th>
                    <th class="th text-center text-blue-500 tracking-wider">
                        ${{ cartTotalPrice }}
                    </th>
                </tr>
                <tr class="tr" v-if="check_coupon === 'valid'">
                    <th class="th text-center " colspan="2">
                        COUPON
                    </th>
                    <th class="th text-center text-blue-500 tracking-wider">
                        10%
                    </th>
                </tr>
                <tr class="tr" v-if="check_coupon === 'valid'">
                    <th class="th text-center " colspan="2">
                       TOTAL ORDER AMOUNT
                    </th>
                    <th class="th text-center text-blue-500 tracking-wider">
                        ${{ cartTotalPriceWhiteCoupon }}
                    </th>
                </tr>
            </tfoot>
        </table>
        <div class="mt-2">
            <button
                @click="verifyCoupon"
                :disabled="!coupon.length"
                class="px-4 py-2 bg-green-400 text-gray-100 text-sm focus:outline-none hover:bg-green-500 disabled:opacity-50"
            >
                Check Coupon
            </button>
            <input
                v-model="coupon"
                type="text"
                class="px-4 py-2 w-32 border outline-none text-center focus:border-green-500"
                placeholder="Coupon here"
            />
        </div>
        <button
            @click="saveOrder"
            :disabled="!cart.length"
            class="h-14 w-32 bg-blue-500 mt-2 text-white font-semibold tracking-wider hover:bg-blue-600 transition duration-500 px-2 disabled:opacity-70 focus:outline-none"
        >
            PLACE ORDER
        </button>
    </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from "vuex";
export default {
    data() {
        return {
            coupon: ""
        };
    },
    computed: {
        ...mapState(["cart", "check_coupon"]),
        ...mapGetters(["cartTotalPrice", "cartTotalPriceWhiteCoupon"])
    },
    methods: {
        ...mapActions(["checkCoupon",,'placeOrder']),
        verifyCoupon() {
            this.checkCoupon({
                coupon: this.coupon
            });
        },
        saveOrder(){
            let finalOrder = {
                product: this.cart,
                coupon: this.coupon,
                total_amt: this.cartTotalPrice,
                total_order_amt: this.cartTotalPriceWhiteCoupon
            }
            this.placeOrder({ finalOrder })
        }

    }
};
</script>

<style></style>
