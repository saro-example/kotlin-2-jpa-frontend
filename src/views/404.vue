<template>
  <div id="error-404">
    <div class="title">404</div>
    <div class="title-sub">PAGE NOT FOUND</div>
    <div><router-link to="/">처음으로</router-link></div>
  </div>
</template>

<style>
#error-404 { text-align: center; padding-top:100px }
#error-404 .title { font-size:80px; }
#error-404 .title-sub { font-size:32px; margin: 20px 0 }
#error-404 .desc { margin:32px 0 }
</style>

<script lang="ts">
import {Vue} from "vue-class-component";

export default class P404 extends Vue {}
</script>
