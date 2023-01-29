<template>
    <div class="product-item" @click="$emit('goDetail', product)">
            <div class="title">{{ product.title }}</div>
            <div class="image">
                <img :src="product.images[0]" :alt="product.title">
            </div>
            <div class="description">{{ product.description }}</div>
            <div class="price">{{ product.price }}€</div>

    </div>
</template>


<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { Product } from '@/models/product'; 


export default defineComponent({
    props: {
        product: {
            type: Object as PropType<Product>,
            required: true,
        },
    },
});
</script>


<style scoped>
:root {
    --main-color: rgb(230, 176, 30);
}
.product-item {
    width: 350px;
    height: max-content;
    border: 3px solid rgb(103, 19, 124);
    border-radius: 5px;
    display: grid;
    grid-template-areas: 
    "title title"
    "img info"
    "img price";
    margin-bottom: 1rem;
}

.product-item:hover {
    cursor: pointer;
}

.title {
    grid-area: title;
    height: 20px;
    padding: 1rem;
    font-weight: bold;
    font-size: larger;
    background-color: rgb(240, 174, 33);
    color: rgb(24, 23, 23);
}

.image {
    grid-area: img;
}
.image > img {
    width: 200px;
    height: 200px;
    object-fit: cover;
    padding: 0.5rem 0.5rem 0.5rem 0.5rem;
    border-radius: 150px;
    justify-self: left;
}

.description {
    grid-area: info;
    font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    height: min-content;
    padding: 0.5rem 0.5rem 0 0;
    text-align: left;
}

.price {
    grid-area: price;
    align-self: end;
    justify-self: center;
    padding: 0.5rem 0 0.5rem 0;
    font-weight: bold;
}

</style>