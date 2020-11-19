<template>
  <div>
    <!--글쓰기 -->
    <div class="write-box">
      <input type="text" class="write-name" placeholder="이름" v-model="this.article.name"
      /><input type="password" class="write-pass" placeholder="암호" v-model="this.article.password"
      /><input type="text" class="write-content" placeholder="내용" v-model="this.article.content" @keyup.enter="this.addArticle"
      /><input type="button" class="write-button" value="등록" @click="this.addArticle" />
    </div>

    <!-- 글 -->
    <div class="main">
      <div v-for="(node, index) in this.list" :key="node.id">
        <div class="main-node">
          <div class="main-node-header">
            <div class="node-header-left">
              <b>{{node.name}}</b>
              <span>({{node.ip}})</span>
              <span>{{node.regAge}}</span>
              <span>▲ {{node.voteUp}}</span>
              <span>▼ {{node.voteDown}}</span>
            </div>
            <div class="node-header-right" :class="index">
              {{node.name}}
            </div>
          </div>
          <div class="content">{{node.content}}</div>
          <div class="write-reply-box">
            <input type="text" placeholder="댓글입력" v-model="node.replyContent" @keyup.enter="this.addArticle"
            /><input type="button" class="write-button" value="댓글" @click="this.addArticle" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.write-box input { border:1px solid #ddd; height:40px; vertical-align: top; box-sizing: border-box }
.write-box input.write-name { width:16%; }
.write-box input.write-pass { width:16%; }
.write-box input.write-content { width:58%; }
.write-box input.write-button { width:10%; background: #fff }

.main {  }

.main-node { border: 1px solid #eee; margin:28px 24px; background: #fff }
.main-node .main-node-header { overflow: auto; min-height: 40px; border-bottom: 1px solid #eee; }
.main-node .main-node-header .node-header-left { float:left; line-height: 40px; padding:0 12px; }
.main-node .main-node-header .node-header-left span { padding-left:12px; }
.main-node .main-node-header .node-header-right { float:right }
.main-node .content { margin: 8px 12px; background: #fafafa; padding:12px; line-height: 1.5; font-size:14px }

.main-node .write-reply-box { border-top: 1px solid #eee }
.main-node .write-reply-box input { border:0; vertical-align: top; height:28px; box-sizing: border-box; }
.main-node .write-reply-box input[type=text] { width:90%; }
.main-node .write-reply-box input[type=button] { width:10%; background: #fff; border-left:1px solid #eee }

</style>

<script lang="ts">
import {Options, Vue} from "vue-class-component";
import BoardService from "@/service/BoardService";
import Result from "@/models/Result";

@Options({
  computed: {
  },
  components: {
  },
  created() {
    this.getList();
  },
  methods: {
    getList() {
      BoardService.getList((list) => {
        (this.list = list).forEach(node => {
          node.regAge = this.formatOrDynamicAgo(node.regDt);
          node.replyContent = '';
        })
      })
    },
    addArticle() {
      BoardService.addArticle(this.article.name, this.article.password, this.article.content, (result: Result<any>) => {
        if (result.st == 'OK') {
          this.article.content = '';
          this.getList();
        } else if(result.msg) {
          alert(result.msg);
        }
      });
    },
    formatOrDynamicAgo(isoDate: string) {
      if (!isoDate) {
        return '';
      }
      let time = Math.floor(Date.parse(isoDate) /  1000);
      let now = Math.floor(new Date().getTime() / 1000);
      if ((time + 60) > now) { // in 60 seconds
        return `${now - time}초 전`;
      }
      now = Math.floor(now / 60);
      time = Math.floor(time / 60);
      if ((time + 60) > now) { // in 60 minutes
        return `${now - time}분 전`;
      }
      now = Math.floor(now / 60);
      time = Math.floor(time / 60);
      if ((time + 24) > now) { // in 24 hours
        return `${now - time}시간 전`;
      }
      now = Math.floor(now / 24);
      time = Math.floor(time / 24);
      if ((time + 30) > now) { // in 24 hours
        return `${now - time}일 전`;
      }
      return isoDate.substring(0, 10);
    }
  }
})

export default class Home extends Vue {
  data() {
    return {
      list: [],
      article: {
        name: '',
        password: '',
        content: ''
      }
    };
  }
}
</script>
