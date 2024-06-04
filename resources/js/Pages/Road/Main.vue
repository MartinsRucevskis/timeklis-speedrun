<script setup>
import { nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import Template from '../../Template.vue'
import { useTranslations } from '../../Compostables/translate'
import { useYears } from '../../Compostables/years'
const { translate, locale, setLocale } = useTranslations();

const imgSrc = ref('');
const items = useYears().years;
const isHidden = ref(true);
const hasClicked = ref(false);
const dividesByZero = (year) => {
    return parseInt(year) % 2 ===0;
}
onMounted(() => {
    const imagePreviewSpans = document.querySelectorAll('.renderImage');
    imagePreviewSpans.forEach(span => {
        span.addEventListener('click', (event) =>
        {
            const clickedSpan = event.target;
            const imageURL = clickedSpan.dataset.src;
            const imageAlt = clickedSpan.dataset.alt;
            new Promise((resolve) => {
                document.getElementById('preview-image').classList.remove('hidden');
                document.getElementById('preview-image').onload = resolve;
                document.getElementById('preview-image').setAttribute('src', imageURL);
                document.getElementById('preview-image').setAttribute('alt', imageAlt);
            }).finally(() => {
                isHidden.value = false;
            });
        });
    });

    document.addEventListener('click',(event) => {
        if (!isHidden.value && !event.srcElement.classList.contains('renderImage')){
            document.getElementById('preview-image').classList.add('hidden');
            isHidden.value = true;
        }
    });
})
onBeforeUnmount(()=>
    document.removeEventListener('click', this.onClick)
)


</script>

<template>
    <Template>
        <img id="preview-image" :src="imgSrc.value" class="hidden bg-amber-500 rounded-lg" />
        <div class="container mx-auto min-w-full">
            <div class="gap-0 grid  grid-cols-1 min-h-screen">
                <div class="bg-secondary-light dark:bg-secondary-dark p-4 w-full" v-for="year in items">
                    <h3 :id="'road-' + year.year" class="mb-4 text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-4xl dark:text-white">
                        {{year.year}}
                    </h3>
                    <div :class="year.image===''? '' : 'flex'" v-if="dividesByZero(year.year)">
                        <p id="coolId" class="text-center text-white mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400" v-html="translate(year.long_descr)">
                        </p>
                    </div>
                    <div :class="year.image===''? '' : 'flex'"  v-if="!dividesByZero(year.year)">
                        <p id="coolId" class="text-center text-white mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400"  v-html="translate(year.long_descr)">
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </Template>
</template>

<style>
.coolHower:hover{
    cursor: pointer;
}
#preview-image{

    @media screen and (orientation: portrait) {
        width: 70vw;
        height: 70vw;
        position: fixed;
        top: 30vw;
        left: 15vw;
    }

    @media screen and (orientation: landscape) {
        height: 60vh;
        width: 60vh;
        position: fixed;
        top: 20vh;
        left: 32%;
    }
}
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
