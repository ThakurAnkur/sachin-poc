<template>
  <div>
    <button @click="addToCart">Add to Cart</button>
    <button @click="removeProduct">Delete</button>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { mapActions } from "vuex";

export default defineComponent({
  props: {
    productDetail: {
      required: true,
      type: Object,
    },
  },
  name: "ProductActions",
  methods: {
    ...mapActions({
      addToCartAction: "cart/addItem",
      removeProductAction: "product/removeItem",
    }),
    addToCart() {
      this.addToCartAction({ ...this.productDetail });
    },
    removeProduct() {
      this.removeProductAction(this.productDetail);
    },
  },
});
</script>
<style lang="scss" scoped>
    button {
        font-size: 1rem;
        margin-right: 1rem;
    }
</style>
