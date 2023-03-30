<script setup>
    import { toRef } from 'vue'
    import { useTrackStore } from '../../store/track'

    const storeTrack = useTrackStore()
    const results = toRef(storeTrack, 'results')

    const change = (param) => {
        storeTrack.setSelectSong(param)
        play()
    }

    const play = () => {
        storeTrack.load(storeTrack.selectSong.preview)
    }
</script>
<template>
    <div>
        <h2 class="text-[#E86060]">
            Resultados
        </h2>
        <div v-if="!storeTrack.isLoading"
            class="flex flex-wrap justify-around gap-[30px] mt-5">
            <div class="w-[180px] h-fit"
                v-for="(item, index) in results" :key="index">
                <div class="relative h-full"
                    @click="change(item)">
                    <img :src="item.album.cover" alt=""
                        class="w-full">

                    <div class="absolute top-[40%] right-[40%]">
                        <font-awesome-icon icon="fa-solid fa-play"
                            class="text-white text-4xl duration-150
                                hover:cursor-pointer hover:text-white/70" />
                    </div>
                    <font-awesome-icon icon="fa-solid fa-ellipsis-vertical"
                        class="absolute top-2 right-2 text-white text-lg duration-150
                            hover:cursor-pointer hover:text-white/70" />

                    
                </div>
                <h3 class="font-semibold text-sm text-gray-900">
                    {{ item.title }}
                </h3>
                <p class="text-xs text-gray-500">
                    {{ item.artist.name }}
                </p>
            </div>
            
        </div>

        <div v-else
         class="flex flex-wrap justify-around gap-[30px] mt-5">
            <div class="w-[180px] h-fit"
                v-for="i in 10">
                <div class="relative h-full">
                    <img src="/502-5027710_fondo-gris-png-transparente-poster.png" alt=""
                        class="w-full">
                </div>
            </div>
            
        </div>
    </div>
</template>