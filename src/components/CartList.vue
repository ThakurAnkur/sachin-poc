<template>
  <div>
    <h2>Cart List</h2>
    <table v-if="getProducts.length">
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Cost</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="prod in getProducts" :key="prod.name">
          <td>{{ prod.name }}</td>
          <td>{{ prod.price }}</td>
          <td>{{ prod.quantity }}</td>
          <td>{{ prod.quantity * prod.price }}</td>
          <td>
            <div>
              <button @click="removeProduct(prod)">Delete</button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import { defineComponent } from "vue";
import { mapActions, mapGetters } from "vuex";
import ProductActions from "@components/ProductActions.vue";

export default defineComponent({
  name: "CurrentShoppingList",
  components: {
    ProductActions,
  },
  computed: {
    ...mapGetters({
      getProducts: "cart/getCartItems",
    }),
  },
  methods: {
    ...mapActions({ removeItem: "cart/removeItem" }),
    removeProduct(product) {
      this.removeItem(product);
    },
  },
});
</script>
<style lang="scss" scoped>
table {
  width: 100%;
  border-collapse: collapse;
  th {
    font-weight: bold;
  }
  td,
  th {
    border: 1px solid;
    padding: 0.25em;
  }
}
</style>
