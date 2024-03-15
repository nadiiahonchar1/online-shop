<template>
  <div class="catalog-cart-item">
    <div class="catalog-cart-item__wrap">
      <img
        class="catalog-cart-item__image"
        :src="require('../assets/images/' + cart_item_data.image)"
        alt="img"
      />
    </div>
    <div class="catalog-cart-item__info">
      <p>{{ cart_item_data.name }}</p>
      <p>{{ cart_item_data.price }}</p>
      <p>{{ cart_item_data.article }}</p>
    </div>
    <div class="catalog-cart-item__quantity">
      <p>Qty:</p>
      <p>{{ cart_item_data.quantity }}</p>
    </div>
    <button @click="deleteFromCart">Delete</button>
  </div>
</template>

<script>
export default {
  name: "CatalogCartItem",
  emits: ["deleteFromCart"],
  props: {
    cart_item_data: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    deleteFromCart() {
      this.$emit("deleteFromCart");
    },
  },
};
</script>

<style lang="scss">
.catalog-cart-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: $padding * 2;
  margin-bottom: $margin * 2;
  box-shadow: 0 0 8px 0 $color-shadow;
  &__wrap {
    width: 100px;
    overflow: hidden;
  }
  &__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
}
</style>
