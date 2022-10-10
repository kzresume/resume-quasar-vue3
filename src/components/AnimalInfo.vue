<template>
  <div class="q-pt-md text-center">
    <p class="text-h5 q-pt-xl text-center">
      {{ animal.name }}
      <q-badge align="top">{{ animal.animal_type }}</q-badge>
    </p>
    <p class="text-weight-bold text-italic">Latino {{ animal.latin_name }}</p>
    <p class="text-subtitle1 q-mb-xs">Habitat: {{ animal.habitat }}</p>
    <p class="text-subtitle1 q-mb-xs">Diet: {{ animal.diet }}</p>
    <p class="text-subtitle1 q-mb-xs">Geo range: {{ animal.geo_range }}</p>
    <p
      class="text-subtitle1 q-mb-xs"
      :class="heavierAnimal ? 'red' : 'green'"
    >
      Max weight: {{ lbsTokg(animal.weight_max) }} (kg.)
    </p>
    <p
      class="text-subtitle1 q-mb-xs"
      :class="olderAnimal ? 'red' : 'green'"
    >
      Long life: {{ animal.lifespan }}
    </p>
    <q-img
      class="q-mb-xl"
      :src="animal.image_link"
      spinner-color="positive"
      spinner-size="40x"
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
    olderAnimal:Boolean,
    heavierAnimal:Boolean,
  },
  methods: {
    lbsTokg(value) {
      return Math.round(Number(value) * 453) / 1000;
    },
  },
};
</script>
