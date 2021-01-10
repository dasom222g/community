<template>
  <div class="main__content">
    <section class="section">
      <article class="article">
        <strong class="tit-large">{{ title }}</strong>
        <div class="card">
          <div class="card__item-wrap">
            <div class="card__item info">
              <ul class="info__list">
                <li class="info__item info__item--image">
                  <div class="imagearea">
                    <img src="../assets/images/user.jpg" alt="user image">
                  </div>
                  <div class="textarea">
                    <span class="textarea__title">Kelly</span>
                    <span class="textarea__sub">Frontend Developer</span>
                  </div>
                  <div class="additional-item">
                    <button type="button" class="button button--small">Edit</button>
                  </div>
                </li>
                <li class="info__item">
                  <div class="textarea ta-center">
                    <span class="textarea__title">69</span>
                    <span class="textarea__sub">Shots</span>
                  </div>
                  <div class="textarea ta-center">
                    <span class="textarea__title">2747</span>
                    <span class="textarea__sub">Followers</span>
                  </div>
                  <div class="textarea ta-center">
                    <span class="textarea__title">678</span>
                    <span class="textarea__sub">Following</span>
                  </div>
                  <div class="textarea ta-center">
                    <span class="textarea__title">78</span>
                    <span class="textarea__sub">Lightning</span>
                  </div>
                </li>
                <li class="info__item info__item--message">
                  <div class="info__messagearea color-blue">
                    <i class="mdi mdi-email"></i>
                    <span class="text">Message</span>
                  </div>
                  <div class="additional-item additional-item">
                    <button type="button" class="button button--gray">Follow</button>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div class="card__item-wrap">
            <strong class="tit-small color-gray">Spread your profile</strong>
            <div class="card__item sns">
              <ul class="sns__list">
                <li
                  v-for="item in sns.items"
                  :key="item.id"
                  class="sns__item"
                >
                  <a href="#" class="button">
                    <i class="mdi" :class="`mdi-${item.name}`"></i>
                    <span class="button__sns-name">{{ item.desc }}</span>
                  </a>
                  <button class="button-close" @click="snsRemove(item)">
                    <i class="mdi mdi-close"></i>
                    <span class="hidden">sns메뉴 삭제</span>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </article>
      <article class="article">
        <div ref="cardProject" class="card">
          <div class="card__item-wrap">
            <strong class="tit-small color-gray flex">Active projects
              <button
                type="button"
                class="button button--text additional-item"
                @click="showProject"
              >
                {{ project.showText }}
              </button>
            </strong>
            <div class="card__item project">
              <!-- 한 컨텐츠 -->
              <div
                v-for="item in project.items"
                :key="item.id"
                class="project__content"
              >
                <div class="project__iconarea">
                  <i class="mdi mdi-flash-circle"></i>
                </div>
                <div class="textarea">
                  <span class="textarea__title">{{ item.title }}</span>
                  <span class="textarea__sub">{{ item.type }}</span>
                  <span class="textarea__desc bold">{{ item.period }}</span>
                </div>
                <div class="textarea">
                  <span class="textarea__title textarea__title--large color-green">Budge: {{ `$${item.budge}` }}</span>
                </div>
                <div class="project__buttonarea additional-item">
                  <button type="button" class="button active">Delever</button>
                  <button type="button" class="button">Cancel</button>
                </div>
              </div>
              <!-- //한 컨텐츠 -->
            </div>
          </div>
        </div>
      </article>
      <article class="article myshot">
        <div class="card">
          <div class="card__item-wrap">
          <strong class="tit-large">My Shots</strong>
            <div class="card__item card__item--image">
              <div class="shots">
                <img src="" alt="shots 이미지">
                <div class="shots__content">
                  <div class="textarea">
                    <span class="textarea__title">Marketion Landing Page</span>
                    <span class="textarea__sub">03 August 2018</span>
                  </div>
                  <button type="button">
                    <i class="mdi mdi-dots-horizontal"></i>
                    <span class="hidden">더보기</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </section>
    <aside class="aside">
      <div class="note">
        <strong class="note__title">
          Note <span class="note__count">3</span>
        </strong>
        <div class="note__content">
          <button type="button" class="button button--text">
            <i class="mdi mdi-plus"></i>Add Note
          </button>
          <div class="box">
            <ul class="box__list">
              <li class="box__item">
                <div class="textarea">
                  <span class="textarea__title">Medical Expenses</span>
                  <span class="textarea__sub">Enterd On 06/09/2020/15:29 by Anthony Smith</span>
                  <span class="textarea__desc textarea__desc--small">The provider hs shared medical expenses reprt and the original copy of bill EXC0003</span>
                </div>
                <ul class="option">
                  <li class="option__item">Verification</li>
                  <li class="option__item">Billing</li>
                </ul>
                <button type="button" class="button-dot">
                    <i class="mdi mdi-dots-horizontal"></i>
                    <span class="hidden">더보기</span>
                  </button>
              </li>
            </ul>
          </div>
        </div>
        <span class="note__log">last updated 3 mins ago</span>
      </div>
    </aside>
  </div>
</template>

<script>

export default {
  name: 'Mypage',
  components: {
  },
  props: {
		title: '',
	},
  data() {
    return {
      sns: {
        items: [
          {
            id: 1,
            name: 'facebook',
            desc: 'Share with facebook'
          }, {
            id: 2,
            name: 'twitter',
            desc: 'Tweet with twitter'
          }, {
            id: 3,
            name: 'pinterest',
            desc: 'Save with pinterest'
          },
        ],
      },
      project: {
        itemShowHeight: null,
        itemHiddenHeight: null,
        status: false,
        showText: 'Show all',
        items: [
          {
            id: 1,
            title: 'HanaBank 1Q Mobile',
            type: 'Frontend Developer',
            period: '4 Month',
            budge: '1200'
          }, {
            id: 2,
            title: 'GS MarketFor Platform',
            type: 'Frontend Developer',
            period: '1 Month',
            budge: '1500'
          }, {
            id: 3,
            title: 'DCIM Data center Admin',
            type: 'Frontend Developer',
            period: '5 Month',
            budge: '4500'
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
    snsRemove(item) {
      this.sns.items.splice(this.sns.items.indexOf(item), 1)
    },
    showProject() {
      const itemWrap = this.$refs.cardProject.querySelector('.project')
      //상태변경
      this.project.status = !this.project.status
      if (this.project.status) {
        this.project.showText = 'Hidden'
        itemWrap.style.height = `${this.project.itemShowHeight}px`
      } else {
        this.project.showText = 'Show all'
        itemWrap.style.height = `${this.project.itemHiddenHeight}px`
      }
    },
    init() {
      const itemWrap = this.$refs.cardProject.querySelector('.project')
      const itemWrapH = itemWrap.offsetHeight
      const itemH = itemWrap.querySelector('.project__content').offsetHeight
      itemWrap.style.height = `${itemH}px`
      this.project.itemShowHeight = itemWrapH
      this.project.itemHiddenHeight = itemH
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/variables.scss';
@import '../assets/styles/mixin.scss';
.aside {
  padding-left: 60px;
  margin-left: auto;
}
.count {
  font-size: rem(12px);
  background-color: $green;
  display: inline-block;
  text-align: center;
  width: 20px;
  height: 20px;
  line-height: 22px;
  color: $white;
  border-radius: 100%;
}

.card {
  $this: &;
  display: flex;
  margin: -10px;
  align-items: flex-end;
  &__item {
    margin-top: 20px;
    height: 250px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border: 1px solid $border;
    border-radius: 4px;
    box-shadow: 5px 5px 10px rgba(0,0,0, .05);
    &-wrap {
      padding: 10px;
      width: 100%;
    }
    padding: 20px;
    background-color: $white;
  }
}

.info {
  padding: 20px 0;
  &__list {
    margin: -20px 0;
  }
  &__item {
    display: flex;
    align-items: center;
    padding: 20px 30px;
    & ~ & {
      border-top: 1px solid $border;
    }
    .textarea {
      padding: 0 10px;
      width: 100%;
    }
    &--image {
      .textarea {
        padding: 5px 15px;
      }
    }
  }
}

.sns {
  &__list {
    margin: -10px;
  }
  &__item {
    display: flex;
    align-items: center;
    padding: 10px;
  }
  .button {
    width: 100%;
    &-close {
      margin-left: 30px;
    }
  }
}

.project {
  height: auto;
  justify-content: flex-start;
  overflow: hidden;
  padding-top: 0;
  box-sizing: content-box;
  &__content {
    display: flex;
    align-items: center;
    padding-top: 20px;
    min-height: 125px;
    & + & {
      margin-top: 20px;
      border-top: 1px solid $border;
    }
  }
  &__iconarea {
    padding-left: 20px;
    .mdi-flash-circle {
      font-size: rem(70px);
      color: $blue-end;
    }
  }
  .textarea {
    padding: 10px 40px;
    width: 100%;
  }
  &__buttonarea {
    display: flex;
    flex-direction: column;
    .button {
      & + .button {
        margin-top: 20px;
      }
    }
  }
}

.note {
  width: 300px;
  background-color: $white;
  padding: 10px 20px;
  // border: 1px solid $border;
  border-radius: 4px;
  box-shadow: 5px 5px 10px rgba(0,0,0, .05);
  &__title {
    display: flex;
    align-items: center;
    font-weight: 700;
    border-bottom: 1px solid $border;
    margin: 0 -20px;
    padding: 5px 20px 10px;
  }
  &__count {
    display: inline-block;
    width: 16px;
    height: 16px;
    line-height: 18px;
    text-align: center;
    font-size: rem(12px);
    background-color: $gray-200;
    border-radius: 4px;
    margin: -4px 0 0 4px;
  }
  &__content {
    .button--text {
      display: block;
      margin: 10px 0 10px auto;
      font-size: rem(14px);
      font-weight: 700;
    }
  }
  &__log {
    margin-top: 20px;
    color: $gray-300;
    font-style: italic;
    display: inline-block;
    margin-top: 20px;
  }
}

.box {
  &__item {
    padding: 20px;
    border: 1px solid $border;
    border-radius: 4px;
    position: relative;
    & ~ & {
      margin-top: 10px;
    }
    .button-dot {
      position: absolute;
      top: 16px;
      right: 16px;
    }
  }
}

.option {
  display: flex;
  margin: -2px;
  padding-top: 10px;
  &__item {
    font-size: rem(12px);
    font-weight: 700;
    background-color: $gray-200;
    border-radius: 4px;
    padding: 4px 8px;
    margin: 2px;
  }
}
</style>
