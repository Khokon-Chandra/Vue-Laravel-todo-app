<template>
  <div class="d-flex mt-5 align-items-center justify-content-center">
    <div class="col-md-4 bg-light">
      <div class="p-2">
        <h4 class="text-center">Register</h4>
      </div>
      <div class="p-3 bordered shadow">
        <form @submit.prevent="handleSubmit" action="">
          <div class="mb-3">
            <label for="">Email</label>
            <input
              type="email"
              class="form-control"
              v-model="email"
              name="email"
            />
          </div>
          <div class="mb-3">
            <label for="">Password</label>
            <input
              type="password"
              class="form-control"
              v-model="password"
              name="password"
            />
          </div>

          <div class="mb-3 text-center">
            <button type="submit" class="btn btn-primary btn-sm">
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
  
  <script>
export default {
  data() {
    return {
      email: "info@gmail.com",
      password: null,
    };
  },
  methods: {
    async handleSubmit() {
      try {
        await this.$store.dispatch("signup", {
          email: this.email,
          password: this.password,
        });
        // this.$router.push('/');
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
  
  <style>
</style>