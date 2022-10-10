<template>
  <q-layout>
    <q-header elevated>
      <q-toolbar class="bg-positive glossy text-white">
        <q-toolbar-title>Random Animal</q-toolbar-title>
        <q-space />
        <q-btn color="positive" round  icon="restart_alt" @click="animalNb++" />
        <q-space />
        <q-btn
          color="white"
          text-color="positive"
          label="GitHub"
        />
      </q-toolbar>
    </q-header>
    <MainApp :animalNb="animalNb" />
    <q-footer>
      <q-toolbar class="bg-positive glossy" >
        <q-space />
        <q-toolbar-title class="text-center" color="positive">CV 2022</q-toolbar-title>
        <q-space />
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script>
import { ref } from "vue";
import MainApp from "./components/MainApp.vue";

export default {
  name: "LayoutDefault",

  components: { MainApp },
  data() {
    return {
      showMessage: false,
      animalNb: 0,
    };
  },
  created() {},
  setup() {
    return {
      leftDrawerOpen: ref(false),
    };
  },
};
</script>
