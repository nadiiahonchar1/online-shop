<template>
  <div class="catalog-wrapper">
    In wrapper
    <catalog-main />
    <catalog-cart />
  </div>
</template>

<script>
import CatalogCart from "./CatalogCart.vue";
import CatalogMain from "./CatalogMain.vue";

export default {
  name: "CatalogWrapper",
  components: { CatalogMain, CatalogCart },
};
</script>

<style lang="scss">
.catalog-wrapper {
  width: 900px;
  margin: 0 auto;
}
</style>
