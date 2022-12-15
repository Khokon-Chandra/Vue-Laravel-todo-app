<template>
  <Modal
    v-if="showModal"
    header="Sign Up to become a member"
    @close="toggleModal()"
  />

  <div v-if="error" class="text-danger text-center mt-3">
    {{ error  }}
  </div>
  <ul v-if="posts.length" class="post-container mt-3">
    <li class="card" v-for="post in posts" :key="post.id">
      <h4 @click="toggleModal()" class="title">{{ post.title }}</h4>

      <p class="body">{{ post.body }}</p>
      <router-link :to="{name:'PostDetails', params:{id:post.id}}">Details</router-link>
    </li>
  </ul>

  <div v-else style="height:100%" class="col-md-3 offset-md-3 d-flex justify-content-center align-items-center">
    <h4 class="text-center">Loading post .....</h4>
  </div>
</template>
<script>
import { ref } from '@vue/reactivity';

import Modal from "../components/Modal.vue";

export default {
  components: { Modal },
  data() {
    return {
      showModal: false,
    };
  },

  setup(){
    const posts = ref([])
    const error = ref(null);
    const dataUrl = 'https://jsonplaceholder.typicode.com/posts';
    const loadData = async ()=>{
      try{
        const data = await fetch(dataUrl);
      if(!data.ok){
        throw Error('no record found',data.status)
      }
      posts.value = await data.json();
      }
      catch(err){
        error.value = err.message
      }
    }
    loadData();
    return {posts,error}
  },

  methods: {
    toggleModal() {
      this.showModal = !this.showModal;
    },
    async loadData() {
      try {
        const res = await fetch(this.postUrl);
        var data = await res.json();
        this.posts = data;
      } catch (error) {
        this.answer = "Error! Could not reach the API. " + error;
      }
    },
  },

  mounted() {
    this.loadData();
  },

};
</script>
