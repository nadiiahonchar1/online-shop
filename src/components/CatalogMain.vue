<template>
  <div class="catalog-main">
    In wrapper
    <catalog-item />
    <catalog-item />
    <catalog-item />
  </div>
</template>

<script>
import CatalogItem from "./CatalogItem.vue";
export default {
  components: { CatalogItem },
  name: "CatalogMain",
};
</script>

<style lang="scss"></style>
