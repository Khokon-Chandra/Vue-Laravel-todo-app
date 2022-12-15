<template>
  <div class="d-flex mt-5 align-items-center justify-content-center">
    <div class="col-md-4 bg-light">
        <div class="p-2">
            <h4 class="text-center">Sign In</h4>
        </div>
        <div class="p-3 bordered shadow">
            <form action="" @submit.prevent="handleSubmit">
                <div class="mb-3">
                    <label for="">Email</label>
                    <input type="email" class="form-control" name="email">
                </div>
                <div class="mb-3">
                    <label for="">Password</label>
                    <input type="password" class="form-control" name="password">
                </div>
                <div class="mb-3 text-center">
                    <button class="btn btn-primary btn-sm" >Sign In</button>
                </div>
            </form>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    setup(){
        const handleSubmit = () =>{
            console.log('hello world');
        }

        return {handleSubmit}
    }
}
</script>

<style>

</style>