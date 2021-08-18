import { createWebHistory, createRouter } from "vue-router";

// import Donkey from './components/Donkey.vue'
// import HelloWorld from './components/HelloWorld.vue'
import Home from './components/Home.vue'
import Privacy from './components/Privacy.vue'
// import Contact from './components/Contact.vue'


const routes =[ 

    {
        path: "/",
        name: "Home",
        component: Home
    },
    {
        path: "/home",
        name: "MainMenu",
        component: Home   
    },
    {
        path: "/privacy",
        name: "Privacy",
        component: Privacy
    },
    // {
    //     path: "/contact",
    //     name: "contact",
    //     component: Contact
    // },
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