<template>
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  computed: {

  }
})
</script>

<style>
@import url('@fortawesome/fontawesome-free/css/all.min.css');

html {
  &.light { background: #eee;  }
  &.dark { background: #333; color:#aaa }
}
body { margin:0; }
</style>