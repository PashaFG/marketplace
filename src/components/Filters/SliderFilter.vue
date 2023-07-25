<template>
  <div class="slider__filter">
    <div class="title__row">
      <span>Цена</span>
    </div>
    <div class="input__row">
      <filter-input />
      <div class="divider"></div>
      <filter-input />
    </div>
  </div>
</template>
<script>
export default {

}
</script>
<style scoped lang="scss">
.slider__filter {
  display: flex;
  flex-direction: column;
  gap: 16px;

  .title__row {
    span {
      font-family: 'PT Sans', sans-serif;
      font-size: 16px;
      font-style: normal;
      font-weight: 700;
      line-height: 20px;
      color: $color-font-main;

      cursor: default;
    }
  }

  .input__row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 16px;

    .divider {
      height: 0px;
      min-width: 10px;
      border-bottom: 1px solid $color-border;
    }
  }
}
</style>