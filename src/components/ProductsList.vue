<template>
  <div class="products__list">
    <ProductCard class="list__card"
      v-for="product in this.products"
      :key="product"
      :product="product">
    </ProductCard>
  </div>
</template>
<script>
import ProductCard from './ProductCard.vue';
export default {
  props: {
    products: {
      type: Object,
      required: true
    }
  },
  components: {
    ProductCard
  }
}
</script>
<style scoped lang="scss">
.products__list {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: $card-gap;

  width: 100%;
  height: fit-content;
  max-height: 100%;
  overflow-y: scroll;
  margin-left: 36px;

  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }

  .list__card {
    width: calc((100% - 3 * $card-gap)/4);
  }
}
</style>