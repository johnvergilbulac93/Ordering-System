<template>
    <div class="min-h-full">
        <header class="mt-4">
            <h2
                class="text-gray-700 text-6xl font-semibold leading-none tracking-wider border-b-4 border-green-500"
            >
                Order Here
            </h2>
        </header>
        <h4 class="font-bold pb-2 mt-12 border-b border-gray-200">
            Beverages
        </h4>

        <div class="mt-8 grid lg:grid-cols-3 gap-10 min-h-full">
            <!-- cards go here -->
            <div
                class="card hover:shadow-lg"
                v-for="(Beverage, i) in Beverages"
                :key="i"
            >
                <img
                    :src="Beverage.image"
                    alt="stew"
                    class="h-32 sm:h-48 w-full object-cover"
                />
                <div class="m-4 flex justify-between items-center">
                    <span class="font-bold">{{ Beverage.description }}</span>
                    <span class="font-bold text-blue-500"
                        >${{ Beverage.price }}</span
                    >
                </div>
                <div class="flex">
                    <button
                        @click="removeFromOrder(Beverage)"
                        class="w-1/2 py-2 bg-red-500 text-4xl text-white hover:bg-red-600 transition duration-500 focus:outline-none"
                    >
                        -
                    </button>
                    <button
                        @click="addToOrder(Beverage)"
                        class="w-1/2 py-2 bg-green-500 text-4xl text-white hover:bg-green-600 transition duration-500 focus:outline-none"
                    >
                        +
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
    data() {
        return {
            quantity: 1,
            Beverages: [
                {
                    id: 1,
                    description: "Coke",
                    category: "beverage",
                    price: "1.2",
                    image: "http://via.placeholder.com/640x360"
                },
                {
                    id: 2,
                    description: "Sprite",
                    category: "beverage",
                    price: "1.2",
                    image: "http://via.placeholder.com/640x360"
                },
                {
                    id: 3,
                    description: "Teat",
                    category: "beverage",
                    price: "1",
                    image: "http://via.placeholder.com/640x360"
                }
            ]
        };
    },
    methods: {
        ...mapActions(["addOrder", "removeOrder", "getProducts"]),
        addToOrder(order) {
            this.addOrder({
                product: order.description,
                quantity: this.quantity,
                price: order.price,
                id: order.id
            });
        },
        removeFromOrder(order) {
            this.removeOrder({
                product: order.description,
                quantity: this.quantity,
                price: order.price,
                id: order.id
            });
        }
    }
};
</script>

<style></style>
