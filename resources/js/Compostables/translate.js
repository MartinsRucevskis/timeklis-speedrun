import { ref, watch, onMounted, computed } from 'vue'
import { useStorage } from '@vueuse/core'
const imageSpan = (text, alt, src) => {
    return '<span class="renderImage coolHower font-bold" data-alt="'+alt+'" data-src="'+fullImage(src)+'">'+text+'</span>'
}

const fullImage = (name) => {
    return 'images/' + name + '.jpg';
}
const translations = {
    lv: {
        greet: 'Čau!',
        theme_mode: 'Tumšais režīms',
        home: 'Sākums',
        home_content: 'Šī ir mājaslapa par manu ceļu uz Latvijas universitāti, kur atspoguļoju īsi katru savu dzīves gadu!',
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
        long_descr_2001: 'Piedzimu septembrī, ' +imageSpan('Tukuma slimnīcā', 'Brūna ēka kur atrodas tukuma dzemdību nodaļa', 'slimnica-2')+ '. Svēru kādus 3.5 kilogramus. Īpaši daudz no šī notikuma neatceros.',
        long_descr_2002: 'Neko daudz no šī '+imageSpan('gads', 'Ģimene sēž dārzā', '1-gads')+' neatceros. Pieļauju, ka sāku staigāt.',
        long_descr_2003: 'Man palika 2 gadi, lielie svētki!',
        long_descr_2004: '<p class="text-4xl font-bold">-</p>',
        long_descr_2005: '<p class="text-4xl font-bold">-</p>',
        long_descr_2006: 'Māsa man nedeva spēlēt telefonu. Paņēmu to un izvārīju zupā ar granti(es nezināju, ka tas salūzīs). Māsai vairs nebija telefona 😼',
        long_descr_2007: 'Vienīgas kas nāk atmiņā, ka gāju '+imageSpan('bērnu dārzā', 'bērnudārza bērni sapulcējušies', 'bernu-darzs')+' un mums bija cita audzinātaja. Vienmēr šķita, ka viņa mani ienīda.',
        long_descr_2008: 'Sāku iet '+imageSpan('Tukuma 2. pamatskolā', 'Bērni kas sākuši iet 1. klasē tiek pie rokas izvesti skolas pagalmā', 'pirma-klase')+'. Man spieda spēlēt '+imageSpan('klavieres', 'Brūnas firmas "Rīga" klavieres ar atvērtu vāku', 'klavieres')+', bet tas nekad nepadevās.',
        long_descr_2009: 'Šķiet, ka iestājos sporta skolā. Īsti neatceros. Pirms tam dejoju latviešu tautas dejas kuras ienīdu. Man viņās spieda iet, jo māsa bija gājusi.',
        long_descr_2010: 'Man nav ne mazākās nojausmas ko šajā laikā darīju, atceros, ka braucu uz kaut kādām olimpiādēm. Pārējais ir tīts miglā.',
        long_descr_2011: 'Pilnīgs tukšums.',
        long_descr_2012: 'Sāku iet 5. klasē. Mums bija jauna audzinātāja, kura ienīda visus puišus. Šķiet, ka viņa nebija laimīga ar dzīvi. Mācēja izrunāt pušu uzvārdus ar lielajiem burtiem(kā piemēram: RUČEVSKI❗❗❗ Pie tāfeles❗).',
        long_descr_2013: 'Neko daudz neatceros. Škiet, ka spēlējām pokeru un iedalījām sev labas kārtis. Ēdām labi.',
        long_descr_2014: 'Es gribēju sakrāt rollerim. Sapnis pazuda, kad mamma atrada naudu :(.',
        long_descr_2015: 'Man īsti nav ne jausmas.',
        long_descr_2016: 'Tukšums.',
        long_descr_2017: 'Pabeidzu pamatskolu un iestājos ģimnāzijā.',
        long_descr_2018: 'Noteikti labs gads',
        long_descr_2019: 'Šķiet, ka nekas īpašs nenotika.',
        long_descr_2020: 'Noliku auto tiesības. Iegādājos sev '+ imageSpan('auto', 'sudraba krāsas auto', 'beha')+' kuru '+ imageSpan(' izvazāju pa grāvjiem ziemā', 'sudrabotas krāsas auto ieslīdējis grāvī', 'gravis')+'. Biju aizbraucis uz '+imageSpan('eiropas parlamentu', 'eiropas parlamenta ēkas iekšiene', 'eiropa')+'. Daudz nekas ko šeit pieminēt laikam nav.',
        long_descr_2021: 'Iestājos RTU. Vēlējos kļūt par autobūves inženieri, taču manas cerības sagrāva '+ imageSpan('Ilmārs Iltiņš', 'Sad math profersor', 'iltins')+' u.c. Tā vietā, lai pasniegtu matemātiku viņš strīdējās ar sievu un vērtēja -3 līdz 8. Būvmehāniku attalināti pasniedza caur nokia talruni.',
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
        home_content: 'This is my webpage about my road to University of Latvia where i briefly describe every year of my life!',
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
        long_descr_2001: 'Born in September at '+ imageSpan('Tukuma Hospital', 'Brown building where Tukuma maternity ward is located', 'slimnica-2')+'. Weighed about 3.5 kilograms. Don\'t remember much about this event.',
        long_descr_2002: 'Don\'t remember much about this '+imageSpan('year', 'family sitting in a graden', '1-gads')+'. Guess I started walking.',
        long_descr_2003: 'Turned 2, a big celebration!',
        long_descr_2004: '<p class="text-4xl font-bold">-</p>',
        long_descr_2005: '<p class="text-4xl font-bold">-</p>',
        long_descr_2006: 'Sister wouldn\'t let me play with her phone. Took it and boiled it in soup with barley(I didn\t know that it will break). Sister didn\'t have a phone anymore 😼',
        long_descr_2007: 'Only thing I remember is going to '+imageSpan('kindergarden', 'kindergardens children posing in a group', 'bernu-darzs')+' and having a different teacher. It always seemed like she hated me.',
        long_descr_2008: 'Started going to '+imageSpan('Tukuma 2nd Primary School', 'Children who are starting 1st grade are being walked into the schools backyard', 'pirma-klase')+'. I was forced to play the '+imageSpan('piano', 'Brown, brand "Rīga" piano with opened hood', 'klavieres')+', never got the hang of it.',
        long_descr_2009: 'Think I enrolled in a sports school. Don\'t really remember. A year before i Danced Latvian folk danceswhich I hated. I was forced to go because my sister had gone.',
        long_descr_2010: 'Have no idea what I was doing during this time, remember going to some kind of Olympics. The rest is shrouded in fog.',
        long_descr_2011: 'Complete emptiness.',
        long_descr_2012: 'Started 5th grade. We had a new teacher who hated all boys. It seemed like she wasn\'t happy with life. Knew how to pronounce last names with capital letters(For example RUCEVSKI❗❗❗ IN FRONT OF THE CLASS❗)!',
        long_descr_2013: 'Don\'t remember much. Think we did some poker scams and ate well.',
        long_descr_2014: 'Wanted to save up for scooter. The plan went out the window when my mom found the money :(.',
        long_descr_2015: 'Really have no idea.',
        long_descr_2016: 'Emptiness.',
        long_descr_2017: 'Graduated from primary school and entered high school.',
        long_descr_2018: 'Definitely a good year',
        long_descr_2019: 'Seems like nothing special happened.',
        long_descr_2020: 'Got my driver\'s license. Bought myself a '+ imageSpan('car', 'silver color car', 'beha')+' that I '+ imageSpan('drove through the ditches in winter', 'silver color car inside a ditch', 'gravis')+'. Had been to the '+imageSpan('European Parliament', 'inside of European Parliaments building', 'eiropa')+'. There\'s probably not much else to mention here.',
        long_descr_2021: 'Entered RTU. Wanted to become an automotive engineer, but my hopes were dashed by '+ imageSpan('Ilmārs Iltiņš', 'Sad math profersor', 'iltins')+' and other profesors. Instead of teaching math, he argued with his wife and graded on a scale of -3 to 8. Building mechanics was taught remotely through a Nokia phone.',
        long_descr_2022: 'Dropped out of RTU. Realized that it\'s not worth spending 4 years jumping through hoops and trying to get at least 4 from Stone Age professors. Programmed a little in high school, i wasn\'t too bad at it, i liked it and the salaries were also ok and I entered LU programming.',
        long_descr_2023: 'Seems like nothing special happened here.',
        long_descr_2024: 'In my 3rd year. Got my little paper in programming.'
    },
};

export function useTranslations() {
    const locale = useStorage('locale', 'lv')
    const currentTranslations = ref({})

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
        location.reload();
    };

    const translate = (key) => {
        return currentTranslations.value[key] || key;
    };

    return { translate, locale, isEn, isLv ,setLocale };
}
