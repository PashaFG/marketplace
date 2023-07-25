<template>
  <div class="input__container">
    <span>от</span>
    <input type="text"
      :value="this.value"
      @change="$event => this.setValue($event)">
  </div>
</template>
<script>
export default {
  name: 'filter-input',
  data() {
    return {
      value: 5500
    }
  },
  methods: {
    setValue(event) {
      this.value = Number(event.target.value)
    }
  }
}
</script>
<style scoped lang="scss">
.input__container {
  display: flex;
  align-items: center;
  width: 100%;
  height: 36px;
  border: 1px solid $color-border;
  border-radius: 4px;

  padding: 8px 10px;

  span {
    font-family: 'PT Sans', sans-serif;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 14px;

    color: $color-font-second;
    cursor: default;
  }

  input {
    font-family: 'PT Sans', sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px;
    height: 100%;
    width: 100%;
    color: $color-font-main;
    background-color: none;
    border: none;

    margin-left: 6px;

    &:focus {
      outline: none;
    }

    &:placeholder-shown {
      color: $color-font-second;
    }
  }
}
</style>