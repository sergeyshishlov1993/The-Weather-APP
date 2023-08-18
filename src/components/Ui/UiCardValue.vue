<template>
  <p>
    <slot />
    <ui-card-value-sup>°c</ui-card-value-sup>
  </p>
</template>

<script setup>
import UiCardValueSup from "./UiCardValueSup.vue";
</script>

<style lang="scss" scoped>
p {
  font-size: 92px;
  line-height: 1;
  color: #000000;
}
</style>
