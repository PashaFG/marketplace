<template lang="">
  <div >
    <span class="category__name">{{ this.categoryName }}</span>
    <div class="category__list">
      <ProductCard class="list__card"
        v-for="product in this.productsList"
        :key="product"
        :product="product">
      </ProductCard>
    </div>
  </div>
</template>
<script>
import ProductCard from '@/components/ProductCard.vue';

export default {
  components: {
    ProductCard
  },
  props: {
    categoryName: {
      type: String,
      default: 'Без категории'
    },
    productsList: {
      required: true
    }
  }
}
</script>
<style scoped lang="scss">
.category__name {
  display: flex;
  text-align: flex-start;

  font-family: 'PT Sans', sans-serif;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px;

  width: 100%;
  margin: 12px 0;
  padding: 0 24px;

  color: $color-font-main;
}

.category__list {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  row-gap: 16px;
  height: 100%;
  width: 100%;
  padding: 0 16px;

  .list__card {
    width: calc((100% - 12px)/2);
  }
}
</style>