<template>
  <TheHeader />
  <div class="container">
    <ui-card
      class="ml-2 mt-2"
      v-for="citi in dataBaseStor.data"
      :key="citi.name"
      :name="citi.name"
      :air-temperature="citi.airTemperature"
      :icons="citi.icon"
      :text="citi.text"
      :country="citi.country"
    ></ui-card>
  </div>
</template>

<script setup>
import { useDataBase } from "@/stores/dataBD";
import TheHeader from "@/components/TheHeader.vue";
import UiCard from "@/components/Ui/UiCard.vue";

const dataBaseStor = useDataBase();
</script>

<style lang="scss" scoped>
.container {
  padding: 50px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  row-gap: 50px;
}
</style>
@/stores/dataBD
