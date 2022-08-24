<template>
  <h2>
    <IconButton icon="fa-solid fa-shopping-cart" title="View Cart">Cart</IconButton>
  </h2>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import IconButton from "./Buttons/IconButton.vue";

export default defineComponent({ components: { IconButton } });
</script>
