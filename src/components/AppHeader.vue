<template>
 <nav class="w-full bg-gradient-to-r from-blue-800 text-white px-4 py-2">
        <router-link  class="mx-2" :to = "item.to" v-for="item in list" :key="item">{{ item.title }} </router-link> 
  
 </nav>
</template>

<script>
export default {
    data(){
        return {
            list:[
                {title:'Home',to:"/"},
                {title:'Dc Heros',to:"/dc-heros"},
                {title:'Calendar',to:"/calendar"},
                 {title:'Markdown',to:"/markdown"},
                 {title:'Slider',to:"/slider"},
                 {title:'Calculator',to:"/calculator"},
                 {title:'ReuseableModal',to:"/reuseableModal"},
                  {title:'Chat',to:"/chat"},
                  {title:'User Crud',to:"/user-crud"},
                      {title:'Tensorflow',to:"/tensorflow"},
                
            ]
        }
    }

}
</script>

<style>
nav{
  
       background:rgba(71, 86, 167, 0.793) ;
       color: white;
        padding-left: 1rem/* 16px */;
    padding-right: 1rem/* 16px */;
     padding-top: 0.5rem/* 8px */;
    padding-bottom: 0.5rem/* 8px */;
    font-size: 20px;

}



</style>