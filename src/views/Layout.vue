<template>

  <div class="text-center">
    <h1>Vue.js 3.0 예제</h1>
  </div>

  <div class="text-center links">
    <router-link to="/">홈</router-link>
    <router-link to="/board">게시판</router-link>
    <router-link to="/404">404</router-link>
  </div>

  <div class="main-document">
    <router-view/>
  </div>

</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  created() {

  },
  methods: {

  }
})
export default class Layout extends Vue {
  data() {
    return {
      asideAlign: 'right'
    };
  }
}
</script>

<style>
img, a { border: 0; }
table, tr, td, th { border-collapse: collapse; border-spacing: 0; padding:0; }
table, tr, td, th, .basic-border-color { border-width:0; border-style: solid; }
input, textarea { outline: none; }
html { height: 100%; }
body { height: 100%; margin: 0; padding: 0; }

.text-center { text-align: center }
.links a { font-size:20px; margin:0 20px; }
.main-document { margin:10px auto; }

</style>
