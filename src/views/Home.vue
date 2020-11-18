<template>
  <div>
    <div class="write-box">
      <input type="text" class="write-name" placeholder="이름" v-model="this.article.name"
      /><input type="password" class="write-pass" placeholder="암호" v-model="this.article.pass"
      /><input type="text" class="write-content" placeholder="내용" v-model="this.article.content" @keyup.enter="this.addArticle"
      /><input type="button" class="write-button" value="등록" @click="this.addArticle" />
    </div>
  </div>
</template>

<style>
.write-box input { border:1px solid #ddd; height:40px; vertical-align: top; box-sizing: border-box }
.write-box input.write-name { width:16%; }
.write-box input.write-pass { width:16%; }
.write-box input.write-content { width:52%; }
.write-box input.write-button { width:16%; }
</style>

<script lang="ts">
import {Options, Vue} from "vue-class-component";

@Options({
  computed: {
  },
  components: {
  },
  methods: {
    addArticle() {
      const name = this.article.name;
      const pass = this.article.pass;
      const content = this.article.content;
      const aa = {
        name, pass, content
      };

      console.log(aa);
      alert(aa);
    }
  }
})

export default class Home extends Vue {
  data() {
    return {
      article: {
        name: '',
        pass: '',
        content: ''
      }
    };
  }
}
</script>
