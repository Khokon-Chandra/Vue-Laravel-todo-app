<template>
  <div class="overlay" @click.self="closeModal">
    <div class="modal-content">
      <div class="modal-header">
        <h4 class="title">{{ header }}</h4>
        <a class="close_icone" @click="closeModal" href="javascript:void(0)">close</a>
      </div>
      <div class="modal-body">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, quas
          cumque? Impedit, totam! Deleniti voluptate commodi veritatis non eaque
          molestias aut ab, similique, distinctio, reiciendis nesciunt
          consequuntur tenetur sint recusandae?
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default{
  props:['header'],
  methods:{
    closeModal(){
      this.$emit('close')
    }
  }
}
</script>

<style scoped>
.overlay{
  z-index: 9999;

    margin: 0px 0px;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100vw;
    top: 0;
    position: fixed;
    background: rgba(34, 34, 34, 0.546);
    transition: 0.2s;
}
.modal-content{
  padding: 15px;
  width: 450px;
  height: 300px;
  background: #fff;
  align-self: center;
  border-radius: 6px;
}

.modal-header .title{
  margin: 0px;
  font-family: sans-serif;
  font-size: 25px;
  color: #16afde;
}

.modal-header{
  margin:0;
  display: flex;
  justify-content: space-between;
}

.close_icone{
  text-decoration: none;
  color: red;
}
.modal-content p{
  font-family: sans-serif;
  font-style: normal;
  font-size: 15px;
}
</style>