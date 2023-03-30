<script setup>
    import Queue from './Queue.vue'
    import Multimedia from './Multimedia.vue'
</script>

<template>
    <div class="bg-[#EB5757] h-fit md:h-full grid grid-cols-12">
        <Queue />

        <Multimedia />
    </div>
</template>

<style scoped>

.thumb-white::-webkit-slider-thumb {
  background-color: white;
}

.thumb-white::-moz-range-thumb {
  background-color: white;
}

.thumb-white::-ms-thumb {
  background-color: white;
}
</style>