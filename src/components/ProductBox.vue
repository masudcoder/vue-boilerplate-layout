<template>
    <div class="product-container">
        ID: {{ product.id }}
        Title: {{ product.title }}
        <router-link v-bind:to="'/product/' + product.id">
            <button>View Details</button>
        </router-link>
    </div>
</template>

<script>
    export default {
        name: 'ProductBox',
        props:['product']
    }
</script>

<style>
    .product-container {
        border: 1px solid #cccccc;
        margin: 2px;
    }
</style>