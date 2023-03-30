<script setup>
    import { useTrackStore } from '../../store/track'

    const storeTrack = useTrackStore()

    const play = () => {
        storeTrack.load(storeTrack.selectSong.preview)
    }
</script>
<template>
    <div v-if="!storeTrack.isLoading"
        class="w-full h-[200px] mb-5 flex">
        <div class="hidden lg:block lg:relative h-full w-[250px]">
            <img v-if="storeTrack.music"
                :src="storeTrack.music.img" alt=""
            class="w-full h-full">

            <div class="lg:absolute top-[40%] right-[40%]">
                <font-awesome-icon icon="fa-solid fa-play"
                    class="text-white text-4xl duration-150
                        hover:cursor-pointer hover:text-white/70"
                        @click="play" />
            </div>
            <font-awesome-icon icon="fa-solid fa-ellipsis-vertical"
                class="absolute top-2 right-2 text-white text-lg duration-150
                    hover:cursor-pointer hover:text-white/70" />
        </div>

        <div class="bg-[#a70000cb] w-full px-4 md:px-7 py-8 flex flex-col justify-center"
            v-if="storeTrack.music" >

            <h3 class="text-lg md:text-[22px] text-white/70">
                {{ storeTrack.music.artist }}
            </h3>

            <h3 class="text-[16px] md:text-[20px] text-white/80">
                {{ storeTrack.music.song }}
            </h3>
            
            <p class="mb-3">
                <span class="text-sm text-white/90 mr-5">
                    {{ storeTrack.music.album }}
                </span>
                <span class="text-xs text-[#522020]">
                    {{ storeTrack.fans }}
                    <span>seguidores</span>
                </span>
            </p>

            <div class="flex gap-x-[12px] md:gap-[30px]">
                <button class="w-[90px] md:w-[117px] h-[31px] bg-[#E86042] text-white/80 rounded-[100px]
                    text-xs md:text-sm"
                    @click="play">
                    Reproducir
                </button>
                <button class="w-[90px] md:w-[117px] h-[31px] border border-[#201212] text-[#201212] rounded-[100px]
                    text-xs md:text-sm">
                    Seguir
                </button>
            </div>
        </div>
    </div>

    <div v-else
        class="w-full h-[200px] mb-5 flex">
        <div class="hidden lg:block lg:relative h-full w-[250px]">
            <img src="/502-5027710_fondo-gris-png-transparente-poster.png" alt=""
            class="w-full h-full">
        </div>

        <div class="bg-[#a700006e] w-full px-4 md:px-7 py-8 flex flex-col justify-center" ></div>
    </div>
    
</template>