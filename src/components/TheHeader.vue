<template>
  <header>
    <ui-title>Прогноз погоды</ui-title>
    <ui-form class="mt-2" @submit.prevent="getWeatherForecast">
      <ui-input
        :type="'text'"
        :placeholder="'Введите название города'"
        :value="inputValue"
        @input="getInputValue"
      ></ui-input>
      <ui-button>Показать</ui-button>
    </ui-form>
    <div v-if="isVisibleError">
      <ui-error v-for="error in errorArray" :key="error">
        {{ error }}
      </ui-error>
    </div>
  </header>
</template>

<script setup>
import { ref, computed } from "vue";
import { useDataBase } from "@/stores/dataBD";
import UiTitle from "./Ui/UiTitle.vue";
import UiForm from "./Ui/UiForm.vue";
import UiInput from "./Ui/UiInput.vue";
import UiButton from "./Ui/UiButton.vue";
import UiError from "./Ui/UiError.vue";

const axios = require("axios");
const dataBaseStor = useDataBase();

const errorArray = computed(() => {
  return [...new Set(dataBaseStor.errorData)];
});

// <------------------------------------------------------->

let inputValue = ref("");
let isVisibleError = ref();

// <---------------------------------------------------------->

function getInputValue(event) {
  return (inputValue.value = event.target.value);
}

function errorMesage(errorMesage) {
  if (errorMesage && dataBaseStor.data.length === 0) {
    dataBaseStor.errorData.push("введи свой город");
    return (isVisibleError.value = true);
  } else if (errorMesage && inputValue.value.length === 0) {
    dataBaseStor.errorData.push("поле для ввода не должно быть пустым");
    return (isVisibleError.value = true);
  }
}

function clearError() {
  dataBaseStor.errorData.length = 0;
  isVisibleError.value = false;
}

async function getWeatherForecast() {
  const apiKey = "e2a3bc4748204785a1c72427231308";
  const qwery = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${inputValue.value}`;

  try {
    const response = await axios.get(qwery);
    const { location, current } = response.data;
    dataBaseStor.data.push({
      name: location.name,
      country: location.country,
      airTemperature: current.temp_c,
      text: current.condition.text,
      icon: current.condition.icon,
    });
    clearError();
  } catch (error) {
    errorMesage(error);
  }

  inputValue.value = "";
}
</script>

<style lang="scss" scoped>
header {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 40px 15px 50px;
  background: linear-gradient(92.7deg, #4cb8c4 0%, #3cd3ad 100%), #232323;
}
</style>
@/stores/dataBD
