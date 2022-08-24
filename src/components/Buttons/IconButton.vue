<template>
  <button class="icon-button" v-bind="$attrs">
    <font-awesome-icons :icon="icon" v-if="position == 'left'" />
    <slot>Text</slot>
    <font-awesome-icons :icon="icon" v-if="position == 'right'" />
  </button>
</template>
<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "icon-button",
  props: {
    icon: {
      required: true,
      type: String,
    },
    position: {
      required: false,
      validator(value) {
        // The value must match one of these strings
        return ["left", "right"].includes(value);
      },
      default: "left",
    },
  },
});
</script>
<style lang="scss" scoped>
svg {
  margin: 0 0.25em;
}
</style>
