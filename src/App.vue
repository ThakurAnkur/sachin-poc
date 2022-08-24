<template>
  <div class="wrapper">
    <TheHeader />
  </div>
</template>

<script>
import { mapState } from "vuex";
import TheHeader from "@components/TheHeader.vue";
export default {
  components: {
    TheHeader,
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
</style>
