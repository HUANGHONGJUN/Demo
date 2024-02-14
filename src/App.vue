<script setup>
import { logger, toastify } from './utils/React-Toastify';
import Sidebal from "./components/Sidebar.vue";

// toastify();


</script>

<template>
  <Sidebal class="sidebalrouter"></Sidebal>
  <router-view></router-view>
</template>

<style scoped>
.sidebalrouter {
  position: absolute;
  left: 10px;
  top: 10px
}
</style>
