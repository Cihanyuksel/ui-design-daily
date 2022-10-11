<template>
  <header class="header">
    <a class="header-logo">
      <img src="../assets/logo.png" />
    </a>
    <nav class="navbar">
      <li class="navbar-item">
        <a class="navbar-item--thumbnail active" href="">Free Design</a>
      </li>
      <li class="navbar-item">
        <a class="navbar-item--thumbnail" href="">License</a>
      </li>
      <li class="navbar-item">
        <a class="navbar-item--thumbnail" href="">Articles</a>
      </li>
      <li class="navbar-item">
        <a class="navbar-item--thumbnail" href="">Contributors</a>
      </li>
      <li class="navbar-item">
        <a class="navbar-item--thumbnail" href="">About</a>
      </li>
    </nav>
    <div class="login-area">
      <a href="#" class="login-area-btn">Log In</a>
      <a href="#" class="login-area-btn btn-primary">Sign Up</a>
    </div>
  </header>
</template>

<script></script>

<style scoped lang="scss">
.header {
  position: fixed;
  width: 100%;
  z-index: 100;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 10rem;
  border-bottom: 1px solid #efefff;
  background-color: #fcfcff;
  padding: 0 5rem;
  font-size: 1.6rem;
  box-shadow: 0 20px 10px -15px rgb(197 192 249 / 20%);

  &-logo {
    cursor: pointer;
  }
  .navbar {
    display: flex;
    gap: 1rem;

    &-item {
      list-style-type: none;
      .active {
        background-color: #f1f1fd;
        color: black;
      }

      &--thumbnail {
        text-decoration: none;
        color: #555;
        font-weight: 400;
        border-radius: 3.2rem;
        padding: 1rem 1.5rem;

        &:hover {
          background-color: #f1f1fd;
          color: black;
          transition: all 400ms;
        }
      }
    }
  }
  .login-area {
    display: flex;
    gap: 1rem;
    &-btn {
      text-decoration: none;
      color: #555;
      padding: 1rem 1.5rem;
    }
    .btn-primary {
      background-color: #202142;
      border-radius: 1rem;
      color: #fff;
    }
  }
}
</style>
