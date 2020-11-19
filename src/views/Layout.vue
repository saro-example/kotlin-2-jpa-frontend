<template>
  <div>
    <nav>
      <b>JPA 예제</b><br/>
      <span>
        <a href="https://github.com/saro-example/kotlin-2-jpa" target="_blank">JPA Code</a> |
        <a href="https://github.com/saro-example/kotlin-2-jpa-frontend" target="_blank">FrontEnd Code</a>
      </span>
    </nav>
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
body { margin:0; padding:0; background: #dbe2ec }
a { text-decoration: none }
a:hover { text-decoration: underline }
input { outline: none; box-sizing: border-box; padding:0 8px }
::-webkit-scrollbar{width:4px;height:4px }

nav { padding:10px 18px 16px; background: #fff }
nav b { font-size:32px; line-height: 1.5; color: #2a3188; }
nav span { font-size:12px; color:#aaa }
nav span a { color: #1b65c1; }
</style>
