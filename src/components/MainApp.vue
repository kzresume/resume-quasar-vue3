<template>
  <q-page class="bg-light-green-2">
    <div class="row">
      <AnimalInfo
        v-if="animalArray"
        class="col-12 col-md-6"
        :animal="animalData[0]"
        :olderAnimal="!olderAnimal"
        :heavierAnimal="!heavierAnimal"
      />
      <AnimalInfo
        v-if="animalArray"
        class="col-12 col-md-6"
        :animal="animalData[1]"
        :olderAnimal="olderAnimal"
        :heavierAnimal="heavierAnimal"
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
      return this.animalData[0].lifespan > this.animalData[1].lifespan;
    },
    heavierAnimal() {
      return this.animalData[0].weight_max < this.animalData[1].weight_max;
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
