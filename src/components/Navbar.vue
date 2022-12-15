<template>
  <nav class="fixed navbar navbar-expand-lg navbar-light bg-light">
    <div class="container">
      <div class="collapse navbar-collapse" id="navbarScroll">
        <ul
          class="
            navbar-nav
            me-auto
            my-2 my-lg-0
            navbar-nav-scroll
            align-items-center
          "
        >
          <li class="nav-item ">
            <router-link class="nav-link rounded" to="/">Home</router-link>
          </li>
          <li class="nav-item ">
            <router-link class="nav-link rounded" to="/about">About</router-link>
          </li>
        </ul>

        <ul class="d-flex mb-0">
          <li class="mx-1 nav-item align-self-center">
            <router-link class="nav-link rounded" to="/login"
              >Login</router-link
            >
          </li>
          <li class="mx-1 nav-item align-self-center">
            <router-link class="nav-link rounded" to="/logout"
              >Logout</router-link
            >
          </li>
          <li class="mx-1 nav-item align-self-center">
            <router-link class="nav-link rounded" to="/register"
              >Register</router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style>
.router-link-active {
  color: #fff;
  border: 1px solid #ddd;
  padding: 2px 10px;
  background: #12e4c1;
}

.router-link-active .nav-link {
  color: #fff;
}

li {
  list-style: none;
}
</style>