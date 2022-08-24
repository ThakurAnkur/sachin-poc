<template>
  <div>
    <button @click="addToCart">Add to Cart</button>
    <button>Delete</button>
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
    ...mapActions({ addToCartAction: "cart/addItem" }),
    addToCart() {
      this.addToCartAction({ ...this.productDetail });
    },
  },
});
</script>
