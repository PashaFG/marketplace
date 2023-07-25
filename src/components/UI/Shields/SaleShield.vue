<template>
  <div class="shield__container">
    <span class="shield__text">
      <slot></slot>
    </span>
  </div>
</template>
<script>
export default {
  name: 'sale-shield'
}
</script>
<style scoped lang="scss">
.shield__container {
  display: flex;
  width: auto;
  height: 32px;

  padding: 8px 10px;
  background-color: $color-brand;
  border: 1px solid $color-brand;
  border-radius: 4px;

  .shield__text {
    font-family: 'PT Sans', sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 14px;

    color: $color-white;
  }
}
</style>