<template>
    <div class="p-4 sm:ml-64 ">
        <div class="p-4 rounded-lg  mt-14">
            <h2 class="text-center mb-3 uppercase font-semibold text-2xl ">Create Products</h2>

            <div class="relative overflow-x-auto mb-3">
                <form class=" lg:w-[50%] w-[90%] mx-auto">
                    <div class="mb-6">
                        <label for="name"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                        <input type="text" id="name" v-model="name"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Enter your name" required />
                    </div>
                    <div class="mb-6">
                        <label for="category"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Category</label>
                        <select v-model="category"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            name="" id="category">
                            <option value="">choose category</option>
                            <option v-for="category in categoryList" :value="category.id">{{category.name}}</option>
                        </select>
                    </div>
                    <div class="grid gap-6 mb-6 md:grid-cols-2 grid-cols-2">
                        <div>
                            <label for="qty"
                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Qty</label>
                            <input type="number" id="qty" v-model="qty"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="qty" required />
                        </div>
                        <div>
                            <label for="unit"
                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Unit</label>
                            <input type="text" id="unit" v-model="unit"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Unit" required />
                        </div>
                    </div>
                    <div class="mb-6">
                        <label for="pcs" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">PCS
                        </label>
                        <input type="number" id="pcs" v-model="pcs"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="How many pcs"  />
                    </div>
                    <div class="mb-6">
                        <label for="price"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Price</label>
                        <input type="text" id="price" v-model="price"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Enter Price" required />
                    </div>
                    <div class="mb-6">
                        <label for="shop"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Shop</label>
                        <select
                            v-model="shop"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            name="" id="shop">
                            <option value="">choose shop</option>
                            <option v-for="shop in shopList" :value="shop.id">{{shop.name}}</option>
                        </select>
                    </div>
                    <div class="mb-6">
                        <label for="dateTime"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Date</label>
                        <input type="date" id="dateTime" v-model="Date"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="" required />
                    </div>

                    <button type="submit"
                        @click.prevent="addProduct"
                        class="text-white bg-black hover:bg-black focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                </form>

            </div>
            <div v-if="message" id="toast-bottom-right"
                class="fixed flex items-center w-full max-w-xs p-4 space-x-4 text-gray-500 bg-white divide-x rtl:divide-x-reverse divide-gray-200 rounded-lg shadow right-5 bottom-5 dark:text-gray-400 dark:divide-gray-700 space-x dark:bg-gray-800"
                role="alert">
                <div
                    class="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-green-500 bg-blue-100 rounded-lg dark:bg-blue-700 dark:text-blue-200">
                    <svg class="w-3 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                        viewBox="0 0 20 20">
                        <path
                            d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM10 15a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm1-4a1 1 0 0 1-2 0V6a1 1 0 0 1 2 0v5Z" />
                    </svg>
                    <span class="sr-only">Success icon</span>
                </div>
                <div class="ms-3 text-sm font-normal">အောင်မြင်စွာထည့်သွင်းပြီးပါပီ</div>

            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default{
    data(){
        return{
            Date:"",
            price:"",
            shop:"",
            qty:"",
            unit:"",
            pcs:"",
            category:"",
            name:"",
            categoryList:{},
            shopList:{},
            message: false

        }
    },
    methods:{
        async getCategories (){
            let res = await axios.get('/category/list/');
            if (!res.data.data) {
                this.categories = []
            }
            this.categoryList = res.data.data;
        },
        async getshops (){
            let res = await axios.get('/shop/list/');
            if (!res.data.data) {
                this.categories = []
            }
            this.shopList = res.data.data;
        },
        async addProduct(){
            const userId = Math.floor(Math.random() * 1000000)
            console.log(userId);
            let formData = new FormData();
            formData.append('name', this.name);
            formData.append('category_id', this.category);
            formData.append('user_id', 1);
            formData.append('small_package', this.pcs);
            formData.append('qty', this.qty);
            formData.append('unit', this.unit);
            formData.append('shop_id', this.shop);
            formData.append('price', this.price);
            formData.append('Date', this.Date);
            try {
                let res = await axios.post('create/product', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                });
                console.log(res);
                if (res) {
                    setTimeout(() => {
                        this.message = true;
                        this.Date="";
                        this.price="";
                        this.shop="";
                        this.qty="";
                        this.unit="";
                        this.pcs="";
                        this.category="";
                        this.name="";
                        setTimeout(() => {
                            this.message = false;
                        }, 5000);
                    }, 1000);
                }
            } catch (error) {
                console.error("Error occurred while adding data:", error);
            }
        }
    },mounted(){
        this.getCategories();
        this.getshops();
    }
}
</script>
