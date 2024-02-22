import { createRouter, createWebHashHistory } from "vue-router";
import routes from "./routes";

const router = createRouter({
    mode: 'history',
    history: createWebHashHistory(),
    routes: routes
})

export default router;