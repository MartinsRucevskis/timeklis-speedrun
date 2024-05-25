<script setup>
import { nextTick, onMounted } from 'vue'
import Template from '../../Template.vue'
import { useTranslations } from '../../Compostables/translate'
import SocialsIcon from '../../Components/SocialsIcon.vue'
const { translate, locale, setLocale } = useTranslations();
</script>

<template>
    <Template>
        <div class="container mx-auto min-w-full">
            <div class=" gap-0 h-screen" >
                <div class="section-3 boarder-4 border-sky-500 bg-primary-light dark:bg-primary-dark p-4 w-full h-screen">Content 3</div>
            </div>
        </div>
    </Template>
</template>

<style scoped>
#box {
    --mask:
        radial-gradient(34.12px at calc(100% - 48.1px) 50%,#000 99%,#0000 101%) 0 calc(50% - 52px)/100% 104px,
        radial-gradient(34.12px at calc(100% + 22.1px) 50%,#0000 99%,#000 101%) calc(100% - 26px) 50%/100% 104px repeat-y;
    -webkit-mask: var(--mask);
    mask: var(--mask);
}

#box2 {
    --mask:
        radial-gradient(68.82px at 96px 50%,#000 99%,#0000 101%) 0 calc(50% - 80px)/100% 160px,
        radial-gradient(68.82px at -56px 50%,#0000 99%,#000 101%) 40px 50%/100% 160px repeat-y;
    -webkit-mask: var(--mask);
    mask: var(--mask);

}
.wave {
     top: 5vh;
     display: block;
     height: 156px;
     overflow: hidden;
     position: absolute;
     right: -0.15vw;
     text-align: center;
     width: 100%;
     z-index: 1;
    rotate: 90deg;
 }
</style>
