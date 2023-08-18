<template>
  <input
    :type="props.type"
    :placeholder="props.placeholder"
    :value="props.value"
  />
</template>

<script setup>
const props = defineProps({
  type: String,
  placeholder: String,
  value: String,
});
</script>

<style lang="scss" scoped>
input {
  flex-grow: 1;
  padding: 15px;

  font-weight: 300;
  font-size: 20px;
  line-height: 1;
  color: #000000;
}
</style>
