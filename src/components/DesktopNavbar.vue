<template lang="">
  <nav>
    <div class="title">
      <div class="label">
        <main-label-icon />
        <span>Логотип</span>
      </div>
      <navbar-button>Каталог</navbar-button>
    </div>
    <navbar-search>Search</navbar-search>
    <div class="links">
      <span>Информация о компании</span>
      <span>Контакты</span>
      <span>Полезные ссылки</span>
    </div>
  </nav>
</template>
<script>
export default {
  name: "DesktopNavbar"
}
</script>
<style scoped lang="scss">
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 24px;
  width: 100%;
  height: $nav-width;
  margin: auto;
  background-color: $color-white;

  .title {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .label {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 145px;
      height: 48px;
      padding: 12px 24px;
      gap: 8px;

      span {
        font-family: 'Inter', sans-serif;
        font-weight: 400;
        font-size: 16px;
        line-height: 19.36px;
        text-align: center;
        color: $color-black;
        cursor: default;
      }
    }
  }

  .links {
    display: flex;
    justify-content: space-between;

    gap: 20px;

    span {
      display: flex;
      justify-content: center;
      align-items: center;
      font-family: 'Inter', sans-serif;
      font-weight: 400;
      font-size: 14px;
      line-height: 17px;
      width: max-content;
      height: 48px;
      cursor: pointer;
      color: $color-font-main;

      &:hover {
        color: $color-brand;
      }
    }
  }
}
</style>