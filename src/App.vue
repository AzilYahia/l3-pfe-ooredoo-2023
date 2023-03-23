<script setup>
// import q from "./data/quizes.json"
import {ref , watch} from "vue";
import  {RouterView, RouterLink} from "vue-router";
// import Card from "@/components/Card.vue";
// const quizes = ref(q)
// const search = ref("")
watch(search, () => {
  quizes.value = q.filter(quiz => quiz.name.toLowerCase().includes(search.value.toLowerCase()))
})

</script>


<template>
  <main>
    <div class="links">
      <RouterLink to="/" active-class="active">Home</RouterLink>
      <RouterLink to="/about" active-class="active">About</RouterLink>
    </div>
    <RouterView />
  </main>
</template>

<style scoped>

/*header {*/
/*  margin-bottom: 10px;*/
/*  margin-top: 30px;*/
/*  display: flex;*/
/*  align-items: center;*/
/*  font-weight: bold;*/
/*  margin-right: 30px;*/
/*  border: none;*/
/*  background-color: rgba(128, 128, 128, 0.1);*/
/*  padding: 10px;*/
/*  border-radius: 5px;*/
/*  flex-wrap: wrap;*/
/*  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1);*/
/*  overflow: hidden;*/
/*  cursor: pointer;*/
/*}*/
</style>

<!--<div class="options-container">-->
<!--<Card v-for="quiz in quizes" :key="quiz.id" :quiz="quiz"/>-->
<!--    <div class="card" v-for="quiz in quizes" :key="quiz.id">-->
<!--      <img :src="quiz.img" alt="" >-->
<!--      <div class="card-text">-->
<!--        <h2>{{ quiz.name }}</h2>-->
<!--        <p>{{ quiz.questions.length }} questions</p>-->
<!--      </div>-->

<!--    </div>-->

<!--</div>-->


