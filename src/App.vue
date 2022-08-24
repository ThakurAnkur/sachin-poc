<template>
  <div class="wrapper">
    <h2>Hello World {{ value }} {{ cart.cartAmount }}</h2>
  </div>
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

<style lang="scss" scoped>
@import "@scss/partials/_variables.scss";
.wrapper {
  max-width: $lg;
  width: 100%;
  margin: 0 auto;
}
</style>
