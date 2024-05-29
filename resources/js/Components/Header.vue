<script setup>
import { computed, nextTick, onMounted, ref, onUnmounted } from 'vue'

const { translate, locale, setLocale } = useTranslations()
import { useToggle, useDark } from '@vueuse/core'
import { useTranslations } from '../Compostables/translate'

const shouldShow = ref(true)
const routes = {
    '/' : 'home',
    '/about-me': 'about',
    '/road': 'road'
}
const toggle = () => {
    if (!shouldShow.value){
        document.getElementById('navBar').classList.remove('h-full');
        document.getElementById('navBar').classList.remove('bg-black');

    } else{
        document.getElementById('navBar').classList.add('h-full');
        document.getElementById('navBar').classList.add('bg-black');
    }
    shouldShow.value = !shouldShow.value
}

const toggleSettings = () => {
    settingsVisible.value = !settingsVisible.value
}
const settingsVisible = ref(false)
const isMobile = ref(window.innerWidth < 768)
const isDark = useDark()
const toggleDark = useToggle(isDark)

const showOnDesktopOrWhenMobileHidden = computed(() => {
    return !isMobile.value || (isMobile.value && !shouldShow.value)
})
onMounted(()=>{
    let path = window.location.pathname;
    let navId = routes[path];
    console.log(navId);
    document.getElementById(navId).classList.add('white');
})

function onResize() {
    isMobile.value = window.innerWidth < 768
}

</script>

<template>
    <nav id="navBar"
        class="nav md:px-2 sm:px-4 md:py-2.5 rounded fixed w-full">
        <div class="md:container md:flex md:flex-wrap md:justify-between md:items-center md:mx-auto">
            <div class="flex items-center">
                <button
                    id="menu-toggle"
                    type="button"
                    class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden"
                    @click="toggle"
                >
                    <span class="sr-only">Open main menu</span>
                    <!-- Hamburger icon -->
                    <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M4 6h16M4 12h16m-7 6h7"
                        />
                    </svg>
                </button>
            </div>
            <div v-if="showOnDesktopOrWhenMobileHidden" class="w-full h-full md:h-auto bg-black md:bg-transparent md:block md:w-auto" id="mobile-menu">
                <ul class="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
                    <li>
                        <a
                            href="/"
                            id="home"
                            class="block py-2 pr-4 pl-3 text-white border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                        >
                            {{ translate('home') }}
                        </a>
                    </li>
<!--                    <li>-->
<!--                        <a-->
<!--                            href="/about-me"-->
<!--                            id="about"-->
<!--                            class="block py-2 pr-4 pl-3 text-white border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"-->
<!--                        >-->
<!--                            {{ translate('about') }}-->
<!--                        </a>-->
<!--                    </li>-->
                    <li>
                        <a
                            href="/road"
                            id="road"
                            class="block py-2 pr-4 pl-3 text-white border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                        >
                            {{ translate('road') }}
                        </a>
                    </li>
                    <li>
                        <button
                            @click="toggleSettings"
                            type="button"
                            class="block py-2 pr-4 pl-3 text-white border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
                                 fill="#e8eaed">
                                <path
                                    d="m370-80-16-128q-13-5-24.5-12T307-235l-119 50L78-375l103-78q-1-7-1-13.5v-27q0-6.5 1-13.5L78-585l110-190 119 50q11-8 23-15t24-12l16-128h220l16 128q13 5 24.5 12t22.5 15l119-50 110 190-103 78q1 7 1 13.5v27q0 6.5-2 13.5l103 78-110 190-118-50q-11 8-23 15t-24 12L590-80H370Zm70-80h79l14-106q31-8 57.5-23.5T639-327l99 41 39-68-86-65q5-14 7-29.5t2-31.5q0-16-2-31.5t-7-29.5l86-65-39-68-99 42q-22-23-48.5-38.5T533-694l-13-106h-79l-14 106q-31 8-57.5 23.5T321-633l-99-41-39 68 86 64q-5 15-7 30t-2 32q0 16 2 31t7 30l-86 65 39 68 99-42q22 23 48.5 38.5T427-266l13 106Zm42-180q58 0 99-41t41-99q0-58-41-99t-99-41q-59 0-99.5 41T342-480q0 58 40.5 99t99.5 41Zm-2-140Z" />
                            </svg>
                        </button>
                        <div v-if="settingsVisible"
                             class="absolute w-full md:right-0 z-10 md:mt-2 md:w-48 md:rounded-md shadow-sm bg-white dark:bg-gray-700">
                            <ul class="py-1 divide-y divide-gray-200 dark:divide-gray-600">
                                <li>
                                    <div class="px-2 py-1 hover:bg-gray-100 dark:hover:bg-gray-600">
                                        <label class="inline-flex items-center w-full cursor-pointer">
                                            <input type="checkbox" :checked="isDark" class="sr-only peer"
                                                   @change="toggleDark()">
                                            <div
                                                class="relative w-6 h-4 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-600 peer-checked:after:translate-x-full rtl:peer-checked:after:translate-x-[-100%] peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-3 after:w-3 after:transition-all dark:border-gray-500 peer-checked:bg-blue-600"></div>
                                            <span
                                                class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-200">{{ translate('theme_mode') }}</span>
                                        </label>
                                    </div>
                                    <div class="px-2 py-1 hover:bg-gray-100 dark:hover:bg-gray-600">
                                        <label class="inline-flex items-center w-full cursor-pointer dark:text-white light:text-black">
                                            <button @click="setLocale('lv')" style="margin-right: 8px">
                                                Lv
                                            </button>
                                            <button @click="setLocale('en')">En</button>
                                        </label>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<style scoped>
.nav {
    z-index: 999999;
}
.white{
    color: aliceblue;
}
</style>
