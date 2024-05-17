<script setup>
import { nextTick, onMounted } from 'vue'
import Template from '../../Template.vue'
import { useTranslations } from '../../Compostables/translate'
const { translate, locale, setLocale } = useTranslations();
</script>

<template>
    <Template>
        <div class="container mx-auto min-w-full">
            <div class="grid grid-cols-1 md:grid-cols-8 gap-0 min-h-screen">
                <div class="section-2 md:col-span-3 bg-secondary-light dark:bg-secondary-dark p-4 w-full">
                    {{translate('about')}}
                </div>
                <div class="section-3 md:col-span-4 bg-primary-light dark:bg-primary-dark p-4 w-full">Content 3</div>
                <div class="section-1 bg-third-light dark:bg-third-dark p-6 w-full md:order-first">Content 1</div>
            </div>
        </div>
    </Template>
</template>

<style scoped>

</style>
