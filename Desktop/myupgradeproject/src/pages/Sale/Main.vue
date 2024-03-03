<script>
import { QrcodeStream } from 'vue-qrcode-reader';

export default {
    components: {
        QrcodeStream
    },
    data() {
        return {
            isScanning: false,
            qrCodeResult: null,
            result : []
        };
    },
    methods: {
        startScanning() {
            this.isScanning = true;
        },
        onDecode(result) {
            this.qrCodeResult = result;
        },
        onDecodeError(error) {
            console.error(error);
        }
    }
};
</script>

<template>
    <div class="p-4 sm:ml-64">
        <div class="p-1 rounded-lg  mt-14">
            <h2 class="text-center mb-3 uppercase font-semibold text-2xl ">Products</h2>
            <div class="md:text-right mb-5 text-center">

                <div v-if="isScanning">
                    <qrcode-stream class="border border-gray-300 rounded-r-md hover:bg-white bg-gray-100 px-3 py-1"
                        @decode="onDecode" :decodeErrorCallback="onDecodeError"></qrcode-stream>
                </div>
                <div v-else>
                    <input class="border border-gray-300  drop-shadow-sm ps-2 py-1 text-base rounded-l-md" type="text"
                        name="" id="">
                    <button class="border border-gray-300 rounded-r-md hover:bg-white bg-gray-100 px-3 py-1"
                        @click="startScanning"><i class="fa-solid fa-plus"></i></button>
                </div>
                <div v-if="qrCodeResult">QR Code Result: {{ qrCodeResult }}</div>
            </div>

        </div>
        <div class="relative overflow-x-auto mb-3 ">
            <table v-if="result.length !== 0" class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 mb-4">
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
        </div>
    </div>
</template>