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
      <button class="software-item active">All</button>
      <button class="software-item figma">
        <img src="../assets/filter-logo/figma.png" />
      </button>
      <button class="software-item sketch">
        <img src="../assets/filter-logo/sketch.png" />
      </button>
      <button class="software-item studio">
        <img src="../assets/filter-logo/studio.png" />
      </button>
      <button class="software-item xd">
        <img src="../assets/filter-logo/adobeXd.png" />
      </button>
      <button class="software-item photoshop">
        <img src="../assets/filter-logo/adobePs.png" />
      </button>
    </div>
  </div>
</template>

<style scoped lang="scss">
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 5rem;
  font-size: 1.6rem;

  .selector {
    // background-color: gray;
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
      border: none;
      padding: 1rem;
      color: #202142;
      font-weight: 500;
      margin-right: 1rem;
      cursor: pointer;
      border-radius: 3.2rem;
      border: 1px solid #efefff;

      &:hover {
        color: #424369;
        transition: all 500ms;
        border: 1px solid #424369;
      }
    }
  }
  .software-list {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    .software-item {
      height: 5.2rem;
      width: 5.2rem;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      flex-direction: row;
      background-color: transparent;
      border: 1px solid #efefff;
      // margin-right: 1rem;
      border-radius: 7rem;
      padding: 1rem;
      cursor: pointer;

      &:hover {
        border: 1px solid orange;
      }
    }
  }
}
</style>
