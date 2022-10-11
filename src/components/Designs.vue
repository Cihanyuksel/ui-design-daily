<template>
  <div class="container">
    <div class="selector">
      <button class="btn active">Latest</button>
      <button class="btn">Popular</button>
    </div>
    <div class="filter-btns">
      <button class="filter-btn">All</button>
      <button class="filter-btn">Web</button>
      <button class="filter-btn">Mobile</button>
      <button class="filter-btn">Desktop</button>
      <button class="filter-btn">UI Kit</button>
      <button class="filter-btn">Coded</button>
    </div>
    <div class="software-list">
      <button @click="filter = ''" class="software-list--item active">
        All
      </button>
      <button @click="filter = 'figma'" class="software-list--item">
        <img src="../assets/filter-logo/figma.png" />
      </button>
      <button @click="filter = 'sketch'" class="software-list--item">
        <img src="../assets/filter-logo/sketch.png" />
      </button>
      <button @click="filter = 'studio'" class="software-list--item">
        <img src="../assets/filter-logo/studio.png" />
      </button>
      <button @click="filter = 'adobexd'" class="software-list--item">
        <img src="../assets/filter-logo/adobeXd.png" />
      </button>
      <button @click="filter = 'photoshop'" class="software-list--item">
        <img src="../assets/filter-logo/adobePs.png" />
      </button>
    </div>
  </div>
  <DesignList
    :getImagesLogo="getImagesLogo"
    :getImagesDesing="getImagesDesing"
    :filtered="filtered"
    :searchText="searchText"
  />
</template>

<script>
import DesignList from "./DesignList.vue";
import designData from "../store/data";

export default {
  props: ["searchText"],

  components: {
    DesignList,
  },

  data() {
    return {
      designData,
      filter: "",
      active: false,
    };
  },

  methods: {
    getImagesDesing(name) {
      return require(`../assets/design-img/${name}.png`);
    },
    getImagesLogo(name) {
      return require(`../assets/filter-logo/${name}.png`);
    },
  },

  computed: {
    filtered() {
      if (this.filter) {
        return this.designData.filter(
          (design) => design.software === this.filter
        );
      } else {
        return this.designData.filter((design) =>
          design.title.toLowerCase().includes(this.searchText.toLowerCase())
        );
      }
    },
  },
};
</script>

<style scoped lang="scss">
.container {
  display: flex;
  justify-content: space-between;
  // flex-wrap: wrap;
  align-items: center;
  padding: 0 5rem;
  font-size: 1.6rem;
  .selector {
    padding: 1rem;
    border: 1px solid #efefff;
    border-radius: 7rem;

    .btn {
      background-color: transparent;
      border: 1px solid #efefff;
      padding: 1.5rem 3rem;
      border-radius: 4.5rem;
      cursor: pointer;

      &.active {
        -webkit-box-shadow: 2px -1px 27px -9px rgba(0, 0, 0, 0.45);
        -moz-box-shadow: 2px -1px 27px -9px rgba(0, 0, 0, 0.45);
        box-shadow: 2px -1px 27px -9px rgba(0, 0, 0, 0.45);
      }
    }
  }
  .filter-btns {
    .filter-btn {
      background-color: transparent;
      padding: 1rem;
      color: #202142;
      font-weight: 500;
      margin-right: 1rem;
      border-radius: 3.2rem;
      border: 1px solid #efefff;

      &:hover {
        transition: all 500ms;
        color: #424369;
        border: 1px solid #424369;
      }
    }
  }
  .software-list {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    &--item {
      height: 5.2rem;
      width: 5.2rem;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      flex-direction: row;
      background-color: transparent;
      border: 1px solid #efefff;
      border-radius: 7rem;
      padding: 1rem;

      &:hover {
        border: 1px solid orange;
        transition: border 500ms;
      }
    }
  }
}
</style>
