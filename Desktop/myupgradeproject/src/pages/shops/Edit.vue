<template>
    <div class="p-4 sm:ml-64 ">
        <div class="p-4 rounded-lg  mt-14">
            <h2 class="text-center mb-3 uppercase font-semibold text-2xl ">Edit Shops</h2>

            <div class="relative overflow-x-auto mb-3">
                <form class="lg:w-[50%] w-[90%] mx-auto">
                    <div class="grid gap-6 mb-6 md:grid-cols-2 grid-cols-2">
                        <div>
                            <label for="name"
                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                            <input type="text" id="name"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Name" v-model="shop.name" required />
                        </div>
                        <div>
                            <label for="phone"
                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone Number</label>
                            <input type="text" id="phone"
                            v-model="shop.phone_number"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Phone Number" required />
                        </div>
                    </div>
                    <div class="mb-6">
                        <label for="address" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Address</label>
                        <input type="text" id="address"
                            v-model="shop.address"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Enter Address" required />
                    </div>


                    <button type="submit"
                    @click.prevent="editshop"
                        class="text-white bg-black hover:bg-black focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                </form>

            </div>

    </div>
</div>
</template>
<script>
import axios from 'axios';
export default{
    data(){
        return{
            name:"",
            address:"",
            phone:"",
            shop :[],
            id:null,
            message:false
        }
    },
    methods:{
        async getshop(){
            this.id = this.$route.params.id;
            console.log(this.id);
            let res = await axios.get(`shop/${this.id}`);
            console.log(res.data);
            this.shop = res.data;
            console.log(this.shop)
        },
        async editshop() {
            if (!this.shop.name) {
                console.log("There is no shop name");
                return;
            }
            let formData = new FormData();
            formData.append('name', this.name);
            formData.append('phone_number', this.phone);
            formData.append('address', this.address);
            formData.append('user_id', 1)

            try {
                let res = await axios.post(`edit/shop/${this.shop.id}`, formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                });
                console.log(res);
                // if (res) {
                //     // this.message = true
                //     setTimeout(() => {
                //         this.message = true;
                //         this.category.name = "";
                //         setTimeout(() => {
                //             this.message = false;
                //             this.$router.push({ name: 'categories' });
                //         }, 5000);
                //     }, 1000);
                // }
            } catch (error) {
                console.log(error);
            }
        }

    },
    mounted(){
        this.getshop();
        this.shop;
    }
}
</script>
