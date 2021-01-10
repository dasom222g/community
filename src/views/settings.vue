<template>
  <div class="main__content">
    <section class="section">
      <article class="article">
				<strong class="tit-large">{{ title }}</strong>
      </article>
		</section>
  </div>
</template>

<script>

export default {
  name: 'settings',
  components: {
  },
  props: {
		title: '',
	},
  data() {
    return {
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

<style lang="scss" scoped>
@import '../assets/styles/variables.scss';
@import '../assets/styles/mixin.scss';
</style>
