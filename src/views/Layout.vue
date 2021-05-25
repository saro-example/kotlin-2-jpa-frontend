<template>
  <div id="site">

    <!-- body -->
    <div class="body main-doc" :class="`aside-${asideAlign}`">
        <router-view />
    </div>

    <!-- nav -->
    <nav>
      <div class="main-doc">
        <div class="nav-left">
          <router-link to="/" class="logo">
            <i class="fas fa-chevron-left item-ls"></i>
            <span>가리사니</span>
            <i class="fas fa-chevron-right item-rs"></i>
          </router-link>
        </div>
        <div class="nav-right" @click="toggleColorScheme()">
          메뉴
          <!--
          공지사항

          -->
        </div>
        <div class="nav-center">
          강의
          질문답변
          팁/자료
        </div>
      </div>
    </nav>

  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import ColorScheme from "../../domains/ColorScheme";

@Options({
  created() {
    ColorScheme.init();
  },
  methods: {
    toggleColorScheme() {
      ColorScheme.toggle();
    }
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


#site {
  /* main */
  .main-doc { max-width:1280px; margin:0 auto; }

  /* nav */
  > nav {
    position: fixed; top:0; left:0; right:0; height:48px;
    html.light & { background: #fff; box-shadow: 0 0 2px rgba(0,0,0,0.2) }
    html.dark & { background: #222 }

    a { text-decoration: none; }

    .nav-left {
      float:left;
      a.logo {
        span { font-size: 18px; font-weight: bold; margin:0 4px; display: inline-block; padding: 2px 0 0 ; }
        i { font-size: 20px; }
        html.light & { color: #333; }
        html.light & i.item-ls { color:#225b98 }
        html.light & i.item-rs { color:#b13e3e }
        html.dark & { color:#fff }
      }
    }

    .nav-right { float:right; }
    .nav-center { margin:0 100px; text-align: center }
  }

  /* body */
  .body {
    overflow:auto;
    > aside, > div { box-sizing: border-box; }
    > aside { width:248px; }
    > div {
      background: #fff; border:1px solid rgba(0,0,0,0.1)
    }

    @media (max-width: 1299px) {
      padding:49px 0 8px;
    }
    @media (min-width: 1300px) {
      padding:60px 0 16px;
      > div { width:1024px; }
      &.aside-left > div { float:right; }
      &.aside-left > aside { margin-right:calc(1024px + 8px); }
      &.aside-right > div { float:left; }
      &.aside-right > aside { margin-left:calc(1024px + 8px); }
    }
  }
}




</style>
