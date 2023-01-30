<template>
    <div class="search">
        <input type="text" placeholder="Search products">
        <button class="search-button">
        </button>
    </div>

    <div class="product-section">
        <div class="loading" v-if="isLoading">Loading...</div>
        <div class="product-list" v-else>
            <ProductItem v-for="product in products"
            :key="product.id"
            :product="product"
            @goDetail="goDetail"
            />
        </div>
    </div>

</template>


<script lang="ts">
import { defineComponent } from 'vue';
import ProductItem from '@/components/ProductItem.vue';
import useProducts from '@/composables/useProducts';
import products from '@/store/products';
import { useRouter } from 'vue-router';
import { Product } from '@/models/product';

export default defineComponent({
    name: 'ProductsView',
    components: {
        ProductItem
    },

    setup() {
        const { products, fetchProducts, isLoading } = useProducts();
        const router = useRouter();

        fetchProducts();

        return {
            products, 
            isLoading,
            goDetail: (product: Product) => {router.push({name: 'detail', params: {id: product.id}})}
        };

    }
})

</script>

<style scoped>
button > svg {
    width: 2rem;
    height:2rem;
}

button:hover {
    cursor: pointer;
}
.search {
    display: flex;
    justify-content: center;
    padding: 1rem 0 1rem 0;
}

.search input {
    width: 50%;
}
.product-list {
    background-color: rgb(250, 250, 243);
    max-width: 100%;
    margin: auto;
    display: grid;
    grid-template-columns: repeat(auto-fill, 350px);
    justify-content: center;
    gap: 1rem
}


</style>