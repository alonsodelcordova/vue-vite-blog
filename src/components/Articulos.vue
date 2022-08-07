<script lang="ts" setup >
import { ref } from 'vue';
import { Article } from '../models/Articulo';

interface Props{
    listArticulos: Article[]
    id: number
}

const props  = defineProps<Props>()

let isDown = ref(false);
let startX = ref(0);
let scrollLeft = ref(0);


function mousedownClick(e: any) {
    isDown.value = true;
    const slider = document.querySelector('#contenido'+props.id);
    startX.value = e.pageX - slider.offsetLeft;
    scrollLeft.value = slider.scrollLeft;
}

function mouseleaveClick() {
    isDown.value = false;
}

function mouseupClick() {
    isDown.value = false;
}

function mousemoveClick(e: any) {
    if (!isDown.value) return;
    e.preventDefault()
    const slider = document.querySelector('#contenido'+props.id);
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX.value) * 3;
    slider.scrollLeft = scrollLeft.value - walk;
}

</script>
<template>
    <div class="conteudo" :id="'contenido'+props.id" v-on:mousemove="mousemoveClick" v-on:mousedown="mousedownClick"
        v-on:mouseleave="mouseleaveClick" v-on:mouseup="mouseupClick">
        <article class="article" v-for="item of props.listArticulos">
            <h4>{{ item.title }}</h4>
            <span>{{ item.description }}</span>
        </article>
    </div>
</template>
<style scoped>


.conteudo {
    display: flex;
    width: 100%;
    scroll-padding: 25px;
    padding: 1rem;
    column-gap: 20px;
    cursor: pointer;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    scroll-behavior: smooth;
    transition: all ease-in-out 1.5s;
}

@media only screen and (min-width:768px) {
    .conteudo {
        overflow: hidden;
    }
}

.article {
    min-width: 200px;
    padding: 1rem;
    border-radius: .5rem;
    background-color: rgba(47, 194, 186, 0.7);
    user-select: none;
}

.article h4 {
    font-weight: bold;
    text-transform: uppercase;
}
</style>
