<template>
  <q-page class="bg-light-green-2">
    <div class="row q-pt-xl justify-around">
      <AnimalInfo
        v-if="animalArray"
        class="col-11 col-md-5"
        :animal="animalData[0]"
        :olderAnimal="!olderAnimal"
        :heavierAnimal="!heavierAnimal"
        :biggerAnimal="!biggerAnimal"
      />
      <AnimalInfo
        v-if="animalArray"
        class="col-11 col-md-5"
        :animal="animalData[1]"
        :olderAnimal="olderAnimal"
        :heavierAnimal="heavierAnimal"
        :biggerAnimal="biggerAnimal"
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
    olderAnimal() {
      return Number(this.animalData[0].lifespan) > Number(this.animalData[1].lifespan);
    },
    heavierAnimal() {
      return Number(this.animalData[0].weight_max) > Number(this.animalData[1].weight_max);
    },
    biggerAnimal() {
      return Number(this.animalData[0].length_max) > Number(this.animalData[1].length_max);
    },
  },
  data() {
    return {
      animalData: null,
      loadingButton: false,
    };
  },
  methods: {
    showAnimal() {
      this.loadingButton = true;
      apiClient
        .get("/animals/rand/2")
        .then(({ data }) => {
          this.loadingButton = false;
          this.animalData = data;
          this.$emit("addToHistory", data[0].name);
          this.$emit("addToHistory", data[1].name);
        })
        .catch((err) => console.warm(err));
    },
  },
};
</script>
