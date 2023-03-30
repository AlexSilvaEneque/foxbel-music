<script setup>
    import { watch, ref } from 'vue';
    import { useFetch } from '../../composables/useFetch'
    import { useTrackStore } from '../../store/track'

    const storeTrack = useTrackStore()
    const searchBox = ref (null)

    const { searchMusic, searchArtist } = useFetch()

    watch(searchBox, async ( current ) => {
        if (current) {
            storeTrack.setLoading(true)
            await searchMusic(current)
            storeTrack.setSelectSong(storeTrack.music)
            storeTrack.setLoading(false)
        }
    })

</script>
<template>
    <div class="md:flex justify-between items-center mb-5">
        <div class="w-full md:w-fit h-fit">
            <div class="relative">
                <input type="text"
                    class="border border-gray-500 rounded-[100px] w-full md:w-[350px] lg:w-[524px] md:h-[36px] px-3 focus:outline-none text-sm text-gray-600"
                    placeholder="Buscar"
                    v-model="searchBox">
                <font-awesome-icon icon="fa-solid fa-magnifying-glass"
                    class="absolute top-2 right-2 text-xs md:text-sm lg:text-lg md:top-2 md:right-4 text-gray-400" />
            </div>
        </div>
        <div class="text-center text-sm mt-3 md:mt-0 hover:cursor-pointer hover:shadow-sm duration-100">
            <font-awesome-icon icon="fa-solid fa-user" 
                class="text-[#E86060] mr-2" />
            Francisco M.
        </div>
    </div>
</template>