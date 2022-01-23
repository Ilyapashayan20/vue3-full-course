<template>

   <div  class=" flex flex-wrap w-full relative ">
       <div v-for="(color,index) in sliders" :key="color"  class=" absolute  w-full ">
           <transition name="fade">
             <div v-if="currentSlider == index"  :class="color" style=" height:350px;">
               
             </div>
           </transition>

       </div>
       <div class="  w-full" style=" height:340px" >
          <div class=" absolute bottom-0 flex justify-center  w-full"> 
               <div v-for="(slider,index) in sliders" :key="slider" 
               @click="makeActive(index)"
               :class="currentSlider == index ? 'bg-gray-700' :
               'bg-gray-300' "
               class=" cursor-pointer mx-2 w-4 h-4 rounded-full "></div>
          </div>
       </div>
       <!-- <div class="my-10 flex w-full">
           <div class=" m-auto">
                <transition name="fade">
          <h1 v-if="isTitleShowing">Slider Carousel</h1>
        </transition>
               
               <button @click="isTitleShowing = !isTitleShowing" class=" px-2 rounded border">TOGGLE TEXT</button>
                   </div>          
       </div> -->
   
   </div>
</template>

<script>
export default {
    data(){
        return{
            currentSlider : 0,
            sliders: ['bg-blue-600','bg-yellow-600','bg-red-500 '],
            interval: '',
            isTitleShowing: true,
        }
    },
    methods:{
         makeActive(index){
             this.currentSlider = index;
               clearInterval(this.interval)
         }
    },
    mounted(){
       this.interval = setInterval(()=>{
            if(this.currentSlider == 2){
                this.currentSlider=0;

            }else{
         this.currentSlider++
            }
          
        },2400)
    },
    beforeUnmount(){
        clearInterval(this.interval)
    }

}
</script>

<style>
body{
    overflow-x: hidden;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 1s ease;
}
.fade-enter-from {
  opacity: 0;
  transform: translateX(100%);
}
.fade-leave-to {
  opacity: 0;
  transform: translateX(-100%);
}

</style>