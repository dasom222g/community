<template>
  <div id="app" class="wrap">
    <Main />
    <div class="container">
      Hello
      <span class="mdi mdi-dot-net" />
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import Main from "./src/assets/pages/main";


export default Vue.extend({
  name: 'App',
  components: {
    Main
  },
  data() {
    return {
    };
  },
  mounted() {
  },
  methods: {
  }
});
</script>

<style lang="scss" scoped>
@import './src/assets/styles/variables.scss';
.container {
  color: $green;
}
</style>