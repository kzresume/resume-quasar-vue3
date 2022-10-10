<template>
  <q-layout class="bg-green glossy">
    <q-header elevated>
      <q-toolbar class="bg-positive glossy text-white">
        <q-toolbar-title>Random Animal Compare</q-toolbar-title>
        <q-space />
        <q-btn color="positive" round icon="restart_alt" @click="animalNb++" />
        <q-space />
        <q-btn
          class="q-mx-md"
          color="white"
          text-color="positive"
          label="History"
        >
          <q-tooltip
            transition-show="flip-right"
            transition-hide="flip-left"
            class="bg-green text-white shadow-4"
            :offset="[10, 10]"
          >
            <ol>
              <li v-for="item in history" :key="item.index">{{ item }}</li>
            </ol>
          </q-tooltip>
        </q-btn>
        <q-btn
          color="white"
          text-color="positive"
          label="GitHub"
          href="https://github.com/kzresume"
        />
      </q-toolbar>
    </q-header>
    <MainApp :animalNb="animalNb" @addToHistory="addItem" />
    <q-footer>
      <q-toolbar class="bg-positive glossy">
        <q-space />
        <q-toolbar-title class="text-center" color="positive"
          >CV 2022</q-toolbar-title
        >
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
  methods: {
    addItem(value) {
      if (this.history.length == 16) this.history.shift();
      this.history.push(value);
    },
  },
  data() {
    return {
      animalNb: 0,
      history: [],
    };
  },
  setup() {
    return {
      leftDrawerOpen: ref(false),
    };
  },
};
</script>
