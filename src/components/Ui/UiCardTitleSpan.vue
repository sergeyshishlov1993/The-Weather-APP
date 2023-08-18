<template>
  <span>
    <slot />
  </span>
</template>

<style lang="scss" scoped>
span {
  display: block;
  align-self: flex-start;

  padding: 3px 5px;
  background: #e5464f;
  border-radius: 6px;

  color: #fff;
  font-weight: 500;
  font-size: 12px;
  line-height: 1;
}
</style>
