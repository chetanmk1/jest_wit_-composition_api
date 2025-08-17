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

import { watch } from "vue"; //React to changes, To run code when a reactive value changes.
import { watchEffect } from "vue";
import { nextTick } from "vue"; //Wait until DOM is updated

//two main ways of declaring reactive data: ref and reactive
const count = ref(0); //primitive value(string & number) so ref()

//object, better to use reactive()
const user = reactive({
  name: "Chetan",
  age: 27,
});

//Functions
async function increament() {
  try {
    count.value++; // Reactive change (DOM update will be scheduled)

    await nextTick(); // Wait until DOM is updated
    // Now the DOM reflects the new `count` value
    console.log("DOM updated after count++");
  } catch (error) {
    console.error(error);
  }
}

//Wachers
//Use watch() to run code when a reactive value changes.
watch(count, (newValue, oldValue) => {
  console.log(`increament changed from ${oldValue} to ${newValue}`);
});

watchEffect(() => {
  console.log(`Count changed from watchEffect, current: ${count.value}`);
});

//Reactive hooks
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
