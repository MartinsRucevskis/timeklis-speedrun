<script setup>

import { onMounted, ref, watch } from 'vue'

const currentSlide = ref(0)
const currentYear = ref(2001)
const totalSlides = ref(14)
const firstDot = ref(2001);
const hasGoneForward = ref(false);
const hasGoneBack = ref(false);

const prevSlide = () => {
    if (currentSlide.value != 0) {
        currentSlide.value = (currentSlide.value - 1 + totalSlides.value) % totalSlides.value
    }
    if (currentYear.value > 2001) {
        removeMainDotClass(currentYear.value)
        currentYear.value = currentYear.value - 1
        addMainDotClass(currentYear.value)
        addMainDotClass(currentYear.value )

        if(firstDot.value > 2001) {
            firstDot.value = firstDot.value - 1;
        }
        console.log(firstDot.value)
        addDotBoarder(firstDot.value)
        removeDotBoarder(firstDot.value+1)
    }
}

const elementsOnScreen = () =>{
    let carousel = document.getElementById('carousel');
    return Math.floor(carousel.getBoundingClientRect().width / 100);
}
const nextSlide = () => {
    if (currentYear.value < lastYear()) {
        if (currentSlide.value <= totalSlides.value - elementsOnScreen()) {
            currentSlide.value = (currentSlide.value + 1) % totalSlides.value
        }
        removeMainDotClass(currentYear.value);
        currentYear.value = currentYear.value + 1
        addMainDotClass(currentYear.value);
        if(firstDot.value < lastYear() - elementsOnScreen()+2) {
            firstDot.value = firstDot.value +1;
        }
        addDotBoarder(firstDot.value)
    }
}

const removeMainDotClass = (year) =>{
    let yearDot = document.getElementById('year-'+year);
    yearDot.classList.remove('dot-main');
    yearDot.classList.add('dot');
}

const lastYear = () => {
    return parseInt(items[items.length-1].year);
}
const firstYear = () => {
    return parseInt(items[0].year);
}

const addMainDotClass = (year) =>{
    let yearDot = document.getElementById('year-'+year);
    yearDot.classList.remove('dot');
    yearDot.classList.add('dot-main');
}

const removeDotBoarder = (year) =>{
    if(year > parseInt(items[0].year)) {
        let yearDot = document.getElementById('list-' + year);
        yearDot.classList.remove('border-dashed');
    }
}

const isOverEnd = () =>{
    return currentSlide.value+firstYear() > currentYear.value;
}

const isAtStart = () =>{
    return lastYear() - currentSlide.value > currentYear.value;
}
const addDotBoarder = (year) =>{
    let yearDot = document.getElementById('list-'+year);
    yearDot.classList.add('border-dashed');
}

const items = [
    { year: '2001', descr: 'LoremCool' },
    { year: '2002', descr: 'LoremCool' },
    { year: '2003', descr: 'LoremCool' },
    { year: '2004', descr: 'LoremCool' },
    { year: '2005', descr: 'LoremCool' },
    { year: '2006', descr: 'LoremCool' },
    { year: '2007', descr: 'LoremCool' },
    { year: '2008', descr: 'LoremCool' },
    { year: '2009', descr: 'LoremCool' },
    { year: '2010', descr: 'LoremCool' },
    { year: '2011', descr: 'LoremCool' },
    { year: '2012', descr: 'LoremCool' },
    { year: '2013', descr: 'LoremCool' },
    { year: '2014', descr: 'LoremCool' }

]
onMounted(()=>{
    addMainDotClass(currentYear.value);
    addDotBoarder(currentYear.value)
})

</script>

<template>
    <div class="w-full" id="carousel">
        <div class="w-50 overflow-hidden ml-1 md:ml-9 font-sans text-lg">
            <ul v-bind:style="{ transform: `translateX(calc(-${currentSlide } * 100px))` }" x-ref="logos"
                class="mb-10 transition-all ease-in-out duration-300 flex justify-items-end">
                <li class="text-right static pb-5 pl-10 border-b-4 border-slate-600  w-full justify-items-end"  v-for="item in items" :key="item.year" :id="'list-'+item.year" style="width:100px;">
                    <p class="relative pl-10">{{ item.year }}</p>
                    <span class="absolute top-8 mr-10"><span :id="'year-'+item.year" class="mt-1 dot"></span></span>
                </li>
                <li class="text-right static pb-5 pl-10 border-b-4 border-dashed border-slate-600  w-full justify-items-end"  v-for="item in items" :key="item.year" :id="'list-'+item.year" style="width:100px;">
                    <p class="relative pl-10"></p>
                    <span class="absolute top-8 mr-10"><span class="mt-1"></span></span>
                </li>
            </ul>
        </div>
        <div class="rounded-lg flex justify-center items-center">
            <button type="button" @click="prevSlide" data-carousel-prev>
                <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px"
                     fill="#e8eaed">
                    <path d="M400-80 0-480l400-400 71 71-329 329 329 329-71 71Z" />
                </svg>
            </button>
            <p>{{ currentYear }}</p>
            <button class="pl-2" type="button" @click="nextSlide" data-carousel-prev>
                <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px"
                     fill="#e8eaed">
                    <path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z" />
                </svg>
            </button>
        </div>
    </div>
</template>

<style scoped>
.dot {
    margin-left: -0.4rem;
    height: 15px;
    width: 15px;
    background-color: #bbb;
    border-radius: 50%;
    display: inline-block;
    margin-top: 0.6rem;
}

.dot-main {
    margin-left: -0.7rem;;
    height: 25px;
    width: 25px;
    background-color: black;
    border-radius: 50%;
    display: inline-block;
    margin-top: 0.325rem;
}
</style>
