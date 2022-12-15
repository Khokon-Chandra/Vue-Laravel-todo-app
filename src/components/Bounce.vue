<template>
  <div class="bounce">
    <div class="bounce_container">
      <button @click="start" :disabled="isPlaying" class="btn btn-primary">
        Click Me
      </button>
      <div v-if="showBlock" class="message">
        <h1>Khokon Chandra</h1>
        <h4>Hello Welcome</h4>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 0,
      isPlaying: false,
      delay: null,
      showBlock: false,
    };
  },

  methods: {
    start() {
      this.isPlaying = true;
      this.delay = 2000 + Math.random() * 5000;
      setTimeout(() => {
        this.showBlock = true;
        this.isPlaying = false;
      }, this.delay);
    },
  },

  mounted() {},
};
</script>

<style scoped>
.bounce {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 15px;
  padding: 10px;
  align-items: center;
}

.bounce_container .btn {
  align-self: center;
}

.btn-primary {
  color: #fff;
  background-color: #007bff;
  border-color: #007bff;
}
.message {
  padding: 15px;
  margin-top: 20px;
  border-radius: 10px 10px;
  background: #12edaf;
  width: 200px;
  height: 150px;
}
</style>