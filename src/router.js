import { createWebHistory, createRouter } from "vue-router";

import Donkey from './components/Donkey.vue'
import HelloWorld from './components/HelloWorld.vue'

// Vue.use(VueRouter);


const routes =[ 

    {
        path: "/",
        name: "Home",
        component: Donkey
    },
    {
        path: "/about",
        name: "About",
        component: HelloWorld
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

// const router = new VueRouter({
//     mode: 'history',
//     linkExactActiveClass: 'active',
//     routes: [
//         {
//             path: '/',
//             name: '',
//             component: Donkey,
//         },
//         {
//             path: '/ProfileMenu',
//             name: 'profilemenu',
//             component: HelloWorld,
//         },
//     ]
// });

export default router;