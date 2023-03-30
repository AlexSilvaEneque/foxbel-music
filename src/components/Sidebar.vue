<script setup>
    const libraries = [
        'Recientes',
        'Artistas',
        'Álbums',
        'Canciones',
        'Estaciones'
    ]

    const playlist = [
        'Metal',
        'Para bailar',
        'Rock 90s',
        'Baladas'
    ]
</script>

<template>
    <div class="h-full bg-[#662323]">
        <div class="mb-3 p-3 md:p-6">
            <img src="/foxbel-music@3x.png" alt="logo"
                class="w-[250px] mx-auto">
        </div>
        <div>
            <div class="mb-5">
                <h2 class="font-semibold text-white text-[16px] md:text-[22px] mb-3 px-2 md:px-6">
                    Mi Librería
                </h2>
                <ul v-for="(item, index) in libraries" :key="index">
                    <span class="text-xs md:text-sm text-white/80 hover:cursor-pointer block mb-1 px-2 md:px-6"
                        :class="[index === 0 ? 'text-[#E86067] font-semibold border-l-2 border-l-[#E86067]' : '' ]">
                        {{ item }}
                    </span>
                </ul>
            </div>
            
            <div>
                <h2 class="font-semibold text-white text-[16px] md:text-[22px] mb-3 px-2 md:px-6">
                    Playlist
                </h2>
                <ul v-for="(item, index) in playlist" :key="index">
                    <span class="text-xs md:text-sm text-white/80 hover:cursor-pointer block mb-1 px-2 md:px-6">
                        {{ item }}
                    </span>
                </ul>
            </div>
        </div>
    </div>
</template>