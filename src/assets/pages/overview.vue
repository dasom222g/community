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
        <li class="alarm">
          <i class="mdi mdi-bell-outline"></i>
          <strong class="alarm__count">
            <span class="hidden">확인하지 않은 알람 갯수</span>5
          </strong>
        </li>
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
    <section class="section">
      <article class="content">
        <strong class="title">My Page</strong>
        <div class="card">
          <div class="card__item">
            <ul class="info">
              <li class="info__item info__item--image">
                <div class="info__imagearea">
                  <img src="" alt="user image">
                </div>
                <div class="info__textarea">
                  <span class="info__title">Kelly</span>
                  <span class="info__sub">Frontend Developer</span>
                </div>
                <div class="info__buttonarea">
                  <button class="button-bg">Edit</button>
                </div>
              </li>
              <div class="info__item">
                <div class="info__textarea ta-center">
                  <span class="info__title">69</span>
                  <span class="info__sub">Shots</span>
                </div>
                <div class="info__textarea ta-center">
                  <span class="info__title">2747</span>
                  <span class="info__sub">Followers</span>
                </div>
                <div class="info__textarea ta-center">
                  <span class="info__title">678</span>
                  <span class="info__sub">Following</span>
                </div>
                <div class="info__textarea ta-center">
                  <span class="info__title">78</span>
                  <span class="info__sub">Lightning</span>
                </div>
              </div>
              <div class="info__item info__item--message">
                <div class="info__messagearea">
                  <i class="mdi mdi-email blue"></i>
                  <span class="text">Message</span>
                </div>
                <div class="info__buttonarea">
                  <button class="button-bg button-bg--gray">Follow</button>
                </div>
              </div>
            </ul>
          </div>
        </div>
      </article>
      <article class="content"></article>
      <article class="content"></article>
    </section>
    <aside class="aside">
      <div class="note">
        <strong class="note__title">
          Note <span class="note__count">3</span>
        </strong>
        <div class="box">
          <ul class="box__list">
            <li class="box__item">
              text
            </li>
          </ul>
        </div>
      </div>
    </aside>
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
  }
}
</script>
