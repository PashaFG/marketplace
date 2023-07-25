<template>
  <button>
    <slot></slot>
  </button>
</template>
<script>
export default {
  name: 'navbar-button'
}
</script>
<style scoped lang="scss">
button {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  font-family: 'Inter', sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  height: 48px;
  padding: 8px 24px;
  background: none;
  border: none;
  cursor: pointer;

  color: $color-black;
  background-color: $color-white;
  border: 1px solid $color-brand;
  border-radius: 8px;

  opacity: 0.8;

  &:hover {
    color: $color-white;
    background-color: $color-brand;
    opacity: 1;
  }
}
</style>