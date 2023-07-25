<template lang="">
  <div 
    class="search" 
    :style="(this.state === 'input') 
      ? {'border-color': '#73AFF4'} 
      : {}"
  >
    <div class="icon">
      <search-icon/>
    </div>
    <input 
      type="text" 
      placeholder="Поиск по 100 000 товаров" 
      :value="this.searchValue" 
      @input='$event => this.inputSearch($event)'
    >
    <div class="search_buttons" v-show="this.searchValue.length">
      <button class="clear" @click="this.clearSearch">
        <search-clear/>
      </button>
      <button class="find">Найти</button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'navbar-search',
  data() {
    return {
      searchValue: '',
    }
  },
  methods: {
    inputSearch(event) {
      this.searchValue = event.target.value
    },
    clearSearch() {
      this.searchValue = ''
    },
  },
  computed: {
    state() {
      return (this.searchValue.length) ? "input" : "default"
    }
  }
}
</script>
<style scoped lang="scss">
.search {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  height: 48px;
  width: 100%;
  padding: 4px 4px 4px 16px;
  border: 1px solid $color-brand;
  border-radius: 10px;

  .icon {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 24px;
    color: $color-icon;
  }

  input {
    font-family: 'Inter', sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    height: 24px;
    width: 100%;
    background-color: none;
    border: none;
    color: $color-font-main;

    &:focus {
      outline: none;
    }

    &:placeholder-shown {
      color: $color-font-second;
    }
  }

  .search_buttons {
    display: flex;
    align-items: center;
    gap: 8px;

    button {
      font-family: 'PT Sans', sans-serif;
      font-size: 14px;
      font-style: normal;
      font-weight: 700;
      line-height: 14px;

      height: 24px;
      background: none;
      border: none;
      cursor: pointer;
    }

    .clear {
      color: $color-font-main;
      opacity: 0.3;

      &:hover {
        opacity: 1;
      }
    }

    .find {
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      height: 40px;
      padding: 12px 16px;

      color: $color-white;
      background-color: $color-brand;
      border: 1px solid $color-brand;
      border-radius: 8px;

      opacity: 0.8;

      &:hover {
        opacity: 1;
      }
    }
  }
}
</style>