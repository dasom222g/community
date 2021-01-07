<template>
  <div class="inner-wrap">
    <Overview />
  </div>
</template>

<script>
import Overview from './overview'
import common from '../script/common.js'

export default {
  name: 'Main',
  components: {
    Overview,
  },
  mixins: [common],
  props: {},
  data() {
    return {
      input: {
        value: '',
        buttonArea: false
      }
    }
  },
  computed: {
  },
  watch: {},
  created() {},
  mounted() {},
  methods: {
  }
}
</script>
