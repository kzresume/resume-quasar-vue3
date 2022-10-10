<template>
  <q-page class="bg-light-green-2">
    <div class="row">
      <AnimalInfo
        v-if="animalArray"
        class="col-12 col-md-6"
        :animal="animalData[0]"
        :compareAnimal="compareResultFirst"
      />
      <AnimalInfo
        v-if="animalArray"
        class="col-12 col-md-6"
        :animal="animalData[1]"
        :compareAnimal="compareResultSecond"
      />
    </div>
  </q-page>
</template>

<style></style>

<script>
import apiClient from "@/services/apiClient";
import AnimalInfo from "./AnimalInfo.vue";

export default {
  name: "MainApp",
  components: { AnimalInfo },
  props: {
    animalNb: Number,
  },
  watch: {
    animalNb() {
      this.showAnimal();
    },
  },
  created() {
    this.showAnimal();
  },
  computed: {
    animalArray() {
      return Array.isArray(this.animalData);
    },
    compareResultFirst() {
      return {
        age: this.animalData[0].lifespan < this.animalData[1].lifespan,
        weight: this.animalData[0].weight_max < this.animalData[1].weight_max,
      };
    },
    compareResultSecond() {
      return {
        age: this.animalData[0].lifespan > this.animalData[1].lifespan,
        weight: this.animalData[0].weight_max > this.animalData[1].weight_max,
      };
    },
  },
  data() {
    return {
      animalData: null,
    };
  },
  methods: {
    showAnimal() {
      apiClient.get("/animals/rand/2").then(({ data }) => {
        this.animalData = data;
      });
    },
  },
};
</script>
