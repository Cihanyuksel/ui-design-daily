<template>
  <section class="search-section">
    <h2 class="search-section--title">Free UI resources for everyone</h2>
    <p class="search-section--content">
      The largest database of 100% free UI components and designs available in
      the formats popular by UI designers.
    </p>
    <div class="search-section--area">
      <div class="select-wrapper">
        <select>
          <option>Free Design</option>
          <option>Paid Designs</option>
        </select>
      </div>
      <div class="input-wrapper">
        <span class="search-icon">
          <svg xmlns="http://www.w3.org/2000/svg" height="40" width="40">
            <path
              d="M32.625 33.583 22.042 23q-1.25 1.083-2.875 1.667-1.625.583-3.292.583-4 0-6.771-2.75t-2.771-6.708q0-4 2.771-6.75t6.729-2.75q3.959 0 6.75 2.75 2.792 2.75 2.792 6.708 0 1.75-.625 3.396T23.042 22l10.625 10.542Zm-16.75-9.75q3.375 0 5.729-2.333t2.354-5.75q0-3.375-2.354-5.729t-5.729-2.354q-3.417 0-5.771 2.354T7.75 15.75q0 3.417 2.354 5.75t5.771 2.333Z"
            />
          </svg>
        </span>
        <input class="search-input" placeholder="Search..." v-model="searchText" autofocus />
      </div>
    </div>
  </section>
  <Designs :searchText="searchText" />
</template>

<script>
import Designs from './Designs.vue';

export default {
  components: {
    Designs,
  },

  data(){
    return {
      searchText: "",
    }
  }
}
</script>

<style scoped lang="scss">
.search-section {
  padding: 15rem 0 8rem 0 ;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  &--title {
    font-size: 2.2rem;
  }
  &--content {
    font-size: 1.8rem;
    width: 50%;
    text-align: center;
    line-height: 2.7rem;
  }
  &--area {
    display: flex;
    align-items: center;
    width: 50%;
    height: 7.5rem;
    border: 1px solid #efefff;
    border-radius: 1rem;
    box-shadow: 0px 16px 35px -15px rgba(2, 5, 132, 0.15);

    .select-wrapper {
      height: 5.4rem;
      width: 25%;
      border: none;
      border-right: 1px solid #efefff;
      padding: 0 1.5rem;
      font-size: 1.6rem;
      
      select {
        flex-shrink: 0;
        height: inherit;
        width: 100%;
        min-width: 10rem;
        border: none;
        outline: none;
      }
    }
    .input-wrapper {
      position: relative;
      width: 75%;
      .search-icon {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        padding: 0 2rem;
      }
    }
    .search-input {
      flex-shrink: 0;
      height: 5.4rem;
      width: 100%;
      border: none;
      border-bottom: 1px solid #eee;  
      z-index: 10;
      font-size: 1.6rem;
      padding-left: 6.5rem;
      outline: none;
    }
  }
}
</style>
