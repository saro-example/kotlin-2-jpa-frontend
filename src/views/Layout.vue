<template>
  <div>
    <router-view/>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  created() {
    console.log(process.env.BASE_URL)
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
