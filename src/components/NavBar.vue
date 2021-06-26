<template>
    <div>
        <ul>
            <li>
                <router-link to="/">
                   Home
                </router-link>
            </li>
            <li>
                <router-link to="/about-us">
                    About Us
                </router-link>
            </li>
            <li>
                <router-link to="/contact-us">
                    Contact Us
                </router-link>
            </li>
            <li>
                <router-link to="/products">
                    Products
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'NavBar',
    }
</script>