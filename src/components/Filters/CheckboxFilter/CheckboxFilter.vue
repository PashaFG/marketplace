<template>
  <div class="checkbox__filter">
    <div class="title">
      <span class="title__text">{{ this.title }}</span>
      <div v-if="this.hasSearch"
        class="divider"></div>
      <span v-if="this.hasSearch"
        class="title__clear">Очистить</span>
    </div>
    <div v-if="this.hasSearch">
      <filter-search />
    </div>
    <div class="attributes">
      <CheckboxRow v-for="attr in this.attributes"
        :key="attr.name"
        :name="attr.name"
        :count="attr.count" />
    </div>
  </div>
</template>
<script>
import CheckboxRow from './CheckboxRow.vue'
export default {
  components: {
    CheckboxRow
  },
  props: {
    title: {
      type: String,
      required: true
    },
    hasSearch: {
      type: Boolean,
      default: false
    },
    attributes: {
      type: Object,
      required: true
    },
  }
}
</script>
<style scoped lang="scss">
.checkbox__filter {
  display: flex;
  flex-direction: column;
  gap: 16px;

  .title {
    display: flex;
    justify-content: center;
    gap: auto;

    .title__text {
      text-align: center;
      font-family: 'PT Sans', sans-serif;
      font-size: 16px;
      font-style: normal;
      font-weight: 700;
      line-height: 20px;
      color: $color-font-main;
      cursor: default;
    }

    .title__clear {
      align-self: flex-end;
      text-align: end;
      font-family: 'PT Sans', sans-serif;
      font-size: 12px;
      font-style: normal;
      font-weight: 400;
      line-height: 12px;
      text-decoration-line: underline;

      color: $color-font-second;

    }
  }

  .attributes {
    display: flex;
    flex-direction: column;
    gap: 12px;

  }
}
</style>