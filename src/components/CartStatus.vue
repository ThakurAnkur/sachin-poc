<template>
  <h2>
    <IconButton icon="fa-solid fa-shopping-cart" title="View Cart"
      >Cart
      <span v-if="getCartItemCount" class="count">{{
        getCartItemCount
      }}</span></IconButton
    >
  </h2>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { mapGetters } from "vuex";
import IconButton from "@components/buttons/IconButton.vue";

export default defineComponent({
  components: { IconButton },
  name: "CartStatus",
  computed: {
    ...mapGetters({ getCartItemCount: "cart/getCartItemCount" }),
  },
});
</script>
<style lang="scss" scoped>
@import "@scss/partials/variables";
.count {
  margin: 0 0.5em;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: $secondaryColor;
  width: 1.5em;
  height: 1.5em;
  background-color: $teritaryColor;
  border-radius: 100%;
}
</style>
