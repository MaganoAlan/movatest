<template>
  <div id="forsearch">
    <v-select
      id="sel"
      placeholder="Escolha uma opção"
      v-model="selectedFilter"
      :options="['Região', 'Capital', 'Lingua', 'País', 'Código de Ligação']"
    ></v-select>

    <v-select
      id="sel"
      placeholder="Escolha uma opção"
      :getOptionLabel="(opt) => opt.capital"
      :options="countries"
    ></v-select>

    <SearchButton /><button @click="clickSearch">Perquisa</button>
  </div>
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

import SearchButton from "../../components/SearchButton.vue";
import vSelect from "vue-select";
import Country from "../../services/countries";

export default {
  name: "Home",
  components: { FlagCard, SearchButton, vSelect },

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
#sel {
  width: 20vw;
}
#forsearch {
  margin: 2%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}
</style>
