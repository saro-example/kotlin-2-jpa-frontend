<template>
  <div>
    <div>
      <router-view :key="this.$route.fullPath"/>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  created() {

  }
})
export default class Layout extends Vue {
}
</script>

<style>
body { margin:56px 0 0; padding:0; }
a { text-decoration: none }
a:hover { text-decoration: underline }
input { outline: none }
::-webkit-scrollbar{width:4px;height:4px }
</style>
