<template>
  <q-layout view="lHh Lpr lFf">
    <!-- <q-header class="bg-deep-white text-white" elevated> -->
    <q-header>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <!-- <q-toolbar-title> Jest Vue 3 + Quasar App </q-toolbar-title> -->
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <div class="row diplay-flex justify-center items-center q-gutter-sm">
      <!--   <img
          src="media/opengraph.png"
          fit="scale-down"
          style="width: auto; height: 200px"
        /> -->
      </div>
      <q-item to="/" clickable v-ripple>
        <q-item-section avatar>
          <q-icon name="dashboard" />
        </q-item-section>
        <q-item-section> Dashboard </q-item-section>
      </q-item>

      <q-item to="/homePage" clickable v-ripple>
        <q-item-section avatar>
          <q-icon name="laptop" />
        </q-item-section>
        <q-item-section> Home </q-item-section>
      </q-item>

      <q-item to="/aboutPage" clickable v-ripple>
        <q-item-section avatar>
          <q-icon name="storefront" />
        </q-item-section>
        <q-item-section> About </q-item-section>
      </q-item>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from "vue";
import EssentialLink from "components/EssentialLink.vue";

defineOptions({
  name: "MainLayout",
});

const leftDrawerOpen = ref(false);

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}
</script>
