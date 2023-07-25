<template>
  <div class="card">
    <div class="img_container">
      <div class="img">
        <product-icon />
      </div>
      <sale-shield v-if="this.product.available && this.product.sale"
        class="sale__shield">
        {{ `${this.product.sale} %` }}
      </sale-shield>
      <hot-shield v-if="this.product.available && this.product.hot"
        class="hot__shield">
      </hot-shield>
    </div>
    <div class="text__block">
      <span class="brand">{{ this.product.brand }}</span>
      <div class="dicription__container">
        <span class="dicription__text">{{ this.product.dicription }}</span>
      </div>
    </div>
    <div class="price__container"
      v-if="this.product.available && this.product.sale">
      <span class="price__current">{{ `${this.salePrice.toLocaleString('ru')} ₽` }}</span>
      <span class="price__old"><s>{{ `${this.product.price.toLocaleString('ru')} ₽` }}</s></span>
    </div>
    <div class="price__container"
      v-else-if="this.product.available">
      <span class="price__current">{{ `${this.product.price.toLocaleString('ru')} ₽` }}</span>
    </div>
    <div class="price__container"
      v-else>
      <span></span>
    </div>
    <card-button v-if="this.product.available">Купить</card-button>
    <card-button v-else
      class="unavailable">Сообщить о поступлении</card-button>
  </div>
</template>
<script>
export default {
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  computed: {
    salePrice() {
      if (this.product.sale) {
        return Math.floor(this.product.price * ((100 - this.product.sale) / 100))
      } else {
        return this.product.price
      }
    }
  }
}
</script>
<style scoped lang="scss">
.card {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  background-color: white;

  .img_container {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    height: 200px;

    background-color: $color-card-background;

    .img {
      scale: 1;
    }

    .sale__shield {
      position: absolute;
      left: 12px;
      bottom: 12px;
    }

    .hot__shield {
      position: absolute;
      left: 12px;
      top: 12px;
    }
  }

  .text__block {

    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 8px;

    .brand {
      text-align: start;

      font-family: 'PT Sans', sans-serif;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 16px;

      color: $color-font-second;
    }

    .dicription__container {
      text-align: start;

      width: 100%;
      height: 2rem;

      font-family: 'PT Sans', sans-serif;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 16px;

      color: $color-font-main;

      .dicription__text {
        align-self: stretch;

        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }
    }
  }

  .price__container {
    display: flex;
    align-items: center;

    width: 100%;
    height: 14px;

    .price__current {
      font-family: 'PT Sans', sans-serif;
      font-size: 16px;
      font-style: normal;
      font-weight: 700;
      line-height: 14px;

      color: $color-font-main;
    }

    .price__old {
      font-family: 'PT Sans', sans-serif;
      font-size: 12px;
      font-style: normal;
      font-weight: 400;
      line-height: 14px;

      margin-left: 8px;

      color: $color-font-second;
    }
  }

  &:hover {
    .img_container {
      .img {
        scale: 1.3;
      }
    }

    .text__block {
      .dicription__container {
        color: $color-font-hover
      }
    }
  }
}
</style>