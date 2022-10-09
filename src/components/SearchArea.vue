<script></script>

<template>
  <section>
    <h2>Free UI resources for everyone</h2>
    <p>
      The largest database of 100% free UI components and designs available in
      the formats popular by UI designers.
    </p>

    <div class="search">
      <select>
        <option>Free Design</option>
        <option>Ücretli</option>
      </select>
      <div class="search-area">
        <span>
          <svg xmlns="http://www.w3.org/2000/svg" height="40" width="40">
            <path
              d="M32.625 33.583 22.042 23q-1.25 1.083-2.875 1.667-1.625.583-3.292.583-4 0-6.771-2.75t-2.771-6.708q0-4 2.771-6.75t6.729-2.75q3.959 0 6.75 2.75 2.792 2.75 2.792 6.708 0 1.75-.625 3.396T23.042 22l10.625 10.542Zm-16.75-9.75q3.375 0 5.729-2.333t2.354-5.75q0-3.375-2.354-5.729t-5.729-2.354q-3.417 0-5.771 2.354T7.75 15.75q0 3.417 2.354 5.75t5.771 2.333Z"
            />
          </svg>
        </span>
        <input placeholder="Search" />
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
section {
  height: 30rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  margin-top: 9rem;
  h2 {
    font-size: 2.2rem;
  }
  p {
    font-size: 1.8rem;
    // width: 60rem;
    width: 43%;
    text-align: center;
    line-height: 2.7rem;
  }

  .search {
    display: flex;
    align-items: center;
    width: 43%;
    height: 7.4rem;
    border: 1px solid #efefff;
    border-radius: 1rem;
    box-shadow: 0px 16px 35px -15px rgba(2, 5, 132, 0.15);

    select {
      height: 5.4rem;
      padding: 1rem;
      border: none;
      border-right: 1px solid #efefff;
      padding: 1rem 1.5rem;
      font-size: 1.6rem;
    }
    .search-area {
      position: relative;
      span {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        padding: 0 2rem;
      }
    }
    input {
      height: 5.4rem;
      width: 100%;
      font-size: 1.6rem;
      padding-left: 6.5rem;
      border: none;
      outline: none;
    }
  }
}
</style>
