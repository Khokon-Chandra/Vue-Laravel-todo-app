<template>
  <div class="col-md-8 offset-md-2">
    <div v-if="post" class="card">
      <h1 class="title">{{ post.title }}</h1>
      <p class="description">
        <a href="#"> user id: {{ post.userId }}</a>
        {{ post.body }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
    props:['id'],
    data(){
        return {
            post:null
        }
    },
    mounted(){
        fetch("https://jsonplaceholder.typicode.com/posts/"+this.id)
        .then(res=>res.json())
        .then(data => this.post = data);
    }
};
</script>

<style>
</style>