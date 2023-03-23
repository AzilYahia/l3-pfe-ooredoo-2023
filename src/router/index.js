import {createRouter, createWebHashHistory} from "vue-router";
// import HomeView from "@/views/HomeView.vue";
// import AboutView from "@/views/AboutView.vue";
// import CarView from "@/views/CarView.vue";
import NotFoundView from "@/views/NotFoundView.vue";

const router = createRouter({history: createWebHashHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            // component: HomeView
        },
        {
            path: "/about",
            name: "about",
            // component: AboutView
        },
        {
            path: "/car/:id",
            name: "card",
            // component: CarView
        }
        ,
        {
            path: "/:pathMatch(.*)*",
            name: "NotFound",
            component: NotFoundView
        }
    ]})

export default router