<template>
  <header>
    <nav>
      <a href="">Shopping Cart</a>
    </nav>
    <CartStatus></CartStatus>
  </header>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import CartStatus from "@components/CartStatus.vue";
export default defineComponent({
  components: {
    CartStatus,
  },
});
</script>
<style lang="scss" scoped>
@import "@scss/partials/_variables.scss";
@import "@scss/partials/_mixins.scss";
header {
  background: $teritaryColor;
  min-height: 3rem;
  color: $secondaryColor;
  padding: 0.4rem 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
