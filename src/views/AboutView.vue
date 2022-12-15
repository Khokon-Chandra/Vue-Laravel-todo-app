<template>
  <div class="col-md-8 offset-md-2 card mt-3">
    <h1>This is an about page</h1>
    <h4 class="text-center">Number Of Points: {{ points }}</h4>
    <div class="text-center">
      <button class="btn btn-sm btn-primary" @click="updatePoints(1)"> Add Point </button>
      <button class="btn btn-sm btn-warning" @click="updatePoints(-1)"> Remove Point </button>
    </div>
  </div>
</template>

<script>
import { useStore } from 'vuex';
import { computed } from 'vue';

export default {
  setup(){
    const store = useStore();
    const points = computed(()=>store.state.points);
    const updatePoints = (point)=>{
      store.commit('updatePoints',point);
    }

    return {updatePoints,points}
  },
  computed: {
    points() {
      return this.$store.state.points;
    },
  },
};
</script>
