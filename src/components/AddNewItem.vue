<template>
  <form action="" @submit.prevent="addItemToCart">
    <InputField
      :label="'Item Name'"
      id="item-name"
      type="text"
      placeholder="Enter item name"
      v-model="formInput.name"
    />
    <InputField
      :label="'Price'"
      id="item-price"
      type="number"
      min="0"
      placeholder="Price"
      v-model="formInput.price"
    />
    <InputField
      :label="'Quantity'"
      id="item-quantity"
      type="number"
      min="0"
      placeholder="Quantity"
      v-model="formInput.quantity"
    />
    <button type="submit" title="Add To Cart">Add To Cart</button>
  </form>
</template>
<script>
import { defineComponent } from "vue";
import { mapActions } from "vuex";
import InputField from "@components/inputs/InputField.vue";

export default defineComponent({
  name: "AddNewItem",
  components: {
    InputField,
  },
  data() {
    return {
      formInput: {
        name: "",
        price: "",
        quantity: "",
      },
    };
  },
  methods: {
    ...mapActions({addItem: "product/addItem" }),
    addItemToCart() {
      this.addItem({ ...this.formInput });
    },
  },
});
</script>
