<template>
  <div id="app" class="wrap">
    <Main />
  </div>
</template>

<script>
import Vue from "vue";
import Main from "./src/pages/main";


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
