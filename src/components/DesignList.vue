<template>
  <section class="design-section">
    <a class="design" v-for="design in this.filtered" href="#">
      <div class="design-preview">
        <img :src="getImagesDesing(design.image)" alt="" />
      </div>
      <div class="design-detail">
        <p class="design-detail--title">{{ design.title }}</p>
        <button class="design-detail--btn">Download</button>
      </div>
      <div class="design-action">
        <div class="design-action--user">
          <img src="../assets/user.png" alt="" />
          <p class="design-action--user---name"><span>by</span>Jane Doe</p>
        </div>
        <div class="design-action--icon">
          <button class="design-action--icon---code">
            <img src="../assets/icon/code.png" alt="" />
            <div>25</div>
          </button>
          <button class="design-action--icon---appreciate">
            <img src="../assets/icon/appreciate.png" alt="" />
            <div>25</div>
          </button>
        </div>
      </div>
      <div class="design-logo">
        <img :src="getImagesLogo(design.softwareLogo)" alt="" />
      </div>
    </a>
    <div v-if="filtered.length === 0" class="error">
      <img
        src="https://www.uidesigndaily.com/public/img/search-empty-icon.svg"
      />
      <span>Sorry we couldn't find any matches for</span>
      <span class="error-message">{{ searchText }}</span>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    getImagesLogo: {
      type: Function,
    },
    getImagesDesing: {
      type: Function,
    },
    filtered: {},
    searchText: {
      type: String,
    },
  },
};
</script>

<style scoped lang="scss">
.design-section {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  width: 100%;
  gap: 3rem;
  padding: 5rem;
  font-size: 1.4rem;
  .design {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-decoration: none;
    background-color: rgba(255, 255, 255, 0.8);
    box-shadow: 0 20px 10px -15px rgb(197 192 249 / 30%);
    width: 35.5rem;
    height: auto;
    border-radius: 1.6rem;
    overflow: hidden;
    transition: all 500ms;

    &-detail {
      display: flex;
      justify-content: space-between;
      margin-top: 2rem;
      &--title {
        font-weight: 500;
        font-size: 2rem;
        color: black;
      }
      &--btn {
        background-color: rgb(66, 131, 66);
        padding: 1.2rem;
        font-size: 1.6rem;
        color: #fff;
        border-radius: 0.5rem;
        opacity: 0;
        transition: opacity 500ms;
      }
    }
    &:hover .design-detail--btn {
      opacity: 1;
      transition: opacity 500ms;
    }

    &-action {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 3rem 0;

      &--icon {
        display: flex;
        align-items: center;
        justify-content: center;

        &---code {
          display: flex;
          align-items: center;
          margin-right: 2rem;
          img {
            margin-right: 1rem;
          }
        }
        &---appreciate {
          display: flex;
          align-items: center;
          img {
            margin-right: 1rem;
          }
        }
      }
      &--user {
        display: flex;
        align-items: center;
        justify-content: center;

        &---name {
          margin-left: 1rem;
        }
        p {
          color: black;
          font-weight: 700;
          span {
            font-weight: 400;
            margin-right: 5px;
          }
        }
      }
    }

    &-logo {
      position: absolute;
      top: 1rem;
      left: 1rem;
      width: 6rem;
      height: 6rem;
      background-color: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      opacity: 0.5;
      transition: opacity 500ms;
    }
    &:hover .design-logo {
      opacity: 1;
      transition: opacity 500ms;
    }

    &:hover {
      transform: scale(1.03);
      box-shadow: 0 2rem 1rem -1.5rem rgb(197 192 249 / 80%);
    }

    &-preview {
      width: 100%;
      height: auto;
      object-fit: cover;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
      }
    }
  }
}
.error {
  font-size: 3rem;
  width: 100%;
  color: #333;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1.5rem;

  &-message {
    font-weight: 500;
    color: black;
  }
}
</style>
