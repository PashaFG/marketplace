<template>
  <div class="products__filter">
    <CategoryFilter :categories="this.categories" />
    <SliderFilter />
    <CheckboxFilter :hasSearch="true"
      :attributes="this.brands"
      :title="'Бренд'" />
    <CheckboxFilter :attributes="this.brands"
      :title="'Размер'" />
  </div>
</template>
<script>
import CategoryFilter from './Filters/CategoryFilter.vue'
import CheckboxFilter from './Filters/CheckboxFilter/CheckboxFilter.vue'
import SliderFilter from './Filters/SliderFilter.vue'

export default {
  props: {
    products: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      categories: [
        { name: 'Название категории 1', count: 3, childs: [{ name: 'Подкатегория 1', count: 3 }, { name: 'Подкатегория 2', count: 3 }, { name: 'Подкатегория 3', count: 3 }] },
        { name: 'Название категории 2', count: 3, childs: [{ name: 'Подкатегория 4', count: 3 }, { name: 'Подкатегория 5', count: 3 }] },
        { name: 'Название категории 3', count: 3, childs: [{ name: 'Подкатегория 6', count: 3 }] },
        { name: 'Название категории 4', count: 3, childs: [] },
      ]
    }
  },
  computed: {
    brands() {
      const acc = {}

      for (let product in this.products) {
        const curBrand = this.products[product].brand
        if (!acc[curBrand]) {
          acc[curBrand] = { name: curBrand, count: 1 }
        } else {
          acc[curBrand].count += 1
        }
      }

      return acc
    }
  },
  components: {
    CategoryFilter,
    CheckboxFilter,
    SliderFilter
  }
}
</script>
<style scoped lang="scss">
.products__filter {
  display: flex;
  flex-direction: column;
  gap: 28px;
  min-width: 280px;
}
</style>