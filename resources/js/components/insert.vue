<template>
    <div class="w-56 inline-block space-y-5 ">
        <div class="space-y-2">
            <label for="">Product</label>
            <input
                v-model="description"
                type="text"
                class="px-4 py-2 focus:outline-none"
                placeholder="Desciption"
            />
            <input
                v-model="price"
                type="text"
                class="px-4 py-2 focus:outline-none"
                placeholder="Price"
            />
            <input
                v-model="category"
                type="text"
                class="px-4 py-2 focus:outline-none"
                placeholder="Category"
            />
            <input
                v-model="image"
                type="text"
                class="px-4 py-2 focus:outline-none"
                placeholder="Image"
            />
            <button @click="saveProduct" class="bg-gray-200 px-2 p-1">Submit Product</button>
        </div>
        <div class="space-y-2">
            <label for="">Coupon</label>
            <input
                v-model="coupon"
                type="text"
                class="px-4 py-2 focus:outline-none"
                placeholder="Coupon Code"
            />
            <input
                v-model="discount"
                type="text"
                class="px-4 py-2 focus:outline-none"
                placeholder="Percent"
            />
            <button @click="saveCoupon" class="bg-gray-200 px-2 p-1">Submit Coupon</button>
        </div>
    </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
    data() {
        return {
            description: "",
            price: "",
            category: "",
            image: "",
            coupon: "",
            discount: ""
        };
    },
    computed: {
        //    ...mapState(["Beverages"])
    },
    methods: {
           ...mapActions(["addProduct", "addCoupon"]),
           saveProduct() {
                let product = {
                     description: this.description,
                     price: this.price,
                     category: this.category,
                     image: this.image
                }

                this.addProduct({ product})

           },
           saveCoupon() {
                let coupon = {
                    coupon: this.coupon,
                    discount: this.discount,
                }
                this.addCoupon({ coupon })
           }
    },
    mounted() {
        //    this.getProducts();
    }
};
</script>

<style></style>
