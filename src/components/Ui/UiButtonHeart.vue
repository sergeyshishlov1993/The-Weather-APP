<template>
  <button>
    <img
      src="https://cdn-icons-png.flaticon.com/128/2370/2370434.png"
      alt="like"
    />
  </button>
</template>

<style lang="scss" scoped>
button {
  margin-left: 45px;
}
img {
  height: 30px;
  &::after {
    content: "like";
  }
}
</style>
