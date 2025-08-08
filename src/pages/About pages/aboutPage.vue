<template>
  <q-page-container>
    <div>
      <p>Count: {{ count }}</p>
      <q-btn class="btn" color="primary" @click="increament()"
        >increament
      </q-btn>
    </div>
    <div>User name: {{ user.name }}</div>
    <div>User age: {{ user.age }}</div>
  </q-page-container>
</template>
<script setup>
import { ref, reactive } from "vue";

import {
  onBeforeMount, //Runs before component mounts
  onMounted, //Runs after component mounts
  onBeforeUpdate, //Runs before DOM updates
  onUpdated, //Runs after DOM updates
  onBeforeUnmount, //Runs before component unmounts
  onUnmounted, //Runs after component unmounts
} from "vue";

import { watch } from "vue";

const count = ref(0); //primitive value(string & number) so ref()

//object, better to use reactive()
const user = reactive({
  name: "Chetan",
  age: 27,
});

function increament() {
  try {
    console.log("increament function");
    count.value++;
  } catch (error) {
    console.error(error);
  }
}

/* watch(count(currentValue, previousValue) => {

}); */

//Runs before component mounts
onBeforeMount(() => {});

//Runs after component mounts
onMounted(() => {});

//Runs before DOM updates
onBeforeUpdate(() => {});

//Runs after DOM updates
onUpdated(() => {});

//Runs before component unmounts
onBeforeUnmount(() => {});

//Runs after component unmounts
onUnmounted(() => {});
</script>
