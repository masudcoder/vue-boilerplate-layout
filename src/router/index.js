import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../components/Home.vue'
import NotFoundPageAnyName from '../components/NotFoundPage.vue'
import AboutUs from '../components/AboutUs.vue'
import ContactUs from '../components/ContactUs.vue'
import Products from '../components/Products.vue'
import ProductDetails from "../components/ProductDetails";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/about-us',
        name: 'aboutUsRouteName',
        component: AboutUs,
    },
    {
        path: '/contact-us',
        name: 'contactUsRouteName',
        component: ContactUs,
    },
    {
        path: '/products',
        name: 'products',
        component: Products,
    },
    {
        path: '/product/:id',
        name: 'productDetails',
        component: ProductDetails,
    },
    {
        path: '*',
        component: NotFoundPageAnyName,
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
