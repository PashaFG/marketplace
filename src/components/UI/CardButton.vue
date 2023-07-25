<template>
  <button>
    <slot></slot>
  </button>
</template>
<script>
export default {
  name: 'card-button'
}
</script>
<style scoped lang="scss">
button {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  font-family: 'PT Sans', sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 14px;

  height: 38px;
  padding: 12px 16px;
  background: none;
  border: none;
  cursor: pointer;

  color: $color-brand;
  background-color: $color-white;
  border: 1px solid $color-brand;
  border-radius: 8px;

  &:hover {
    color: $color-white;
    background-color: $color-brand;
  }
}

.unavailable {
  width: 100%;
  color: $color-font-second;
  border-color: $color-font-second;

  &:hover {
    color: $color-font-main;
    background-color: $color-font-bg;
    border-color: $color-font-main;
    opacity: 0.9;
  }
}
</style>