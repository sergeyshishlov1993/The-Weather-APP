<template>
  <div class="card">
    <div class="card__wrapper">
      <div style="display: flex">
        <ui-card-title>{{ props.name }}</ui-card-title>
        <ui-card-title-span>{{ props.country }}</ui-card-title-span>
      </div>
      <ui-button-heart></ui-button-heart>
    </div>

    <div class="card-weather">
      <ui-card-value>{{ props.airTemperature }} </ui-card-value>
      <img class="card-img" :src="props.icons" alt="Weather" />
    </div>

    <ui-card-description>{{ props.text }}</ui-card-description>
  </div>
</template>

<script setup>
import UiCardTitleSpan from "./UiCardTitleSpan.vue";
import UiCardTitle from "./UiCardTitle.vue";
import UiCardDescription from "./UiCardDescription.vue";
import UiCardValue from "./UiCardValue.vue";
import UiButtonHeart from "./UiButtonHeart.vue";

const props = defineProps({
  name: String,
  airTemperature: Number,
  icons: String,
  text: String,
  country: String,
});
</script>

<style lang="scss" scoped>
.card {
  position: relative;
  display: flex;
  flex-direction: column;
  row-gap: 20px;

  padding: 30px;
  width: 360px;
  background-color: #fff;
  border-radius: 6px;
  box-shadow: 0px 5px 20px rgba(27, 108, 114, 0.25);
  &::before {
    content: "";

    position: absolute;
    left: 10px;
    bottom: -10px;
    z-index: -1;

    width: calc(100% - 20px);
    height: 100%;

    background: #ffffff;
    box-shadow: 0px 5px 20px rgba(27, 108, 114, 0.25);
    border-radius: 6px;
  }
  &__wrapper {
    display: flex;
    justify-content: space-between;
  }
  &-weather {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &-img {
    height: 100px;
  }
}
</style>
@/stores/dataBD
