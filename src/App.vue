<template>
  <div class="wrapper">
    <TheHeader />
    <main>
      <ShoppingList />
    </main>
  </div>
</template>

<script>
import { mapState } from "vuex";
import TheHeader from "@components/TheHeader.vue";
import ShoppingList from "@components/ShoppingList.vue";
export default {
  components: {
    TheHeader,
    ShoppingList,
  },
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
main {
  max-width: 1000px;
  width: 100%;
  margin: 2rem auto;
}
</style>
