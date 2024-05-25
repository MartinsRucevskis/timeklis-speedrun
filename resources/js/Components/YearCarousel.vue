<script setup>

import { computed, onMounted, ref, watch } from 'vue'
import { useYears } from '../Compostables/years'
import { useTranslations } from '../Compostables/translate'
const { translate} = useTranslations()

const currentSlide = ref(0)
const currentYear = ref(2001)
const totalSlides = ref(24)
const firstDot = ref(2001)


const prevSlide = () => {
    if (currentSlide.value != 0) {
        currentSlide.value = (currentSlide.value - 1 + totalSlides.value) % totalSlides.value
    }
    if (currentYear.value > 2001) {
        removeMainDotClass(currentYear.value)
        currentYear.value = currentYear.value - 1
        addMainDotClass(currentYear.value)
        addMainDotClass(currentYear.value)

        if (firstDot.value > 2001) {
            firstDot.value = firstDot.value - 1
        }

        addDotBoarder(firstDot.value)
        removeDotBoarder(firstDot.value + 1)
    }
}

const elementsOnScreen = () => {
    let carousel = document.getElementById('carousel')
    return Math.floor(carousel.getBoundingClientRect().width / 100)
}
const nextSlide = () => {
    if (currentYear.value < lastYear()) {
        if (currentSlide.value <= totalSlides.value - elementsOnScreen()) {
            currentSlide.value = (currentSlide.value + 1) % totalSlides.value
        }
        removeMainDotClass(currentYear.value)
        currentYear.value = currentYear.value + 1
        addMainDotClass(currentYear.value)
        if (firstDot.value < lastYear() - elementsOnScreen() + 2) {
            firstDot.value = firstDot.value + 1
        }
        addDotBoarder(firstDot.value)
    }
}

const removeMainDotClass = (year) => {
    let yearDot = document.getElementById('year-' + year)
    yearDot.classList.remove('dot-main')
    yearDot.classList.add('dot')
}

const lastYear = () => {
    return parseInt(items[items.length - 1].year)
}
const firstYear = () => {
    return parseInt(items[0].year)
}

const addMainDotClass = (year) => {
    let yearDot = document.getElementById('year-' + year)
    yearDot.classList.remove('dot')
    yearDot.classList.add('dot-main')
}

const removeDotBoarder = (year) => {
    if (year > parseInt(items[0].year)) {
        let yearDot = document.getElementById('list-' + year)
        yearDot.classList.remove('border-dashed')
    }
}
const yearDescription = computed(() => {
    const item = items.find((item)=>{ return item.year == currentYear.value});

    console.log(currentYear.value);

    return item.descr;
})
const addDotBoarder = (year) => {
    let yearDot = document.getElementById('list-' + year)
    yearDot.classList.add('border-dashed')
}

const items = useYears().years;
onMounted(() => {
    addMainDotClass(currentYear.value)
    addDotBoarder(currentYear.value)
})

</script>

<template>
    <div
        class="text-slate-50 flex justify-center items-center section-3 md:col-span-4 bg-primary-light dark:bg-primary-dark p-4 w-full">
        <div class="w-full" id="carousel">
            <div class="w-50 overflow-hidden ml-1 md:ml-9 font-sans text-lg">
                <ul v-bind:style="{ transform: `translateX(calc(-${currentSlide } * 100px))` }" x-ref="logos"
                    class="mb-10 transition-all ease-in-out duration-300 flex justify-items-end">
                    <li class="text-right static pb-5 pl-10 border-b-4 border-slate-600  w-full justify-items-end"
                        v-for="item in items" :key="item.year" :id="'list-'+item.year" style="width:100px;">
                        <p class="relative pl-10">{{ item.year }}</p>
                        <span class="absolute top-8 mr-10"><span :id="'year-'+item.year" class="mt-1 dot"></span></span>
                    </li>
                    <li class="text-right static pb-5 pl-10 border-b-4 border-dashed border-slate-600  w-full justify-items-end"
                        v-for="item in items" :key="item.year" :id="'list-'+item.year" style="width:100px;">
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
                <p class="font-bold text-white">{{ currentYear }}</p>
                <button class="pl-2" type="button" @click="nextSlide" data-carousel-prev>
                    <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px"
                         fill="#e8eaed">
                        <path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z" />
                    </svg>
                </button>
            </div>
            <div class="rounded-lg flex justify-center items-center mt-10">
            {{translate(yearDescription)}}
            </div>
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
