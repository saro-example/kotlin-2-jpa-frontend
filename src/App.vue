<template>
  <router-view :key="$route.fullPath"/>
</template>


<script lang="ts">
import {Options, Vue} from "vue-class-component";

@Options({
  created() {
  }
})

export default class App extends Vue {

}
</script>