<template>
  <div class="field">
    <label :for="id" v-html="label" />
    <input v-bind="$attrs" :id="id" @change="emitChange" :value="modelValue" />
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "field",
  props: {
    label: {
      required: true,
      type: String,
    },
    id: {
      required: true,
      type: String,
    },
    modelValue: {
      required: true,
    },
  },
  emits: ["update:modelValue"],
  methods: {
    emitChange(event: any) {
      let value = event.target.value;
      this.$emit("update:modelValue", value);
    },
  },
});
</script>
<style lang="scss" scoped>
.field {
  margin: 1rem 0;
}
input {
  appearance: none;
  font-size: 1.4rem;
  border: 0.1rem solid;
  padding: 0.25em 1em;
  width: 100%;
  display: block;
}
label {
  font-size: 1.4rem;
  display: block;
  margin-bottom: 0.25em;
  font-weight: 700;
  ::-webkit-inner-spin-button {
    display: none;
  }
}
</style>
