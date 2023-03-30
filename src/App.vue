<script setup>

  import Sidebar from './components/Sidebar.vue'
  import Main from './components/Main/Index.vue'
  import Song from './components/Song/Index.vue'

</script>

<template>
  <div class="w-full h-screen grid grid-cols-12 grid-rows-6">
    <div class="col-span-4 row-span-5">
      <Sidebar />
    </div>
    <div class="col-span-8 row-span-5 overflow-y-scroll">
        <Main />
    </div>
    <div class="col-span-12 row-span-1">
      <Song />
    </div>
  </div>
</template>
