<template>
    <div>
        Product Id: {{product.id}},
        Product title: {{product.title}},
        Details ...
    </div>
</template>

<script>
    //import axios from 'axios'

    export default {
        name: 'ProductDetails',
        data() {
            console.log(this.$route.params.id)
            return {
                product: []
            }

        },
        async created() {
            console.log("call axios that we did before in products vue");
            // const id = this.$route.params.id
            // const result = await axios.get('https://api.github.com/repos/getredash/redash/issues/' + id)
            this.product = {
                "id": this.$route.params.id,
                "title": "This is title"
            };
        }
    }
</script>