import { createRouter, createWebHashHistory } from "vue-router";
import routes from "./routes";
import QrcodeVue from 'qrcode.vue'

const router = createRouter({
    mode: 'history',
    history: createWebHashHistory(),
    routes: routes
})

export default router;