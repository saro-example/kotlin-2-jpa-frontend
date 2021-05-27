<template>
  <div id="board" class="text-center">
    <div class="input">
      <input type="text" v-model="board.name" placeholder="이름" class="name"/>
      <input type="text" v-model="board.content" placeholder="내용" @keyup.enter="submit()" class="content"/>
    </div>

    <table>
      <tr v-for="node in list" :key="node.id">
        <td>{{node.id}}</td>
        <td>{{node.name}}</td>
        <td>{{node.content}}</td>
        <td>{{node.regDt}}</td>
      </tr>
    </table>
  </div>
</template>


<script lang="ts">
import {Options, Vue} from "vue-class-component";

@Options({
  created() {
    this.load();
  },
  methods: {
    load() {
      fetch('/api/board')
          .then(e => e.json())
          .then(e => this.list = e);
    },
    submit() {

      const name = this.board.name;
      const content = this.board.content;
      this.board.content = '';

      fetch('/api/board', {
        method: 'post',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({name, content})
      })
          .then(e => e.json())
          .then(e => {
            if (e.st == 'OK') {
              this.load();
            } else {
              alert(e.msg);
            }
          });
    }
  }
})

export default class Board extends Vue {
  data() {
    return ({
      list: [],
      board: {
        name: '',
        content: ''
      }
    });
  }
}
</script>

<style>
#board {
  .input {
    margin-top: 40px;
    > input { border:1px solid #ddd; height:32px; padding:0 8px; vertical-align: top }
    .name { width:80px; }
    .content { width:300px; }
  }

  table {
    margin:30px auto 10px;
    tr:nth-child(odd) { background: #ddd }
    td {padding:8px 15px;}
  }
}
</style>
