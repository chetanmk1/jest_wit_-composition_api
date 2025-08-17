<template>
  <div class="q-pa-md">
    <q-layout view="hHh Lpr lff" class="rounded-borders">
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
          <q-toolbar-title> Jest Vue 3 + Quasar App </q-toolbar-title>
        </q-toolbar>
      </q-header>

      <q-drawer
        v-model="leftDrawerOpen"
        show-if-above
        :mini="miniState"
        :width="200"
        :breakpoint="500"
        bordered
        :class="$q.dark.isActive ? 'bg-grey-9' : 'bg-grey-3'"
        @mouseenter="miniState = false"
        @mouseleave="miniState = true"
      >
        <q-scroll-area class="fit" :horizontal-thumb-style="{ opacity: 0 }">
          <q-list padding>
            <q-item v-ripple to="/" clickable active>
              <q-item-section avatar>
                <q-icon name="dashboard" />
              </q-item-section>
              <q-item-section> Dashboard </q-item-section>
            </q-item>

            <q-item v-ripple to="/homePage" clickable>
              <q-item-section avatar>
                <q-icon name="laptop" />
              </q-item-section>
              <q-item-section> Home </q-item-section>
            </q-item>

            <q-item v-ripple to="/aboutPage" clickable>
              <q-item-section avatar>
                <q-icon name="storefront" />
              </q-item-section>
              <q-item-section> About </q-item-section>
            </q-item>
          </q-list>
        </q-scroll-area>
      </q-drawer>

      <q-page-container>
        <router-view />
      </q-page-container>
    </q-layout>
  </div>
</template>

<script setup>
import { ref } from "vue";
//import EssentialLink from "components/EssentialLink.vue";

defineOptions({
  name: "MainLayout",
});

const leftDrawerOpen = ref(false);
const miniState = ref(true);

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}

</script>
