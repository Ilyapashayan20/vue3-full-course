<template>
<div class="flex w-full flex-wrap ">
    <h1 class="w-full text-center text-3xl my-4">Markdown App</h1>
      <section class="flex m-auto w-10/12 h-screen">
     <textarea  v-model="text" class="boder h-full w-full border-2 text-2xl"></textarea>
      <article class=" uppercase text-2xl text-current  w-1/2 border bg-gray-100">{{ text }}</article>
  </section>

</div>

</template>

<script>
import marked from "marked";
export default {
    data(){
        return  {
            text: "",
        }
    },
    computed:{
        m(){
            return marked(this.text)
        }
    }

}
</script>

<style>

</style>