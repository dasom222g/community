<template>
  <div class="main__content">
    <section class="section">
      <article class="article">
				<strong class="tit-large">{{ title }}</strong>
        <div class="comment">
          <div class="input input--bg">
            <input
              id="comment"
              v-model="comment.input"
              type="text"
              placeholder="Leave a constructive comment..."
              class="input__element"
              @change="save"
            >
            <button
              type="button"
              class="input__submit"
              :class="{'active': comment.input !== ''}"
              @click="save"
            >
              <i class="mdi mdi-check"></i>
              <span class="hidden">전송하기</span>
            </button>
          </div>
          <!-- 한 컨텐츠 -->
          <div
            ref="content"
            v-for="(item, index) in comment.items"
            :key="index"
            class="comment__content"
          >
            <div class="comment__title">
              <div class="user-info">
                <div class="imagearea">
                  <img :src="item.image" alt="user image">
                </div>
                <div class="textarea">
                  <span class="textarea__title">{{ `@ ${item.userId}` }}</span>
                  <span class="textarea__sub text-italic">{{ `${item.time} ago` }}</span>
                </div>
              </div>
              <button
                type="button"
                class="like additional-item"
                :class="{'active': item.like }"
                @click="like(item)"
              >
                <i class="mdi mdi-heart-outline"></i>
                <span class="hidden">좋아요</span>
                <strong class="count">{{ item.likeCount }}</strong>
              </button>
            </div>
            <div class="comment__textarea">{{ item.content }}</div>
            <div v-if="item.current" key="edit" class="comment__buttonarea">
              <!-- <button type="button" class="button button--text">Edit</button> -->
              <button
                type="button"
                class="button active"
                @click="remove(item)"
              >
                Delete
              </button>
            </div>
          </div>
          <!-- //한 컨텐츠 -->
        </div>
      </article>
    </section>
  </div>
</template>

<script>

const itemName = 'COMMENTITEM'
const loadedItem = localStorage.getItem(itemName)
const myComment = []

export default {
  name: 'Community',
  components: {
  },
  props: {
		title: '',
	},
  data() {
    return {
      comment: {
        items: [
          {
            id: 1,
            userId: 'dasom228',
            time: '5 days',
            image: require('../assets/images/dasom.jpg'),
            like: false,
            likeCount: 35,
            content: `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here'`
          },  {
            id: 2,
            userId: 'evan01',
            time: '5 minutes',
            image: require('../assets/images/tube.jpg'),
            like: false,
            likeCount: 2,
            content: `"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.`
          }, 
        ],
        input: '',
        selectLike: false,
      },
    }
  },
  computed: {
  },
  watch: {},
  created() {},
  mounted() {
    this.update()
  },
  methods: {
    update() {
      if (loadedItem !== null) {
        const getItem = JSON.parse(loadedItem)
        getItem.forEach(item => {
          this.comment.items.push(item)
        });
      }
    },
    localSave(obj) {
      myComment.push(obj)
      localStorage.setItem(itemName, JSON.stringify(myComment))
    },
    save() {
      if (this.comment.input !== '') {
        const form = {
          id: this.comment.items.length + 1,
          userId: 'test',
          time: '1 seconds',
          image: require('../assets/images/rion.jpg'),
          like: false,
          likeCount: 0,
          content: this.comment.input,
          current: true,
        }
        this.comment.items.push(form)
        this.localSave(form)
        this.comment.input = ''
        console.log(this.comment.items)
      }
    },
    remove(item) {
      this.comment.items.splice(this.comment.items.indexOf(item), 1)
    },
    like(item) {
      item.like = !item.like
      item.like ? item.likeCount += 1 : item.likeCount -= 1
      console.log(loadedItem)
    },
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/variables.scss';
@import '../assets/styles/mixin.scss';
.comment {
  max-width: 60%;
  margin-top: 20px;
  &__content {
    margin-top: 20px;
    padding: 20px 30px;
    background-color: $white;
    border: 1px solid $border;
    border-radius: 4px;
    box-shadow: 5px 5px 10px rgba(0,0,0, .05);
  }
  &__title {
    display: flex;
    align-items: center;
  }
  &__textarea {
    margin-top: 20px;
    padding: 0 10px;
  }
  &__buttonarea {
    text-align: right;
    margin-top: 20px;
    .button.active {
      height: auto;
      background: $blue-start;
      font-size: rem(12px);
      padding: 6px 20px;
    }
  }
  .input {
    display: flex;
    padding-right: 0;
    &__submit {
      width: 44px;
      background-color: $gray-300;
      color: $white;
      text-align: center;
      cursor: initial;
      &.active {
        background-color: $green;
        cursor: pointer;
      }
    }
    &--bg {
    background-color: $white;
    border: 1px solid $border;
    border-radius: 4px;
    box-shadow: 5px 5px 10px rgba(0,0,0, .05);
    overflow: hidden;
    .input__element {
      padding: 10px 15px;
      width: 100%;
    }
  }
  }
}
.user-info {
  display: flex;
  align-items: center;
  .imagearea {
    border-radius: 100%;
  }
  .textarea {
    margin-left: 20px;
  }
}

.like {
  border-radius: 30px;
  border: 1px solid $border;
  padding: 10px;
  width: 80px;
  color: $gray-300;
  display: flex;
  justify-content: center;
  align-items: center;
  &.active {
    border-color: $blue-start;
    .mdi {
      color: $blue-start;
    }
  }
  .count {
    font-size: rem(14px);
    font-weight: 700;
    color: $gray-600;
    margin-left: 10px;
  }
  .mdi {
    display: block;
    font-size: rem(24px);
    // color: $gray-200
  }
}
</style>
