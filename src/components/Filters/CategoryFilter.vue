<template>
  <div class="category__filter">
    <ul>
      <li v-for="parentCategory in this.categories"
        :key="parentCategory.name"
        class="category">
        <div class="category__row"
          :class="(this.currentCategory === parentCategory.name) ? 'active' : ''"
          @click.stop="this.clickParent(parentCategory.name)">
          <span class="name">{{ parentCategory.name }}</span>
          <span class="count">{{ parentCategory.count }}</span>
        </div>
        <ul v-if="parentCategory?.childs.length && this.currentActiveParentCategory === parentCategory.name">
          <li v-for="childCategory in parentCategory.childs"
            class="subcategory"
            :class="(this.currentCategory === childCategory.name) ? 'active' : ''"
            @click.stop="this.clickChild(childCategory.name)">
            <span class="name">{{ childCategory.name }}</span>
            <span class="count">{{ childCategory.count }}</span>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      currentActiveParentCategory: '',
      currentCategory: ''
    }
  },
  props: {
    categories: {
      type: Array,
      required: true
    }
  },
  methods: {
    clickParent(categoryName) {
      this.currentActiveParentCategory = categoryName
      this.currentCategory = categoryName
    },
    clickChild(categoryName) {
      this.currentCategory = categoryName
    },
  }
}
</script>
<style scoped lang="scss">
ul,
ul li {
  list-style: none;
}

.category__filter {
  display: flex;
  flex-direction: column;

  .category {
    min-height: 30px;
    max-height: max-content;

    .category__row {
      display: flex;
      justify-content: space-between;
      align-items: center;

      height: 30px;
      padding: 0 16px 0 8px;

      cursor: pointer;

      &:hover {
        .name {
          color: $color-brand;
        }
      }
    }

    .subcategory {
      display: flex;
      justify-content: space-between;
      align-items: center;

      height: 30px;
      padding: 0 16px 0 32px;

      cursor: pointer;

      transition: 0.1s;

      &:hover {
        .name {
          color: $color-brand;
        }
      }
    }


    .active {
      background-color: $color-bg-hover;
    }
  }

  .name {
    font-family: 'PT Sans', sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px;
    color: $color-font-main;
  }

  .count {
    font-family: 'PT Sans', sans-serif;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 14px;
    color: $color-font-second;
  }
}
</style>