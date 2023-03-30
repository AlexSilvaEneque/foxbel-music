<script setup>
    import { useTrackStore } from '../../store/track'

    const storeTrack = useTrackStore()

</script>

<template>
    <div v-if="!storeTrack.isLoading"
        class="col-span-12 md:col-span-3 flex items-center w-full">
        <div class="w-fit md:w-[100px] h-full mr-4">
            <img
                :src="storeTrack.selectSong.img" alt=""
                class="h-full">
        </div>
        <div>
            <h3 class="text-white text-sm">
                {{ storeTrack.selectSong.song }}
            </h3>
            <span class="text-white/70 text-xs">
                {{ storeTrack.selectSong.artist }} - {{ storeTrack.selectSong.album }}
            </span>
        </div>
    </div>
    <div v-else
        class="col-span-12 md:col-span-3 flex items-center w-full">
        <div class="w-fit md:w-[100px] h-full mr-4">
            <img
                src="/502-5027710_fondo-gris-png-transparente-poster.png" alt=""
                class="h-full">
        </div>
    </div>
</template>