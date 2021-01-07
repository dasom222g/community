<template>
  <div class="container">
    <header class="header">
      <ul class="header__list">
        <li class="search">
          <label for="search">
            <i class="mdi mdi-magnify" />
            <span class="hidden">search</span>
          </label>
          <input
            id="search"
            type="text"
            required
            class="liz-input__element"
          >
        </li>
        <li class="alarm"></li>
        <li class="user">
          <div class="user__image">
            <img src="../images/user.jpg" alt="user image">
          </div>
          <div class="user__name">Kelly</div>
        </li>
      </ul>
    </header>
    <nav class="nav">
      <button type="button" class="button-bg">Upload</button>
      <ul class="nav_list">
        <li class="nave__item">
          <a href="#">
            <i class="mdi mdi-book-open-page-variant"></i>
            My Page
          </a>
        </li>
        <li class="nave__item">
          <a href="#">
            <i class="mdi mdi-flash-outline"></i>
            Dashboard
          </a>
        </li>
        <li class="nave__item">
          <a href="#">
            <i class="mdi mdi-pencil-outline"></i>
            Edit Page
          </a>
        </li>
        <li class="nave__item">
          <a href="#">
            <i class="mdi mdi-forum-outline"></i>
            Chat
          </a>
        </li>
        <li class="nave__item">
          <a href="#">
            <i class="mdi mdi-comment-account-outline"></i>
            Community
          </a>
        </li>
        <li class="nave__item">
          <a href="#">
            <i class="mdi mdi-settings-outline"></i>
            Settings
          </a>
        </li>
        <li class="nave__item">
          <a href="#">
            <i class="mdi mdi-account-outline"></i>
            Creators
          </a>
        </li>
      </ul>
      <button type="button" class="button-border">Logout</button>
    </nav>
    <section class="container">
      <article class="content"></article>
      <article class="content"></article>
      <article class="content"></article>
    </section>
    <aside class="aside"></aside>
  </div>
</template>

<script>
import common from '../script/common.js'

export default {
  name: 'Overview',
  components: {
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
    update(e) {
      if (e.target.value !== '') {
        this.input.buttonArea = true
        return
      } else {
        this.input.buttonArea = false
        return
      }
    },
    remove() {
      this.input.value = ''
      this.input.buttonArea = false
      this.$refs.search.focus()
    }
  }
}
</script>
