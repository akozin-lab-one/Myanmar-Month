<script>
import { QrcodeStream, QrcodeDropZone } from 'vue-qrcode-reader'

export default {
    components: {
        QrcodeStream
    },
    data() {
        return {
            isScanning: false,
            qrCodeResult: [],
            result: "",
            finalData: {},
            obj: {},
            showData: [],
            finalPrice: "",
            qrFinal: {},
            finalQr: [],
            Total: 0,
            qty: 0
        };
    },
    methods: {
        startScanning() {
            this.isScanning = true;
        },
        onDecode(result) {
            this.finalData = JSON.parse(result[0].rawValue)
            if (result.length != 0) {
                this.qty += 1
                this.obj = { name: this.finalData.name, sale_price: this.finalData.sale_price, Qty: this.qty }
                this.showData.push(this.obj);
                console.log(this.showData)
            }
        },
        onDecodeError(error) {
            console.error(error);
        },
        getData(show) {
            show.Qty += 1
            this.finalPrice = show.sale_price * show.Qty
            this.qrFinal = { name: show.name, price: this.finalPrice }
            show.sale_price = this.finalPrice
            console.log(this.qrFinal)
            this.SumData()
        },
        SumData() {
            this.Total = 0
            if (this.showData.length !== 0) {
                this.Total += this.finalPrice
            }
            console.log(this.Total)
        }
    },
    mounted() {
        this.qty;
        this.Total
    }
};
</script>

<template>
    <div class="p-4 sm:ml-64">
        <div :class="qrCodeResult ? 'p-1 rounded-lg mt-14 flex flex-row-reverse' : 'p-1 rounded-lg mt-14'">
            <div class="md:text-right mb-5 text-cente">
                <h2 class="text-center mb-3 uppercase font-semibold text-2xl ">Casher</h2>
                <div>
                    <div v-if="isScanning" class="w-[300px] mx-auto">
                        <qrcode-stream
                            class="border w-[100px] border-gray-300 rounded-r-md hover:bg-white bg-gray-100 px-3 py-1"
                            @detect="onDecode" :decodeErrorCallback="onDecodeError"></qrcode-stream>
                        <qrcode-drop-zone></qrcode-drop-zone>
                    </div>
                    <div v-else>
                        <input class="border border-gray-300  drop-shadow-sm ps-2 py-1 text-base rounded-l-md"
                            type="text" name="" id="">
                        <button class="border border-gray-300 rounded-r-md hover:bg-white bg-gray-100 px-3 py-1"
                            @click="startScanning"><i class="fa-solid fa-plus"></i></button>
                    </div>
                </div>
                <div v-if="isScanning" class="bg-gray-200 mt-4">
                    <div v-for="show in showData">
                        <div class="flex justify-evenly">
                            <p>{{ show.name }}</p>
                            <P>{{ show.Qty }}</P>
                            <p>{{ show.sale_price }}</p>
                        </div>
                    </div>
                    <div class="flex justify-evenly">
                        <p class="hidden">name</p>
                        <p class="ms-2">Total</p>
                        <p class="ms-2">{{ Total }}</p>
                    </div>
                </div>
            </div>
            <div class="relative overflow-x-auto mb-3  w-[55%] mx-auto">
                <table v-if="qrCodeResult"
                    class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 mb-4">
                    <thead class="text-xs text-white uppercase bg-black ">
                        <tr>
                            <th scope="col" class="md:px-6 px-1 py-2 md:py-3">
                                name
                            </th>
                            <th scope="col" class="md:px-6 px-1 py-2 md:py-3">
                                Price
                            </th>
                            <th scope="col" class="md:px-6 px-1 py-2 md:py-3">
                                Qty
                            </th>
                        </tr>
                    </thead>
                    <tbody v-if="showData.length !== 0">
                        <tr v-for="show in showData"
                            class="bg-white border-b cursor-pointer dark:bg-gray-800 dark:border-gray-700"
                            @click.prevent="getData(show)">
                            <th scope="row"
                                class="md:px-6 px-1 py-2 md:py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {{ show.name }}
                            </th>
                            <td class="md:px-6 px-1 py-2 md:py-3">
                                {{ show.sale_price }}
                            </td>
                            <td class="md:px-6 px-1 py-2 md:py-3">
                                {{ show.Qty }}
                            </td>
                        </tr>

                    </tbody>
                </table>
            </div>
        </div>

    </div>
</template>