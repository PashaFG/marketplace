<template lang="">
  <div class="mobile__root">
    <MobileNavbar />
    <CategoryList :productsList="this.products" />
  </div>
</template>
<script>
import CategoryList from '@/components/CategoryList.vue';
import MobileNavbar from '@/components/MobileNavbar.vue';
export default {
  components: {
    CategoryList,
    MobileNavbar
  },
  props: {
    products: {
      type: Array,
      required: true
    }
  },

}
</script>
<style scoped  lang="scss"></style>