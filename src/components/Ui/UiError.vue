<template>
  <div>
    <h2>
      <slot />
    </h2>
  </div>
</template>

<style lang="scss" scoped>
div {
  min-width: 460px;
}
h2 {
  margin-top: 20px;
  font-family: "Rubik";
  font-weight: 700;
  font-size: 20px;
  line-height: 1.18;
  text-align: center;
  color: darkred;
}
</style>
