<template>
  <q-card class="q-pt-md q-ma-sm text-center">
    <p class="text-h6 text-center">
      {{ animal.name }}
      <q-badge align="top">{{ animal.animal_type }}</q-badge>
    </p>
    <q-separator inset class="q-mt-xs" />
    <p class="text-weight-bold text-italic">Latino {{ animal.latin_name }}</p>
    <p class="text-subtitle1 q-mb-xs q-px-xs">Habitat: {{ animal.habitat }}</p>
    <p class="text-subtitle1 q-mb-xs">Diet: {{ animal.diet }}</p>
    <p class="text-subtitle1 q-mb-xs" :class="heavierAnimal ? 'red' : 'green'">
      Max weight: {{ lbsTokg(animal.weight_max) }} kg.
    </p>
    <p class="text-subtitle1 q-mb-xs" :class="olderAnimal ? 'red' : 'green'">
      Long life: {{ animal.lifespan }} yr.
    </p>
    <p class="text-subtitle1 q-mb-xs" :class="biggerAnimal ? 'red' : 'green'">
      Size: {{ ftToMeter(animal.length_max) }} m.
    </p>
    <q-img
      class="q-mb-xl borderRadius"
      :src="animal.image_link"
      spinner-color="positive"
      spinner-size="40x"
      style="max-width: 400px; max-height: 450px"
      fit="scale-down"
    >
      <template v-slot:loading>
        <div class="text-green">
          <q-spinner-ios />
          <div class="q-mt-md">Loading...</div>
        </div>
      </template>
      <template v-slot:error>
        <div class="absolute-full flex flex-center bg-negative text-white">
          Cannot load image
        </div>
      </template>
      <div class="absolute-bottom-right text-subtitle2">
        {{ animal.geo_range }}
      </div>
    </q-img>
  </q-card>
</template>

<style>
.red {
  color: red;
}
.green {
  color: green;
}
.borderRadius{
  border-radius: 40px !important;
}
</style>

<script>
export default {
  name: "AnimalInfo",
  props: {
    animal: Object,
    olderAnimal: Boolean,
    heavierAnimal: Boolean,
    biggerAnimal: Boolean,
  },
  methods: {
    lbsTokg(value) {
      return Math.round(Number(value) * 453) / 1000;
    },
    ftToMeter(value) {
      return Math.round(Number(value) * 30.5) / 100;
    },
  },
};
</script>
