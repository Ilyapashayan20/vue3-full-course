<template>
<AppHeader />
<div class="mg-auto">

  <router-view> </router-view>

  

    
</div>
 

</template>

<script>

import AppHeader from "./components/AppHeader.vue";
export default {
  components: { AppHeader,},


}
</script>


<style >

.mg-auto{
    width: 100%;
    
    
}


</style>