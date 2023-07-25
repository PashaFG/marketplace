<template>
  <div class="desktop__root">
    <DesktopNavbar />
    <div class="products">
      <FilterList :products="this.products" />
      <ProductsList :products="this.products" />
    </div>
  </div>
</template>

<script>
import DesktopNavbar from '@/components/DesktopNavbar.vue';
import ProductsList from '@/components/ProductsList.vue';
import FilterList from '@/components/FilterList.vue';

export default {
  props: {
    products: {
      type: Array,
      required: true
    }
  },
  components: {
    DesktopNavbar,
    ProductsList,
    FilterList
  }
}
</script>

<style scoped lang="scss">
.desktop__root {
  max-width: 1720px;
  height: 100vh;
  margin: 0 100px 0 100px;

  .products {
    display: flex;
    justify-content: space-between;
    height: calc(100vh - $nav-width - $content-margin-top - $content-margin-bottom);
    margin-top: $content-margin-top;
  }
}
</style>
