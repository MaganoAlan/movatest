<template>
  <PrimaryTitle title="Home Page" />
  Filtrar por
  <select>
    <option disabled selected label="Escolha uma opção"></option>
    <option>Região</option>
    <option>Capital</option>
    <option>Lingua</option>
    <option>País</option>
    <option>Código de Ligação</option>
  </select>
  Região
  <select>
    <option disabled selected label="Escolha uma região"></option>
    <option>Americas</option>
    <option>Asia</option>
    <option>Africa</option>
    <option>Europa</option>
    <option>Oceania</option>
  </select>
  <SearchButton />
  <div id="flagcontainer">
    <div id="apicall" v-for="country of countries" :key="country.id">
      <router-link :to="'/details/' + country.alpha3Code">
        <FlagCard :src="country.flags.svg" />
      </router-link>
    </div>
  </div>
</template>

<script>
import FlagCard from "../../components/FlagCard.vue";

import PrimaryTitle from "../../components/PrimaryTitle.vue";
import SearchButton from "../../components/SearchButton.vue";

import Country from "../../services/countries";

export default {
  name: "Home",
  components: { PrimaryTitle, FlagCard, SearchButton },

  data() {
    return {
      countries: [],
    };
  },

  methods: {},

  mounted() {
    Country.listar().then((response) => {
      this.countries = response.data;
      console.log(response.data);
    });
  },
};
</script>

<style scoped>
#flagcontainer {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-content: space-evenly;
  justify-content: space-evenly;
  justify-items: center;
}
#apicall {
  margin: 4%;
}
</style>
