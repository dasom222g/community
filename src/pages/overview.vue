<template>
  <div class="container">
    <nav class="nav">
      <div class="input input--file">
        <label class="button button--icon">
          <i class="mdi mdi-cloud-upload"></i>
          Upload
          <input class="hidden" type="file">
        </label>
      </div>
      <ul class="nav__list">
        <li
          ref="navList"
          v-for="item in nav.item"
          :key="item.id"
          class="nav__item"
          :class="{'active': nav.currentNum === item.id}"
        >
          <button
            class="nav__anchor"
            @click="navSelect(item)"
          >
            <i class="mdi" :class="`mdi-${item.icon}`"></i>
            {{ item.name }}
            <strong
              v-if="item.name === 'Community'"
              key="communityCount"
              class="count"
            >2</strong>
          </button>
        </li>
      </ul>
      <button type="button" class="button button--border additional-item additional-item--col">Logout</button>
    </nav>
    <div class="content">
      <div class="search-header">
        <ul class="search-header__list">
          <li class="search-header__item search">
            <div class="input">
              <label for="search" class="input__label">
                <i class="mdi mdi-magnify" />
                <span class="hidden">search</span>
              </label>
              <input
                id="search"
                type="text"
                placeholder="Search shots.."
                class="input__element"
              >
            </div>
          </li>
          <li class="search-header__item alarm">
            <button type="button" class="alarm__content">
              <i class="mdi mdi-bell-outline"></i>
              <strong class="alarm__count">
                <span class="hidden">확인하지 않은 알람 갯수</span>5
              </strong>
            </button>
          </li>
          <li class="search-header__item user">
            <button type="button" class="user__image">
              <img src="../assets/images/user.jpg" alt="user image">
            </button>
            <div class="user__name">Kelly</div>
          </li>
        </ul>
      </div>
      <div class="main">
        <Mypage
          :title="nav.currentPage"
          v-if="nav.currentPage === 'My Page'"
          :key="nav.currentPage"
        ></Mypage>
        <Community
          :title="nav.currentPage"
          v-else-if="nav.currentPage === 'Community'"
          :key="nav.currentPage"
        ></Community>
        <Dashboard
          :title="nav.currentPage"
          v-else-if="nav.currentPage === 'Dashboard'"
          :key="nav.currentPage"
        ></Dashboard>
        <EditPage
          :title="nav.currentPage"
          v-else-if="nav.currentPage === 'Edit Page'"
          :key="nav.currentPage"
        ></EditPage>
        <Chat
          :title="nav.currentPage"
          v-else-if="nav.currentPage === 'Chat'"
          :key="nav.currentPage"
        ></Chat>
        <Settings
          :title="nav.currentPage"
          v-else-if="nav.currentPage === 'Settings'"
          :key="nav.currentPage"
        ></Settings>
        <Creators
          :title="nav.currentPage"
          v-else-if="nav.currentPage === 'Creators'"
          :key="nav.currentPage"
        ></Creators>
      </div>
    </div>
  </div>
</template>

<script>
import Mypage from '../views/mypage'
import Dashboard from '../views/dashboard'
import EditPage from '../views/editPage'
import Chat from '../views/chat'
import Community from '../views/community'
import Settings from '../views/settings'
import Creators from '../views/creators'
import common from '../assets/script/common.js'

export default {
  name: 'Overview',
  components: {
    Mypage,
    Dashboard,
    EditPage,
    Chat,
    Community,
    Settings,
    Creators,
  },
  mixins: [common],
  props: {},
  data() {
    return {
      nav: {
        currentNum: 1,
        currentPage: 'My Page', 
        item: [
          {
            id: 1,
            name: 'My Page',
            icon: 'book-open-page-variant'
          }, { 
            id: 2,
            name: 'Community',
            icon: 'comment-account-outline'
          }, { 
            id: 3,
            name: 'Edit Page',
            icon: 'pencil-outline'
          }, { 
            id: 4,
            name: 'Chat',
            icon: 'forum-outline'
          }, { 
            id: 5,
            name: 'Dashboard',
            icon: 'flash-outline'
          }, { 
            id: 6,
            name: 'Settings',
            icon: 'settings-outline'
          }, { 
            id: 7,
            name: 'Creators',
            icon: 'account-outline'
          },
        ],
      }
    }
  },
  computed: {
  },
  watch: {},
  created() {},
  mounted() {
    this.init()
  },
  methods: {
    navSelect (item) {
      console.log(item)
      this.nav.currentNum = item.id
      this.nav.currentPage = item.name
    },
    init() {
      this.$refs.navList[1].children[0].click()
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/variables.scss';
@import '../assets/styles/mixin.scss';
.container {
  height: 100%;
  display: flex;
  .content {
    width: 100%;
    .main {
      padding: 60px;
      height: calc(100% - 69px);
      overflow-y: auto;
      &__content {
        display: flex;
      }
    }
  }
}
.nav {
  $this : &;
  height: 100%;
  background-color: $white;
  padding: 100px 30px;
  border-right: 1px solid $border;
  display: flex;
  flex-direction: column;
  font-size: rem(14px);
  &__list {
    width: 200px;
    padding: 60px 10px;
  }
  &__item {
    & ~ & {
      margin-top: 10px;
    }
    &.active {
      position: relative;
      color: $blue-start;
      #{$this}__anchor {
        font-weight: 700;
      }
      .mdi {
        color: $blue-start;
      }
      &::before {
        content:'';
        display: inline-block;
        position: absolute;
        left: -40px;
        top: 0;
        bottom: 0;
        width: 5px;
        background: $blue-start;
      }
    }
    .count {
      margin-left: 10px;
    }
  }
  &__anchor {
    width: 100%;
    padding: 10px 0;
    display: flex;
    align-items: center;
    transition: font-weight 0s;
    & > .mdi {
      font-size: rem(18px);
      margin-right: 20px;
      color: $gray-500;
    }
    &:hover {
      color: $blue-start;
      & > .mdi {
        color: $blue-start;
      }
    }
  }
  .button {
    width: 100%;
  }
}
.count {
  font-size: rem(12px);
  background-color: $green;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  color: $white;
  border-radius: 100%;
}
.search-header {
  &__list {
    height: 69px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid $border;
  }
  &__item{
    height: 100%;
    padding: 12px 16px;
    font-size: rem(14px);
    display: flex;
    align-items: center;
    &.search {
      width: 100%;
      .mdi-magnify {
        padding: 4px 10px 2px 0;
        color: $gray-500;
        font-size: 1.8em;
        display: block;
      }
    }
    &.alarm {
      border: 1px solid $border;
      border-width: 0 1px;
    }
  }
}
.alarm {
  .mdi-bell-outline {
    color: $gray-400;
    font-size: rem(28px);
  }
  &__content {
    display: block;
    position: relative;
  }
  &__count {
    position: absolute;
    top: -2px;
    right: -2px;
    font-size: rem(6px);
    background-color: $green;
    display: inline-block;
    text-align: center;
    width: 18px;
    height: 18px;
    line-height: 14px;
    color: $white;
    border-radius: 100%;
    border: 2px solid $white;
    
  }
}

.user {
  width: 50%;
  justify-content: center;
  &__image {
    width: 40px;
    height: 40px;
    overflow: hidden;
    border-radius: 1000%;
    display: inline-block;
    border: 2px solid $white;
    box-shadow: 5px 10px 30px rgba(0,0,0, .33);
  }
  &__name {
    color: $gray-500;
    margin-left: 20px;
    padding: 0 5px;
  }
}
</style>
