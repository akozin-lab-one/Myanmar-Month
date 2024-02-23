<script setup>
import SideBar from './components/SideBar.vue'
import Navbar from './components/Navbar.vue'

</script>

<template>
  <Navbar />
  <SideBar />
  <router-view v-slot="{ Component }">
    <component :is="Component" />

  </router-view>
</template>

