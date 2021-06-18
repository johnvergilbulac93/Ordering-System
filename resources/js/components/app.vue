<template>
    <div class="grid md:grid-cols-3">
        <div class="md:col-span-1 md:flex md:justify-end ">
            <nav class="text-right">
                <div class="flex justify-between items-center">
                    <h1
                        class="font-bold uppercase p-4 border-b-4 border-green-500 md:ml-8 sm:m-0"
                    >
                        <router-link
                            to="/"
                            class="hover:text-gray-700 tracking-widest"
                            >Ordering System</router-link
                        >
                    </h1>
                    <div class="px-4 cursor-pointer md:hidden" id="burger">
                        <svg
                            class="w-6 h-6"
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </div>
                </div>
                <ul class="text-sm mt-6 hidden md:block " id="menu">
                    <hr />
                    <li
                        class=" text-4xl text-gray-600 font-bold py-1 hover:text-gray-800 border-r-4 border-white hover:border-green-500 transition duration-500"
                    >
                        <router-link
                            to="/burger"
                            class=" px-4 flex justify-end "
                        >
                            <span>Burgers</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="w-5 ml-2"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M13 5l7 7-7 7M5 5l7 7-7 7"
                                />
                            </svg>
                        </router-link>
                    </li>
                    <li
                        class="text-4xl text-gray-600 font-bold py-1 hover:text-gray-800 border-r-4 border-white hover:border-green-500 transition duration-500"
                    >
                        <router-link
                            to="/beverages"
                            class=" px-4 flex justify-end "
                        >
                            <span>Beverages</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="w-5 ml-2"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M13 5l7 7-7 7M5 5l7 7-7 7"
                                />
                            </svg>
                        </router-link>
                    </li>
                    <li
                        class="text-4xl text-gray-600 font-bold py-1 hover:text-gray-800 border-r-4 border-white hover:border-green-500 transition duration-500"
                    >
                        <router-link
                            to="/combos"
                            class=" px-4 flex justify-end "
                        >
                            <span>Combo Meals</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="w-5 ml-2"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M13 5l7 7-7 7M5 5l7 7-7 7"
                                />
                            </svg>
                        </router-link>
                    </li>
                    <hr class="" />
                    <order-summary></order-summary>
                </ul>
            </nav>
        </div>
        <main class="px-16 py-6 md:col-span-2 bg-gray-100">
            <div class="w-full  flex justify-end text-green-500 items-center">
                
                <!-- <button class="hover:text-green-600 flex items-center focus:outline-none">
                    <span>My Order</span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                        />
                    </svg>
                </button> -->
            </div>
            <router-view></router-view>
        </main>
    </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
    data() {
        return {
            quantity: 1
        };
    },
    methods: {
        ...mapActions(["getProducts"])
    },
    // mounted() {
    //     this.getProducts();
    // }
};
</script>
