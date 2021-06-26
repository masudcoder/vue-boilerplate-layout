<template>
    <div>
        Products Page

        <ProductBox v-for="product in products"
                :key="product.id"
                :product="product"/>


    </div>
</template>

<script>
    import ProductBox from './ProductBox'
    import axios from 'axios'

    export default {
        name: 'Products',
        components: {
        ProductBox
       },

        data() {
            console.log("called 2");
            return {
                products: []
            }
        },
        async created() {
            console.log("called 1");
            const result = await axios.get('https://api.github.com/repos/getredash/redash/issues')
            this.products = result.data
        }
    }
</script>