<script setup>
    import Header from './Header.vue'
    import Feature from './Feature.vue'
    import Songs from './Songs.vue'

    import { onMounted } from 'vue';
    import { useFetch } from '../../composables/useFetch'
    import { useTrackStore } from '../../store/track'

    const storeTrack = useTrackStore()

    const { searchMusic, searchArtist } = useFetch()
    
    onMounted( async () => {
        storeTrack.setLoading(true)
        await searchMusic('eminen')
        await searchArtist(storeTrack.music.idartist)
        storeTrack.setSelectSong(storeTrack.music)
        storeTrack.setLoading(false)
    })

</script>
<template>
    <div class="p-2 md:px-10 md:py-5">
        <!-- TODO: header -->
        <Header />

        <!-- TODO: Feature -->
        <Feature />

        <!-- TODO: songs -->
        <Songs />
    </div>
</template>