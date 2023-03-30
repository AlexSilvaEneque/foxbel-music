<script setup>
    import { ref, watch, toRef } from 'vue'
    import { useTrackStore } from '../../store/track'

    const volumen = ref(0.5)
    
    const storeTrack = useTrackStore()
    const isPlay = toRef(storeTrack, 'isPlay')

    const pause = () => {
        storeTrack.pause()
    }

    const play = () => {
        storeTrack.load(storeTrack.selectSong.preview)
    }

    watch(volumen, ( current ) => {
        storeTrack.currentSong.volume = current
    })
</script>

<template>
    <div class="col-span-12 md:col-span-9 lg:col-span-9 flex items-center my-3 md:my-0">
        <div class="w-[60%] md:w-[80%] flex items-center justify-center gap-[20px] text-white">
            <font-awesome-icon icon="fa-solid fa-backward-step"
                class="h-5 md:h-7 hover:cursor-pointer" />
            
            <div class="w-[40px] h-[40px] md:w-[60px] md:h-[60px] rounded-full bg-[#FF7676]
                flex items-center justify-center ">
                <font-awesome-icon v-if="!isPlay"
                icon="fa-solid fa-play"
                class="h-4 md:h-6 hover:cursor-pointer"
                @click="play" />

                <font-awesome-icon v-else
                icon="fa-solid fa-pause"
                class="h-4 md:h-6 hover:cursor-pointer"
                @click="pause"/>
            </div>

            <font-awesome-icon icon="fa-solid fa-forward-step"
                class="h-5 md:h-7 hover:cursor-pointer" />

        </div>
        <div class="w-[40%] md:w-[20%] flex justify-around text-white">
            <input type="range" class="bg-white w-10/12"
                min="0" max="1" step="0.1"
                v-model="volumen">
            <font-awesome-icon icon="fa-solid fa-volume-off"
                class="h-4 md:h-7 hover:cursor-pointer" />
        </div>
    </div>
</template>