<template>
  <div class="wrapper">
    <TheHeader />
    <main>
      <ShoppingList />
      estimatedCartCost: {{ estimatedCartCost }} getCartBalance:
      {{ getCartBalance }}
      <PieChart
        :key="chartKey"
        :labels="['Current Cart Balance', 'Estimated Cart Cost']"
        :datasets="getChartDataSet"
      />
    </main>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";
import TheHeader from "@components/TheHeader.vue";
import ShoppingList from "@components/ShoppingList.vue";
import PieChart from "@components/charts/pieChart";

export default {
  components: {
    TheHeader,
    ShoppingList,
    PieChart,
  },
  data() {
    return {
      value: 12,
      chartKey: 1,
    };
  },
  computed: {
    ...mapState(["cart"]),
    ...mapGetters({
      getCartBalance: "cart/getCartBalance",
      estimatedCartCost: "cart/estimatedCartCost",
    }),
    getChartDataSet() {
      console.log("I AM GETTIN CALLED??");
      this.chartKey++;
      return [
        {
          data: [this.getCartBalance, this.estimatedCartCost],
          backgroundColor: ["#41B883", "#E46651", "#00D8FF", "#DD1B16"],
        },
      ];
    },
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
