import { ref, watch, onMounted, computed } from 'vue'
import { useStorage } from '@vueuse/core'

const translations = {
    lv: {
        greet: 'Čau!',
        theme_mode: 'Tumšais režīms',
        home: 'Sākums',
        home_content: 'long content',
        about: 'Par mani',
        about_content: 'long_descr',
        road: 'Ceļš',
        descr_2001: 'Es piedzimu',
        descr_2002: 'Es neatceros :(',
        descr_2003: 'Vēljoprojām neatceros :*(',
        descr_2004: 'Sāku iet bērnu dārzā',
        descr_2005: '2005 gads, labs gads',
        descr_2006: 'Mammu, lūdzu aizpildi aili',
        descr_2007: 'NULL',
        descr_2008: 'Sāku iet skolā',
        descr_2009: 'Pazuda atmiņa',
        descr_2010: 'Nekā interesanta',
        descr_2011: 'Hmmm, jāpadomā',
        descr_2012: 'Tukšs',
        descr_2013: 'Man nav atmiņu',
        descr_2014: 'Smagākais pamatskolas breakups ever :(',
        descr_2015: 'Noteikti, ka labs gads',
        descr_2016: 'Pirmais oficiālais darbs, raku grāvjus',
        descr_2017: 'Iestājos ģimnāzijā',
        descr_2018: 'Uzrakstīju savu pirmo programu!!!',
        descr_2019: 'Paspaidīju pogas eiropas parlamenta. Dabūju tiesības, nošķilos.',
        descr_2020: 'Pabeidzu vidusskolu, iestājos RTU - Sāku ienīst Ilmāru Iltiņu.',
        descr_2021: 'Pametu RTU, iestājos LU',
        descr_2022: 'Cītīgi mācos',
        descr_2023: 'Ne tik cītīgi mācos',
        descr_2024: 'Maģistra any % speedruns',
        long_descr_2001: 'Piedzimu septembrī, Tukuma slimnīcā. Svēru kādus 3.5 kilogramus. Īpaši daudz no šī notikuma neatceros.',
        long_descr_2002: 'Neko daudz no šī gada neatceros. Pieļauju, ka sāku staigāt.',
        long_descr_2003: 'Man palika 2 gadi, lielie svētki!',
        long_descr_2004: '-',
        long_descr_2005: '-',
        long_descr_2006: 'Māsa nedeva spēlēt telefonu. Paņēmu to un izvārīju zupā ar granti. Māsai vairs nebija telefona 😼',
        long_descr_2007: 'Vienīgas kas nāk atmiņā, ka gāju bērnu dārzā un mums bija cita audzinātaja. Vienmēr šķitis, ka viņa mani ienīda.',
        long_descr_2008: 'Sāku iet Tukuma 2. pamatskolā. Man spieda spēlēt klavieres, tas nekad nepadevās.',
        long_descr_2009: 'Šķiet, ka iestājos sporta skolā. Īsti neatceros. Pirmstam dejoju tautu dejas kuras ienīdu. Man viņās spieda iet, jo māsa bija gājusi.',
        long_descr_2010: 'Man nav ne mazākās nojausmas ko šajā laikā darīju, atceros, ka braucu uz kaut kādām olimpiādēm. Pārējais ir tīts miglā.',
        long_descr_2011: 'Pilnīgs tukšums.',
        long_descr_2012: 'Sāku iet 5. klasē. Mums bija jauna audzinātāja, kura ienīda visus puišus. Šķiet, ka viņa nebija laimīga ar dzīvi. Mācēja izrunāt džeku uzvārdus ar lielajiem burtiem!',
        long_descr_2013: 'Neko daudz neatceros. Škiet, ka runnojām pokera scamu un ēdām labi.',
        long_descr_2014: 'Es gribēju sakrāt rollerim. Plāns pazuda, kad mamma atrada naudu :(.',
        long_descr_2015: 'Man īsti nav ne jausmas.',
        long_descr_2016: 'Tukšums.',
        long_descr_2017: 'Pabeidzu pamatskolu un iestājos ģimnāzijā.',
        long_descr_2018: 'Noteikti labs gads',
        long_descr_2019: 'Šķiet, ka nekas īpašs nenotika.',
        long_descr_2020: 'Noliku auto tiesības. Iegādājos sev auto kuru izvazāju pa grāvjiem ziemā. Biju aizbraucis uz eiropas parlamentu. Daudz nekas ko šeit pieminēt laikam nav.',
        long_descr_2021: 'Iestājos RTU. Vēlējos kļūt par autobūves inženieri, taču manas cerības sagrāva Ilmārs Iltiņš u.c. Tā vietā, lai pasniegtu matemātiku viņš strīdējās ar sievu un vērtēja -3 līdz 8. Būvmehāniku attalināti pasniedza caur nokia talruni.',
        long_descr_2022: 'Izstājos no RTU. Sapratu, ka nav vērts pavadīt 4 gadus lecot cauri elles lokiem un mēginot dabūt kaut 4 pie pasniedzējiem no akmens laikemeta. Programmēju mazliet vidusskolā, nebija pārāk slikti, algas arī ok un iestājos LU programmēšanā.',
        long_descr_2023: 'Šķiet, ka nekas īpašs šeit nenotika.',
        long_descr_2024: 'Esmu 3. kursā. Dabūju mazo papīru programmēšanā.',
        lorem_short: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna',
        lorem_long: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',

    },
    en: {
        greet: 'Hey!',
        theme_mode: 'Dark Mode',
        home: 'Home',
        home_content: 'long content',
        about: 'About me',
        about_content: 'long_descr',
        road: 'Road',
        descr_2001: 'I was born',
        descr_2002: 'I don\'t remember :(',
        descr_2003: 'Still don\'t remember :*(',
        descr_2004: 'Started kindergarten',
        descr_2005: 'Year 2005...a good year.',
        descr_2006: 'Mom, please fill this',
        descr_2007: 'NULL',
        descr_2008: 'Started going to school',
        descr_2009: 'Memory loss',
        descr_2010: 'Nothing interesting',
        descr_2011: 'Hmmm, I need to think',
        descr_2012: 'Empty',
        descr_2013: 'I don\'t have any memories',
        descr_2014: 'Worst middle-school breakup :(',
        descr_2015: 'Most likely a good year',
        descr_2016: 'First official job, started digging holes',
        descr_2017: 'Enrolled in Gymnasium',
        descr_2018: 'Wrote my first program!!!',
        descr_2019: 'Went to EU parlament, pressed some buttons. Got my drivers licence.',
        descr_2020: 'Finished Gymnasium, enrolled in RTU - Started to hate Ilmāru Iltiņu.',
        descr_2021: 'Dropped out from RTU, Enrolled LU',
        descr_2022: 'Studying heavily',
        descr_2023: 'Studying not so heavily',
        descr_2024: 'Masters any % speedrun',
        long_descr_2001: 'Born in September at Tukuma Hospital. Weighed about 3.5 kilograms. Don\'t remember much about this event.',
        long_descr_2002: 'Don\'t remember much about this year. Guess I started walking.',
        long_descr_2003: 'Turned 2, a big celebration!',
        long_descr_2004: '-',
        long_descr_2005: '-',
        long_descr_2006: 'Sister wouldn\'t let me play with her phone. Took it and boiled it in soup with barley. Sister didn\'t have a phone anymore ',
        long_descr_2007: 'Only thing I remember is going to kindergarten and having a different teacher. It always seemed like she hated me.',
        long_descr_2008: 'Started going to Tukuma 2nd Primary School. Forced to play the piano, never got the hang of it.',
        long_descr_2009: 'Think I enrolled in a sports school. Don\'t really remember. Danced folk dances, which I hated, for my first year. Forced to go because my sister had gone.',
        long_descr_2010: 'Have no idea what I was doing during this time, remember going to some kind of Olympics. The rest is shrouded in fog.',
        long_descr_2011: 'Complete emptiness.',
        long_descr_2012: 'Started 5th grade. We had a new teacher who hated all boys. It seemed like she wasn\'t happy with life. Knew how to pronounce last names with capital letters!',
        long_descr_2013: 'Don\'t remember much. Think we did some poker scams and ate well.',
        long_descr_2014: 'Wanted to save up for roller skates. The plan went out the window when my mom found the money :(.',
        long_descr_2015: 'Really have no idea.',
        long_descr_2016: 'Emptiness.',
        long_descr_2017: 'Graduated from primary school and entered high school.',
        long_descr_2018: 'Definitely a good year',
        long_descr_2019: 'Seems like nothing special happened.',
        long_descr_2020: 'Got my driver\'s license. Bought myself a car that I drove through the ditches in winter. Had been to the European Parliament. There\'s probably not much else to mention here.',
        long_descr_2021: 'Entered RTU. Wanted to become an automotive engineer, but my hopes were dashed by Ilmārs Iltiņš et al. Instead of teaching math, he argued with his wife and graded on a scale of -3 to 8. Building mechanics was taught remotely through a Nokia phone.',
        long_descr_2022: 'Dropped out of RTU. Realized that it\'s not worth spending 4 years jumping through hoops and trying to get at least 4 from Stone Age professors. Programmed a little in high school, it wasn\'t too bad, the salaries are also ok and I entered LU programming.',
        long_descr_2023: 'Seems like nothing special happened here.',
        long_descr_2024: 'In my 3rd year. Got my little paper in programming.'
    },
};

export function useTranslations() {
    const locale = useStorage('locale', 'lv');
    const currentTranslations = ref({});

    watch(locale, (newLocale) => {
        currentTranslations.value = translations[newLocale] || {};
    }, {immediate: true});

    const isEn = computed(()=>{
        return locale.value === 'en';
    })
    const isLv = computed(()=>{
        return locale.value === 'lv';
    })
    const setLocale = (newLocale) => {
        locale.value = newLocale;
    };

    const translate = (key) => {
        return currentTranslations.value[key] || key;
    };

    return { translate, locale, isEn, isLv ,setLocale };
}
