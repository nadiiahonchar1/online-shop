<template>
  <div class="catalog-item">
    <div class="catalog-item__image-wrap">
      <img
        class="catalog-item__image"
        :src="require('../../assets/images/' + product_data.image)"
        alt="img"
      />
    </div>
    <p class="catalog-item__name">{{ product_data.name }}</p>
    <p class="catalog-item__price">Price: {{ product_data.price }} UAH</p>
    <button class="catalog-item__btn btn" @click="addToCart">
      Add to cart
    </button>
  </div>
</template>

<script>
export default {
  name: "CatalogItem",
  emits: ["addToCart"],
  props: {
    product_data: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    addToCart() {
      this.$emit("addToCart", this.product_data);
    },
  },
};
</script>

<style lang="scss">
.catalog-item {
  flex-basis: 25%;
  box-shadow: 0 0 8px 0 $color-shadow;
  padding: $padding * 2;
  margin: 0 auto $margin * 2;
  min-height: 150px;
  @media (max-width: 470px) {
    padding: $padding;
  }
  &__image-wrap {
    width: 100px;
    overflow: hidden;
    margin: 0 auto;
  }
  &__image {
    object-fit: cover;
    object-position: center;
    width: 100%;
    height: 100%;
  }
}
</style>
