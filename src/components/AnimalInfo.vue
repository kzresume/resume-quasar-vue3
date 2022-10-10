<template>
  <div class="q-pa-md text-center">
    <p class="text-h4 q-pt-xl text-center">
      {{ animal.name }}
      <q-badge align="top">{{ animal.animal_type }}</q-badge>
    </p>

    <p class="text-weight-bold">Latino {{ animal.latin_name }}</p>
    <p class="text-subtitle1">Habitat: {{ animal.habitat }}</p>
    <p class="text-subtitle1">Diet: {{ animal.diet }}</p>
    <p class="text-subtitle1">Geo range:{{ animal.geo_range }}</p>
    <p class="text-h6">Max weight:</p>
    <p class="text-h6" :class="compareAnimal.weight ? 'red' : 'green'">
      {{ animal.weight_max }} (lbs.)
    </p>
    <p class="text-h6" :class="compareAnimal.weight ? 'red' : 'green'">
      {{ lbsTokg(animal.weight_max) }} (kg.)
    </p>
    <p class="text-h6" :class="compareAnimal.age ? 'red' : 'green'">
      Long life: {{ animal.lifespan }}
    </p>
    <q-img
      class="q-mb-xl"
      :src="animal.image_link"
      spinner-color="primary"
      spinner-size="46px"
      style="max-width: 600px; max-height: 600px"
    />
  </div>
</template>

<style>
.red {
  color: red;
}
.green {
  color: green;
}
</style>

<script>
export default {
  name: "AnimalInfo",
  props: {
    animal: Object,
    compareAnimal:Object ,
  },
  methods: {
    lbsTokg(value) {
      return Math.round(Number(value) * 453) / 1000;
    },
  },
};
</script>
