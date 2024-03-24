<script>
import axios from 'axios';
export default{
    data(){
        return{
            prices:{}
        }
    },
    methods:{
        async getPrices (){
            let res = await axios.get('price/list/');
            console.log(res.data)
            this.prices = res.data
        }
    },
    mounted(){
        this.getPrices(),
        this.prices
    }
}
</script>

<template>
    <div class="p-4 sm:ml-64">
        <div class="p-1 rounded-lg  mt-14">
            <h2 class="text-center mb-3 uppercase font-semibold text-2xl">Sale Price</h2>
            <div class="md:text-right mb-5 text-center">
                <input class="border border-gray-300  drop-shadow-sm ps-2 py-1 text-base rounded-l-md" type="text" name=""
                    id="">
                <router-link :to="{name: 'productsfincreate'}">
                    <button class="border border-gray-300 rounded-r-md hover:bg-white bg-gray-100 px-3 py-1"><i
                        class="fa-solid fa-plus"></i>
                    </button>
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
                            <th scope="col" class="md:px-2 px-1 py-2 md:py-3">
                                Original Price
                            </th>
                            <th scope="col" class="md:px-2 px-1 py-2 md:py-3">
                                Sale Price
                            </th>
                            <th scope="col" class="md:px-3 px-1 py-2 md:py-3">
                                
                            </th>
                        </tr>
                    </thead>
                    <tbody v-if="prices.length !== 0">
                        <tr v-for="price in prices" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" class="md:px-6 px-1 py-2 md:py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {{price.id}}
                            </th>
                            <td class="md:px-1 px-1 py-2 md:py-3">
                                {{price.product_name}}
                            </td>
                            <td class="md:px-1 px-1 py-2 md:py-3">
                                {{price.Original_price}} Ks
                            </td>
                            <td class="md:px-1 px-1 py-2 md:py-3">
                                {{price.sale_price}} Ks
                            </td>
                            <td class="md:px-3 px-1 py-2 md:py-3 flex justify-evenly">
                                <router-link 
                                :to="{ name: 'productsfinedit',params: { id: price.id } }"
                                >
                                <button type="submit"
                        class="text-white bg-black hover:bg-black focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Edit</button>
                                </router-link>
                        <!-- <button type="submit"
                        @click.prevent="DeleteCate(category.id)"
                        class="text-white bg-black hover:bg-black focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm md:w-[40%] w-[40%] sm:w-auto px-5 py-2.5 text-center  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Delete</button> -->
                            </td>
                        </tr>

                    </tbody>
                </table>
                <!-- <div class="flex justify-end">
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
                </div> -->
            </div>
        </div>
    </div>
</template>