<template>
    <div class="body">

        <div class="loading" v-if="isLoading">Loading...</div>
        <div class="product" v-else>
            <div class="slider">
                <div class="slider-controls">
                    <a href="#" v-for="n in product.images.length" :key="n">{{ n }}</a>
                </div>
                <div class="slider-content" v-for="(image, index) in product.images" :key="index" :style="`background-image: url(${image})`">
                    <img :src="product.images[index]" alt="">
                </div>
            </div>
            <div class="product-info">
                <h1 class="title">{{ product.title }}</h1>
                <h2 class="price">{{ product.price }}€</h2>
                <h3 class="description">{{ product.description }}</h3>
            </div>
        </div>
    </div>
</template>


<script lang="ts">
import { defineComponent } from 'vue';
import useProducts from '@/composables/useProducts';


export default defineComponent({
    name: 'DetailView',
    props: {
        id: {
            type: Number,
            required: true,
        }
    },
    setup(props) {
        const { product, isLoading, fetchProductById } = useProducts()
        fetchProductById(props.id)

        return {
            product, 
            isLoading,
        }
    }
})
</script>

<style scoped>
.body {
    background-color: rgb(105, 60, 136);
    height: max-content;
    display: flex;
}
.product {
    width: 50%;
    box-shadow: 5px 8px 5px grey;
    background-color: white;
    padding: 4rem;
    margin: auto;
    margin-top: 50px;
    margin-bottom: 50px;
    display: flex;
    flex-direction: column;
    /* align-items: flex-start; */
}

.slider {
    /* height: 20rem; */
    position: relative;
    transform: translateZ(0);
    height: auto;
    max-height: 30rem;
    width: 90%;
    background-size: contain;
    overflow: scroll;
    align-self: center;
    scroll-snap-type: y mandatory;
    display: grid;
    grid-auto-flow: row;
}

.slider-controls {
    position: fixed;
    right: 0;
    top: 0;
    width: 1rem;
    height: 100%;
    background: rgb(178, 164, 192);
}
.slider-content {
    /* height: 20rem; */
    background-position: center;
    scroll-snap-align: center;
}

.slider-content > img {
    width: 100%;
}

.product-info {
    /* width: 80%; */
    padding: 1rem;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}
</style>