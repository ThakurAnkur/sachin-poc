<template>
  <div class="wrapper">
    <TheHeader />
    <div class="main-wrapper">
      <main>
        <ShoppingList />
      </main>
      <aside>
        <PieChart
          :key="chartKey"
          :labels="['Cart Value', 'Remaning amount']"
          :datasets="getChartDataSet"
        />
      </aside>
    </div>
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
          data: [
            this.estimatedCartCost,
            this.getCartBalance - this.estimatedCartCost,
          ],
          backgroundColor: ["#41B883", "#E46651", "#00D8FF", "#DD1B16"],
        },
      ];
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@scss/partials/_variables.scss";
@import "@scss/partials/_mixins.scss";
.wrapper {
  max-width: $lg;
  width: 100%;
  margin: 0 auto;
}
main {
}
.main-wrapper {
  padding: 2rem;
  @include medium-device {
    max-width: 1024px;
    margin: 2rem auto;
    width: 100%;
    display: flex;
    align-items: center;
    gap: 2em;
  }
}
aside {
  max-width: 400px;
  width: 100%;
  margin: 0 auto;
}
</style>
