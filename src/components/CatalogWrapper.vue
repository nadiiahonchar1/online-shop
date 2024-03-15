<template>
  <div class="catalog-wrapper">
    <catalog-main />
    <catalog-cart v-if="CART.length" :cart_data="CART" />
  </div>
</template>

<script>
import CatalogCart from "./CatalogCart.vue";
import CatalogMain from "./CatalogMain.vue";
import { mapGetters } from "vuex";

export default {
  name: "CatalogWrapper",
  components: { CatalogMain, CatalogCart },
  computed: {
    ...mapGetters(["CART"]),
  },
};
</script>

<style lang="scss">
.catalog-wrapper {
  width: 900px;
  margin: 0 auto;
}
</style>
