<script setup>
import { nextTick, onMounted } from 'vue'
import Template from '../../Template.vue'
import { useTranslations } from '../../Compostables/translate'
import { useYears } from '../../Compostables/years'
const { translate, locale, setLocale } = useTranslations();

const items = useYears().years;
</script>

<template>
    <Template>
        <div class="container mx-auto min-w-full">
            <div class="gap-0 grid  grid-cols-1 min-h-screen">
                <div class="text-center	bg-secondary-light dark:bg-secondary-dark p-4 w-full" v-for="year in items">
                    <h3 class="mb-4 text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-4xl dark:text-white">
                        {{year.year}}
                    </h3>
                    <p class="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
                        {{translate(year.long_descr)}}
                    </p>

                </div>
            </div>
        </div>
    </Template>
</template>

<style scoped>

</style>
