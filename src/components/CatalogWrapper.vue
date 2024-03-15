<template>
  <div class="catalog-wrapper">
    <router-view></router-view>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "CatalogWrapper",
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
