<template>
  <header>
    <div class="logo">
      <img src="../assets/logo.png" />
    </div>
    <nav class="navbar">
      <li><a class="active" href="">Free Design</a></li>
      <li><a href="">License</a></li>
      <li><a href="">Articles</a></li>
      <li><a href="">Contributors</a></li>
      <li><a href="">About</a></li>
    </nav>
    <div class="login-area">
      <a href="#" class="btn">Log In</a>
      <a href="#" class="btn btn-primary">Sign Up</a>
    </div>
  </header>
</template>

<style scoped lang="scss">
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 120px;
  border-bottom: 1px solid #EFEFFF;
  background-color: #fcfcff;
  padding: 0 5rem;
  font-size: 1.6rem;
  .navbar {
    display: flex;
    gap: 1rem;
    .active {
        background-color: #F1F1FD;
        color: black;
    }
    li {
      list-style-type: none;
      a {
        text-decoration: none;
        color: #555;
        font-weight: 400;
        padding: 1rem 1.5rem;
        border-radius: 3.2rem;
        &:hover {
            background-color: #F1F1FD;
            color: black;
            transition: all 400ms;
        }
      }
    }
  }
  .login-area {
    display: flex;
    gap: 1rem;
    .btn {
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

<script></script>
