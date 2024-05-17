import { ref, watch, onMounted } from 'vue';
import { useStorage } from '@vueuse/core'

const translations = {
    lv: {
        greet: 'Čau!',
        theme_mode: 'Tumšais režīms',
        home: 'Sākums',
        about: 'Par mani',
        road: 'Ceļš'
    },
    en: {
        greet: 'Hey!',
        theme_mode: 'Dark Mode',
        home: 'Home',
        about: 'About me',
        road: 'Road'
    },
};

export function useTranslations() {
    const locale = useStorage('locale', 'lv');
    const currentTranslations = ref({});

    watch(locale, (newLocale) => {
        currentTranslations.value = translations[newLocale] || {};
    }, {immediate: true});

    const setLocale = (newLocale) => {
        locale.value = newLocale;
    };

    const translate = (key) => {
        return currentTranslations.value[key] || key;
    };

    return { translate, locale, setLocale };
}
