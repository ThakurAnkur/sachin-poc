<template>
  <div class="shopping-list-wrapper">
    <AddNewItem />
    <CurrentProductList />
    <CartList />
  </div>
</template>
<script>
import { defineComponent } from "vue";
import { mapActions } from "vuex";
import InputField from "@components/inputs/InputField.vue";
import AddNewItem from "@components/AddNewItem.vue";
import CurrentProductList from "@components/CurrentProductList.vue";
import CartList from "@components/CartList.vue";

export default defineComponent({
  name: "ShoppingList",
  components: {
    InputField,
    AddNewItem,
    CurrentProductList,
    CartList,
  },
  async mounted() {
    this.initCart();
  },
  data() {
    return {
      formInput: {
        itemName: "",
        price: "",
        quantity: "",
      },
    };
  },
  methods: {
    ...mapActions({ initCart: "cart/initCart", addItem: "cart/addItem" }),
    addItemToCart() {
      this.addItem({ ...this.formInput });
    },
  },
});
</script>
