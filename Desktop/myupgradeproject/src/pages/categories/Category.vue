<script>
import axios from 'axios';
export default {
    data(){
        return{
            categories :[],
            links:[],
            message:false
        }   
    },
    methods:{
        async getCategories (){
            let res = await axios.get('/category/list/');
            if (!res.data.data) {
                this.categories = []
            }
            this.categories = res.data.data;
            this.links.value = res.data.links;
            console.log(this.links.value);
        },
        updateDisplayedItems() {
            const startIndex = (currentPage - 1) * itemsPerPage;
            const endIndex = startIndex + itemsPerPage;
            displayedItems.value = categories.value.slice(startIndex, endIndex);
            console.log(displayedItems)
        },
        nextPage() {
            if (currentPage < Math.ceil(categories.value.length / itemsPerPage)) {
                currentPage++;
                updateDisplayedItems();
            }
        },
        previousPage() {
            if (currentPage > 1) {
                currentPage--;
                updateDisplayedItems();
            }
        },
        async getPageRecipes(url){
            let pageNumber = url.split('page=')[1];
            const response = await axios.get('/category/list?page=' + pageNumber);
            console.log(response.data.data);
            this.categories = response.data.data;
            console.log(this.categories);
        },
        async DeleteCate(id){
            let res = await axios.delete('category/' + id);
            if(res){
                setTimeout(() => {
                        this.message = true;
                        this.name = "";
                        setTimeout(() => {
                            this.message = false;
                        }, 5000);
                    }, 1000);
            }
        }

    },
    mounted(){
        this.getCategories();
        this.categories;
    }
}
</script>
<template>
    <div class="p-4 sm:ml-64">
        <div  class="p-1 rounded-lg  mt-14">
            <h2 class="text-center mb-3 uppercase font-semibold text-2xl ">Categories</h2>
            <div class="md:text-right mb-5 text-center">
                <input class="border border-gray-300  drop-shadow-sm ps-2 py-1 text-base rounded-l-md" type="text" name=""
                    id="">
                <router-link :to="{name: 'createcategories'}">
                    <button class="border border-gray-300 rounded-r-md hover:bg-white bg-gray-100 px-3 py-1"><i
                        class="fa-solid fa-plus"></i></button>
                </router-link>

            </div>
            <div class="relative overflow-x-auto mb-3 ">
                <table  class="md:w-[60%] mx-auto w-[90%] text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 mb-4">
                    <thead class="text-xs text-white uppercase bg-black ">
                        <tr>
                            <th scope="col" class="md:px-2 px-1 py-2 md:py-3">
                                Id
                            </th>
                            <th scope="col" class="md:px-2 px-1 py-2 md:py-3">
                                Name
                            </th>
                            <th scope="col" class="md:px-3 px-1 py-2 md:py-3">
                                
                            </th>
                        </tr>
                    </thead>
                    <tbody v-if="categories.length !== 0">
                        <tr v-for="category in categories" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" class="md:px-6 px-1 py-2 md:py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {{category.id}}
                            </th>
                            <td class="md:px-1 px-1 py-2 md:py-3">
                                {{category.name}}
                            </td>
                            <td class="md:px-3 px-1 py-2 md:py-3 flex justify-evenly">
                                <router-link 
                                :to="{ name: 'editcategory',params: { id: category.id } }"
                                >
                                <button type="submit"
                        class="text-white bg-black hover:bg-black focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Edit</button>
                                </router-link>
                        <button type="submit"
                        @click.prevent="DeleteCate(category.id)"
                        class="text-white bg-black hover:bg-black focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm md:w-[40%] w-[40%] sm:w-auto px-5 py-2.5 text-center  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Delete</button>
                            </td>
                        </tr>

                    </tbody>
                </table>
                <div class="flex justify-end">
                    <nav aria-label="Page navigation example">
                    <ul class="flex items-center -space-x-px h-8 text-sm">
                        <li>
                            <a href="#" @click.prevent="previousPage"
                                class="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                                :class="{ 'cursor-not-allowed': currentPage === 1 }">
                                <span class="sr-only">Previous</span>
                                <svg class="w-2.5 h-2.5 rtl:rotate-180" aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                        stroke-width="2" d="M5 1 1 5l4 4" />
                                </svg>
                            </a>
                        </li>
                        <li v-for="link in links.value" :key="link.id">
                            <p v-if="link.url" @click.prevent="getPageRecipes(link.url)"
                                class="flex cursor-pointer items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                                {{ link.label }}
                            </p>
                        </li>
                        <li>
                            <a href="#" @click.prevent="nextPage"
                                class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                                >
                                <span class="sr-only">Next</span>
                                <svg class="w-2.5 h-2.5 rtl:rotate-180" aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                        stroke-width="2" d="m1 9 4-4-4-4" />
                                </svg>
                            </a>
                    </li>
                </ul>
            </nav>
                </div>
            </div>
            <div v-if="message" id="toast-bottom-right"
                class="fixed flex items-center w-full max-w-xs p-4 space-x-4 text-gray-500 bg-white divide-x rtl:divide-x-reverse divide-gray-200 rounded-lg shadow right-5 bottom-5 dark:text-gray-400 dark:divide-gray-700 space-x dark:bg-gray-800"
                role="alert">
                <div
                    class="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-red-700 bg-blue-100 rounded-lg dark:bg-red-700 dark:text-red-200">
                    <svg class="w-3 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                        viewBox="0 0 20 20">
                        <path
                            d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM10 15a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm1-4a1 1 0 0 1-2 0V6a1 1 0 0 1 2 0v5Z" />
                    </svg>
                    <span class="sr-only">Success icon</span>
                </div>
                <div class="ms-3 text-sm font-normal">အောင်မြင်စွာပယ်ဖျက်ပြီးပါပီ</div>

            </div>
        </div>
    </div>
</template>
