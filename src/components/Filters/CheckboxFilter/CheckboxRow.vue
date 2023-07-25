<template>
  <div class="attributes__content"
    @click="this.check">
    <div class="checkbox__container">
      <input type='checkbox'
        :checked="this.isChecked" />
    </div>
    <span class="attributes__content__name">{{ this.name }}</span>
    <div class="divider"></div>
    <span class="attributes__content__count">{{ this.count }}</span>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isChecked: false
    }
  },
  props: {
    name: {
      type: String,
      required: true
    },
    count: {
      type: Number,
      required: true
    }
  },
  methods: {
    check() {
      this.isChecked = !this.isChecked
    }
  },
}
</script>

<style scoped lang="scss">
.attributes__content {
  display: flex;
  align-items: center;

  padding-right: 16px;

  cursor: pointer;

  .checkbox__container {
    height: 20px;
    width: 20px;
    border: 1px solid $color-border;

    border-radius: 4px;

    input {
      height: 100%;
      width: 100%;
      opacity: 0;
      background: none;

      cursor: pointer;

      &:checked {
        opacity: 1;
        animation: checkbox-check 125ms cubic-bezier(.4, .0, .23, 1);

        @keyframes checkbox-check {
          0% {
            width: 0;
            height: 0;
            opacity: 0
          }

          100% {
            width: 20px;
            height: 20px;
            opacity: 1;
          }
        }
      }
    }
  }


  .attributes__content__name {
    font-family: 'PT Sans', sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px;

    color: $color-font-main;

    margin-left: 12px;
  }

  .attributes__content__count {
    font-family: 'PT Sans', sans-serif;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 14px;

    color: $color-font-second;

  }

  &:hover {
    .checkbox__container {
      border-color: $color-brand;
    }

    .attributes__content__name {
      color: $color-brand;
    }
  }
}
</style>