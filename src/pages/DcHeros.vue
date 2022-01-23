<template>
    <div class="center">

 <h1 class="title">Dc Heros {{ dcHeros.length }}</h1>
  <ul>
   <li v-for="(hero,index) in dcHeros" :key="index">
     <div> {{ hero.name }} <button v-on:click =" remove(index)">x</button> </div>
   </li>
  </ul>
  <form
   @submit.prevent="addHero" >
      <input placeholder="type hero name " v-model="newHero" />
  <button type="submit" >Add Hero</button>
  </form>
    </div>
  
</template>

<script>
export default {
      methods:{
         addHero(){
           if(this.newHero !== ""){
          this.dcHeros.push({name: this.newHero});
          this.newHero = ''; 
           } 
   },
   remove(index){
     this.dcHeros = this.dcHeros.filter((hero,i)=> i !== index)
   },
  },
   data(){
    return{
      newHero: "",
      dcHeros: [
      {name:"SuperGirl"},
      {name:"Arrow"},
      {name:"Flash"},
      {name:"Betman"},
      {name:"Superman"},
      ],
    }
  },
    
}
</script>

<style>
.title{
    color:rgb(0, 0, 0);
    font-size: 30px;
    text-align: center;
}

.center{
    width: 400px;
    margin: 0 auto;
}
ul div{
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
}
ul button{
    color: red;
}
ul li{
    font-size: 23px;
}
form{
    display: flex;
    justify-content: space-between;
}
form button{
    
    color:rgb(0, 0, 0);
}


</style>