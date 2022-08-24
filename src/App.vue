<template>
  <h2>Hello World {{ value }} {{ cart.cartAmount }}</h2>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      value: 12,
    };
  },
  computed: {
    ...mapState(["cart"]),
  },
};
</script>
