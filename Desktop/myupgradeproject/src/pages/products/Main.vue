<script>
export default {
    data() {
        return {
            toastShow: false,
            remain: ['name', 'email']
        }
    },
    methods: {

    },
    mounted() {
        if (this.remain.length > 0) {
            setTimeout(() => {
                this.toastShow = true;
                setTimeout(() => {
                    this.toastShow = false;
                }, 5000);
            }, 1000);
        }

    }
}
</script>

<template>
    <div class="p-4 sm:ml-64">
        <div class="p-1 rounded-lg  mt-14">
            <h2 class="text-center mb-3 uppercase font-semibold text-2xl ">Products Sale</h2>
            <div class="md:text-right mb-5 text-center">
                <input class="border border-gray-300  drop-shadow-sm ps-2 py-1 text-base rounded-l-md" type="text" name=""
                    id="">

                <router-link :to="{ name: 'createproducts' }">
                    <button class="border border-gray-300 rounded-r-md hover:bg-white bg-gray-100 px-3 py-1"><i
                            class="fa-solid fa-plus"></i></button>
                </router-link>

            </div>
            <div class="relative overflow-x-auto mb-3 ">
                <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 mb-4">
                    <thead class="text-xs text-white uppercase bg-black ">
                        <tr>
                            <th scope="col" class="md:px-6 px-1 py-2 md:py-3">
                                name
                            </th>
                            <th scope="col" class="md:px-6 px-1 py-2 md:py-3">
                                Category
                            </th>
                            <th scope="col" class="md:px-6 px-1 py-2 md:py-3">
                                Qty
                            </th>
                            <th scope="col" class="md:px-6 px-1 py-2 md:py-3">
                                Shop
                            </th>
                            <th scope="col" class="md:px-6 px-1 py-2 md:py-3">
                                Price
                            </th>
                            <th scope="col" class="md:px-6 px-1 py-2 md:py-3">
                                Date(၀ယ်ယူသည့်ရက်)
                            </th>
                            <th scope="col" class="md:px-6 px-1 py-2 md:py-3">

                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row"
                                class="md:px-6 px-1 py-2 md:py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                Apple MacBook Pro 17"
                            </th>
                            <td class="md:px-6 px-1 py-2 md:py-3">
                                Silver
                            </td>
                            <td class="md:px-6 px-1 py-2 md:py-3">
                                Laptop
                            </td>
                            <td class="md:px-6 px-1 py-2 md:py-3">
                                $2999
                            </td>
                            <td class="md:px-6 px-1 py-2 md:py-3">
                                $2999
                            </td>
                            <td class="md:px-6 px-1 py-2 md:py-3">
                                $2999
                            </td>
                            <td class="md:px-6 px-1 py-2 md:py-3 flex justify-between">
                                <router-link :to="{ name: 'editproduct' }">
                                    <button type="submit"
                                        class="text-white bg-black hover:bg-black focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Edit</button>
                                </router-link>
                                <button type="submit"
                                    class="text-white bg-black hover:bg-black focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Delete</button>
                            </td>
                        </tr>

                    </tbody>
                </table>
                <div class="flex justify-end">
                    <nav aria-label="Page navigation example">
                        <ul class="flex items-center -space-x-px h-8 text-sm">
                            <li>
                                <a href="#"
                                    class="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                                    <span class="sr-only">Previous</span>
                                    <svg class="w-2.5 h-2.5 rtl:rotate-180" aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                            stroke-width="2" d="M5 1 1 5l4 4" />
                                    </svg>
                                </a>
                            </li>
                            <li>
                                <a href="#"
                                    class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">1</a>
                            </li>
                            <li>
                                <a href="#"
                                    class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">2</a>
                            </li>
                            <li>
                                <a href="#" aria-current="page"
                                    class="z-10 flex items-center justify-center px-3 h-8 leading-tight text-blue-600 border border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">3</a>
                            </li>
                            <li>
                                <a href="#"
                                    class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">4</a>
                            </li>
                            <li>
                                <a href="#"
                                    class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">5</a>
                            </li>
                            <li>
                                <a href="#"
                                    class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
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
            <div v-if="toastShow" id="toast-bottom-right"
                class="fixed flex items-center w-full max-w-xs p-4 space-x-4 text-gray-500 bg-white divide-x rtl:divide-x-reverse divide-gray-200 rounded-lg shadow right-5 bottom-5 dark:text-gray-400 dark:divide-gray-700 space-x dark:bg-gray-800"
                role="alert">
                <div
                    class="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-orange-500 bg-orange-100 rounded-lg dark:bg-orange-700 dark:text-orange-200">
                    <svg class="w-3 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                        viewBox="0 0 20 20">
                        <path
                            d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM10 15a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm1-4a1 1 0 0 1-2 0V6a1 1 0 0 1 2 0v5Z" />
                    </svg>
                    <span class="sr-only">Warning icon</span>
                </div>
                <div class="ms-3 text-sm font-normal">လက်ကျန်ပစည်းနည်းနေပါပီ။</div>

            </div>
        </div>
    </div>
</template>
