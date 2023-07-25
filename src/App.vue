<template>
  <MobileView v-if="this.isMobile"
    :products="this.products" />
  <DesktopView v-else
    :products="this.products" />
</template>

<script>
import DesktopView from '@/views/DesctopView.vue'
import MobileView from '@/views/MobileView.vue'


export default {
  components: {
    DesktopView,
    MobileView
  },
  data() {
    return {
      isMobile: true,
      products: [
        { id: 1, brand: 'Бренд1', dicription: 'Полное название товара в несколько строк для вида с обрывом в конце строки с троеточием. Дополнительное предложение, цель которого показать пример обрезки текста.', price: 8000, available: true, sale: 0, hot: false, img: 'default' },
        { id: 2, brand: 'Бренд2', dicription: 'Полное название товара в несколько строк для вида с обрывом в конце строки с троеточием. Дополнительное предложение, цель которого показать пример обрезки текста.', price: 8000, available: false, sale: 25, hot: false, img: 'default' },
        { id: 3, brand: 'Бренд3', dicription: 'Полное название товара в несколько строк для вида с обрывом в конце строки с троеточием. Дополнительное предложение, цель которого показать пример обрезки текста.', price: 8000, available: false, sale: 25, hot: true, img: 'default' },
        { id: 4, brand: 'Бренд4', dicription: 'Полное название товара в несколько строк для вида с обрывом в конце строки с троеточием. Дополнительное предложение, цель которого показать пример обрезки текста.', price: 8000, available: true, sale: 25, hot: true, img: 'default' },
        { id: 5, brand: 'Бренд5', dicription: 'Полное название товара в несколько строк для вида с обрывом в конце строки с троеточием. Дополнительное предложение, цель которого показать пример обрезки текста.', price: 8000, available: true, sale: 25, hot: true, img: 'default' },
        { id: 6, brand: 'Бренд1', dicription: 'Полное название товара в несколько строк для вида с обрывом в конце строки с троеточием. Дополнительное предложение, цель которого показать пример обрезки текста.', price: 8000, available: true, sale: 0, hot: false, img: 'default' },
        { id: 7, brand: 'Бренд2', dicription: 'Полное название товара в несколько строк для вида с обрывом в конце строки с троеточием. Дополнительное предложение, цель которого показать пример обрезки текста.', price: 8000, available: false, sale: 25, hot: false, img: 'default' },
        { id: 8, brand: 'Бренд3', dicription: 'Полное название товара в несколько строк для вида с обрывом в конце строки с троеточием. Дополнительное предложение, цель которого показать пример обрезки текста.', price: 8000, available: false, sale: 25, hot: true, img: 'default' },
        { id: 9, brand: 'Бренд4', dicription: 'Полное название товара в несколько строк для вида с обрывом в конце строки с троеточием. Дополнительное предложение, цель которого показать пример обрезки текста.', price: 8000, available: true, sale: 25, hot: true, img: 'default' },
        { id: 10, brand: 'Бренд5', dicription: 'Полное название товара в несколько строк для вида с обрывом в конце строки с троеточием. Дополнительное предложение, цель которого показать пример обрезки текста.', price: 8000, available: true, sale: 25, hot: true, img: 'default' },
        { id: 11, brand: 'Бренд1', dicription: 'Полное название товара в несколько строк для вида с обрывом в конце строки с троеточием. Дополнительное предложение, цель которого показать пример обрезки текста.', price: 8000, available: true, sale: 0, hot: false, img: 'default' },
        { id: 12, brand: 'Бренд2', dicription: 'Полное название товара в несколько строк для вида с обрывом в конце строки с троеточием. Дополнительное предложение, цель которого показать пример обрезки текста.', price: 8000, available: false, sale: 25, hot: false, img: 'default' },
        { id: 13, brand: 'Бренд3', dicription: 'Полное название товара в несколько строк для вида с обрывом в конце строки с троеточием. Дополнительное предложение, цель которого показать пример обрезки текста.', price: 8000, available: false, sale: 25, hot: true, img: 'default' },
        { id: 14, brand: 'Бренд4', dicription: 'Полное название товара в несколько строк для вида с обрывом в конце строки с троеточием. Дополнительное предложение, цель которого показать пример обрезки текста.', price: 8000, available: true, sale: 25, hot: true, img: 'default' },
        { id: 15, brand: 'Бренд5', dicription: 'Полное название товара в несколько строк для вида с обрывом в конце строки с троеточием. Дополнительное предложение, цель которого показать пример обрезки текста.', price: 8000, available: true, sale: 25, hot: true, img: 'default' },
        { id: 16, brand: 'Бренд1', dicription: 'Полное название товара в несколько строк для вида с обрывом в конце строки с троеточием. Дополнительное предложение, цель которого показать пример обрезки текста.', price: 8000, available: true, sale: 0, hot: false, img: 'default' },
        { id: 17, brand: 'Бренд2', dicription: 'Полное название товара в несколько строк для вида с обрывом в конце строки с троеточием. Дополнительное предложение, цель которого показать пример обрезки текста.', price: 8000, available: false, sale: 25, hot: false, img: 'default' },
        { id: 18, brand: 'Бренд3', dicription: 'Полное название товара в несколько строк для вида с обрывом в конце строки с троеточием. Дополнительное предложение, цель которого показать пример обрезки текста.', price: 8000, available: false, sale: 25, hot: true, img: 'default' },
        { id: 19, brand: 'Бренд4', dicription: 'Полное название товара в несколько строк для вида с обрывом в конце строки с троеточием. Дополнительное предложение, цель которого показать пример обрезки текста.', price: 8000, available: true, sale: 25, hot: true, img: 'default' },
        { id: 20, brand: 'Бренд5', dicription: 'Полное название товара в несколько строк для вида с обрывом в конце строки с троеточием. Дополнительное предложение, цель которого показать пример обрезки текста.', price: 8000, available: true, sale: 25, hot: true, img: 'default' },
      ]
    }
  },
  mounted() {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      this.isMobile = true
    } else {
      this.isMobile = false
    }
  }
}
</script>

<style lang="scss">
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

#app {
  font-family: PT Sans, 'Inter', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: $color-white;
}

.divider {
  flex-grow: 1;
}
</style>
