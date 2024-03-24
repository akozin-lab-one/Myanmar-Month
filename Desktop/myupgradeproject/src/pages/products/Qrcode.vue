<template>
    <div class="p-4 sm:ml-64 ">
        <h2 class="text-center mb-3 uppercase font-semibold text-2xl ">Products QRCode</h2>
        <div class="flex justify-center align-middle">
            <div class="p-1 rounded-lg mt-14">
                <div class="qrcode-box">
                    <div class="qrcode" ref="templateReference">
                        <vue-qrcode :value="productData" :options="{ width: 200 }"></vue-qrcode>
                    </div>
                </div>
                <button @click="downloadQRCode" class="download-button">
                    <span v-if="!downloading">Download QR Code as PNG</span>
                    <span v-else class="spinner"></span>
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import VueQrcode from '@chenfengyuan/vue-qrcode';
import { toPng } from "html-to-image";

export default {
    components: {
        VueQrcode
    },
    data() {
        return {
            productData: {}, // Object to be encoded in QR code
            downloading: false
        }
    },
    methods: {
        async getProduct() {
            this.id = this.$route.params.id;
            let res = await axios.get(`product/${this.id}`);
            this.productData = JSON.stringify(res.data);
            console.log(this.productData)
            console.log(res.data)
        },
        downloadQRCode() {
            if (!this.$refs.templateReference || !this.productData) {
                return;
            }

            this.downloading = true;

            toPng(this.$refs.templateReference)
                .then((dataUrl) => {
                    const link = document.createElement("a");
                    link.download = "my-qrcode.png";
                    link.href = dataUrl;
                    link.click();
                    this.downloading = false;
                })
                .catch((err) => {
                    console.log(err);
                    this.downloading = false;
                });
        }
    },
    mounted() {
        this.getProduct();
    }
}
</script>

<style>
/* Add your custom styles here */
</style>