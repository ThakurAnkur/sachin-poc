<template>
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
        <td><ProductActions :productDetail="prod" /></td>
      </tr>
    </tbody>
  </table>
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
  mounted() {
    this.fetchProducts();
  },
  computed: {
    ...mapGetters({ getProducts: "product/getProducts" }),
  },
  methods: {
    ...mapActions({ fetchProducts: "product/fetchProducts" }),
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
