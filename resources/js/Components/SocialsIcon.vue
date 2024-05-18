<script setup>
defineProps({
    svg: String,
    color: String,

})
</script>

<template>
    <button
        type="button"
        data-twe-ripple-init
        data-twe-ripple-color="light"
        :style="'background-color:' + color"
        class="mb-2 inline-block rounded-full p-3 m-1 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg">
          <span class="[&>svg]:h-4 [&>svg]:w-4">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 448 512">
              <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc. -->
              <path
                  :d="svg" />
            </svg>
          </span>
    </button>
</template>

<style scoped>

</style>
