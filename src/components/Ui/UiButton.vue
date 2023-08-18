<template>
  <button>
    <slot />
  </button>
</template>

<style lang="scss" scoped>
button {
  width: 145px;
  height: 54px;
  background: #e5464f;
  border-radius: 6px;

  font-weight: 500;
  font-size: 20px;
  line-height: 1;
  color: #fff;

  transition: background-color 0.2s ease-in;
  &:hover {
    background: #f5313b;
  }
}
</style>
