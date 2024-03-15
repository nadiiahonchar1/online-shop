import CatalogCart from "@/components/cart/CatalogCart.vue";
import CatalogMain from "@/components/catalog/CatalogMain.vue";
import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "catalog",
      component: CatalogMain,
    },
    {
      path: "/cart",
      name: "cart",
      component: CatalogCart,
      props: true,
    },
  ],
});

export default router;

createApp({}).use(router);