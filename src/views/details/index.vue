<template id="temp">
  <div id="principal">
    <FlagCard :src="country.flag" />
    <div>
      <Field title="Nome" :value="country.name" />
      <Field title="Capital" :value="country.capital" />
      <Field title="Região" :value="country.region" :clickable="true" />
      <Field title="Sub-região" :value="country.subregion" />
      <Field title="População" :value="country.population" />
    </div>
  </div>
  <PrimaryTitle v-if="country.borders" title="Paises Vizinhos" />
  <div id="borders" v-for="code in country.borders" :key="code">
    <BorderCountry :code="code" />
  </div>
</template>

<script>
import Country from "../../services/countries";
import FlagCard from "../../components/FlagCard.vue";
import BorderCountry from "../../components/BorderCountry.vue";
import PrimaryTitle from "../../components/PrimaryTitle.vue";
import Field from "../../components/Field.vue";
export default {
  components: { FlagCard, BorderCountry, PrimaryTitle, Field },
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
    Country.countryCode(this.alpha).then((response) => {
      this.country = response.data;
      console.log(response.data);
    });
  },
};
</script>

<style>
#borders {
  display: contents;
  grid-template-columns: repeat(3, 1fr);
  align-content: space-evenly;
  justify-content: space-evenly;
  justify-items: center;
}
#principal {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
}
#countryinfo {
  display: flex;
  flex-direction: column;
  font-size: x-large;
}
#temp {
  display: flex;
  flex-direction: column;
}
</style>
