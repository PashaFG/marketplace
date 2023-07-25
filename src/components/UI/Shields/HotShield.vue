<template>
  <div class="shield__container">
    <span class="shield__text">Хит продаж</span>
    <fire-icon />
  </div>
</template>
<script>
export default {
  name: 'hot-shield'
}
</script>
<style scoped lang="scss">
.shield__container {
  display: flex;
  align-items: center;
  gap: 4px;
  width: auto;
  height: 32px;

  padding: 0 8px;
  background-color: $color-white;
  border: 1px solid $color-scroll;
  border-radius: 4px;

  .shield__text {
    font-family: 'PT Sans', sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px;

    color: $color-font-main;
  }
}
</style>