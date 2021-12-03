<template>
  <FlagCard :src="country.flag" />
  <div>
    Nome: {{ country.name }} Capital: {{ country.capital }} Região:
    {{ country.region }} População: {{ country.population }} Subregião:
    {{ country.subregion }}
  </div>
  <div v-for="code in country.borders" :key="code">
    <BorderCountry :code="code" />
  </div>
</template>

<script>
import Country from "../../services/countries";
import FlagCard from "../../components/FlagCard.vue";
import BorderCountry from "../../components/BorderCountry.vue";

export default {
  components: { FlagCard, BorderCountry },
  name: "Details",

  data() {
    return {
      country: {},
    };
  },

  props: {
    alpha: String,
  },

  created() {
    this.$watch("alpha", (newVal, preVal) => {
      if (newVal !== preVal) {
        Country.countryCode(this.alpha).then((response) => {
          this.country = response.data;
          console.log(response.data);
        });
      }
    });
  },

  mounted() {
    Country.countryCode(this.alpha).then((response) => {
      this.country = response.data;
      console.log(response.data);
    });
  },
};
</script>

<style></style>
