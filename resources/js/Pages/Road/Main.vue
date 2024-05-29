<script setup>
import { nextTick, onMounted } from 'vue'
import Template from '../../Template.vue'
import { useTranslations } from '../../Compostables/translate'
import { useYears } from '../../Compostables/years'
const { translate, locale, setLocale } = useTranslations();

const items = useYears().years;
const dividesByZero = (year) => {
    return parseInt(year) % 2 ===0;
}
</script>

<template>
    <Template>
        <div class="container mx-auto min-w-full">
            <div class="gap-0 grid  grid-cols-1 min-h-screen">
                <div class="bg-secondary-light dark:bg-secondary-dark p-4 w-full" v-for="year in items">
                    <h3 class="mb-4 text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-4xl dark:text-white">
                        {{year.year}}
                    </h3>
                    <div :class="year.image===''? '' : 'flex'" v-if="dividesByZero(year.year)">
                        <p id="coolId" class="text-center text-white mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
                            {{translate(year.long_descr)}}
                        </p>
                        <img :alt="translate(year.alt)" class="h-auto max-w-xs"  v-if="year.image !== ''" src="//flowbite.com/docs/images/examples/image-1@2x.jpg" />
                    </div>
                    <div :class="year.image===''? '' : 'flex'"  v-if="!dividesByZero(year.year)">
                        <img :alt="translate(year.alt)" class="h-auto max-w-xs"  v-if="year.image !== ''" src="//flowbite.com/docs/images/examples/image-1@2x.jpg" />
                        <p id="coolId" class="text-center text-white mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
                            {{translate(year.long_descr)}}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </Template>
</template>

<style>
/* ===== Scrollbar CSS ===== */
/* Firefox */
* {
    scrollbar-width: auto;
    scrollbar-color: #fff700 #808080;
}

/* Chrome, Edge, and Safari */
*::-webkit-scrollbar {
    width: 38px;
}

*::-webkit-scrollbar-track {
    background: #808080;
}

*::-webkit-scrollbar-thumb {
    background-color: #fff700;
    border-radius: 0px;
    border: 10px solid #ff0000;
}
</style>
