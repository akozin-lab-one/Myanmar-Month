<template>
    <div class="p-4 sm:ml-64 ">
        <div class="p-4 rounded-lg  mt-14">
            <h2 class="text-center mb-3 uppercase font-semibold text-2xl ">Edit Category</h2>

            <div class="relative overflow-x-auto mb-3">
                <form class="lg:w-[50%] w-[90%] mx-auto">
                    <div class="mb-6">
                        <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                        <input type="text" id="name"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Enter your name" v-model="category.name" required />
                    </div>


                    <button type="submit"
                    @click.prevent="editcategory"
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
                <div class="ms-3 text-sm font-normal">အောင်မြင်စွာပြင်ဆင်ပြီးပါပီ</div>

            </div>
    </div>
</div>
</template>
<script>
import axios from 'axios';
export default{
    data(){
        return{
            category :[],
            id:null,
            message:false
        }
    },
    methods:{
        async getcategory(){
            this.id = this.$route.params.id;
            console.log(this.id);
            let res = await axios.get(`category/${this.id}`);
            console.log(res.data);
            this.category = res.data;
            console.log(this.category)
        },
        async editcategory() {
            if (!this.category.name) {
                console.log("There is no category name");
                return;
            }
            let formData = new FormData();
            formData.append('name', this.category.name); // Use category name here
            formData.append('user_id', 1); // Dynamically pass user ID

            try {
                let res = await axios.post(`edit/category/${this.category.id}`, formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                });
                console.log(res);
                if (res) {
                    // this.message = true
                    setTimeout(() => {
                        this.message = true;
                        this.category.name = "";
                        setTimeout(() => {
                            this.message = false;
                            this.$router.push({ name: 'categories' });
                        }, 5000);
                    }, 1000);
                }
            } catch (error) {
                console.log(error);
            }
        }

    },
    mounted(){
        this.getcategory();
        this.category;
    }
}
</script>
