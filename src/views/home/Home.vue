<template>
  <PrimaryTitle title="Home Page" />
  Filtrar por
  <v-select
    placeholder="Escolha uma opção"
    v-model="selectedFilter"
    :options="['Região', 'Capital', 'Lingua', 'País', 'Código de Ligação']"
  ></v-select>

  Região
  <v-select
    placeholder="Escolha uma opção"
    :getOptionLabel="(opt) => opt.capital"
    :options="countries"
  ></v-select>

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
import vSelect from "vue-select";
import Country from "../../services/countries";

export default {
  name: "Home",
  components: { PrimaryTitle, FlagCard, SearchButton, vSelect },

  data() {
    return {
      countries: [],
      selectedFilter: "País",
      selectedOption: null,
    };
  },

  methods: {
    clickSearch() {
      this.selectedFilter = "Região";
      return this.Country.countryRegion().then((response) => {
        this.countries = response.data;
        console.log("update funcionou");
      });
    },
  },

  created() {
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
