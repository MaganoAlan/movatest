<template>
  <router-link :to="'/details/' + country.alpha3Code" v-if="country.flags">
    <FlagCard :src="country.flags.svg" />
  </router-link>
</template>

<script>
import Country from "../services/countries";
import FlagCard from "./FlagCard.vue";

export default {
  name: "BorderCountry",
  components: { FlagCard },
  props: {
    code: String,
  },
  data() {
    return {
      country: {},
    };
  },
  mounted() {
    Country.countryCode(this.code).then((response) => {
      this.country = response.data;
      console.log(response.data);
    });
  },
};
</script>
