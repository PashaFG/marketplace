<template>
  <div class="input__container">
    <search-icon-mini>от</search-icon-mini>
    <input type="text"
      :value="this.value"
      @input='$event => this.inputSearch($event)'
      placeholder="Поиск">
  </div>
</template>
<script>
export default {
  name: 'filter-search',
  data() {
    return {
      value: ''
    }
  },
  methods: {
    inputSearch(event) {
      this.value = event.target.value
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

  padding: 10px 12px;

  svg {
    width: 16px;
    height: 16px;
    color: $color-font-second;
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

    margin-left: 8px;

    &:focus {
      outline: none;
    }

    &:placeholder-shown {
      color: $color-font-second;
    }
  }
}
</style>