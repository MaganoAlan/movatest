<template>
  <div id="forsearch">
    <v-select
      id="sel"
      placeholder="Escolha uma opção"
      v-model="selectedFilter"
      :clearable="false"
      :options="['Região', 'Capital', 'Língua', 'País', 'Código de discagem']"
    ></v-select>

    <v-select
      id="sel"
      :title="selectedFilter"
      :placeholder="'Filtrar por' + selectedFilter"
      v-model="selectedOption"
      :clearable="false"
      :optionLabel="renderOption"
      :options="
        this.selectedFilter == 'Língua'
          ? ['en', 'pt', 'es', 'it', 'fr']
          : this.selectedFilter == 'Região'
          ? ['=>Regiões', 'Asia', 'Africa', 'Americas', 'Europe', 'Oceania']
          : this.selectedFilter == 'País'
          ? ['=>Países', 'Brasil', 'Peru']
          : this.selectedFilter == 'Código de discagem'
          ? ['=>Códigos de discagem', '55', '51', '60']
          : this.selectedFilter == 'Capital'
          ? ['=>Capitais', 'Lima', 'Brasilia']
          : ''
      "
    ></v-select>

    <SearchButton @click="clickSearch" />
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
    renderOption(opt) {
      if (this.countries.length > 0) {
        if (this.selectedFilter === "Capital") {
          return opt.capital;
        } else {
          return opt.name;
        }
      }
    },
    clickSearch() {
      console.log(` Filtro = ${this.selectedFilter}`);
      console.log(` Opção = ${this.selectedOption}`);

      if (this.selectedFilter == "Língua") {
        Country.countryLanguage(this.selectedOption).then((response) => {
          this.countries = response.data;
          console.log(response.data);
        });
      } else if (this.selectedFilter == "Região") {
        Country.countryRegion(this.selectedOption).then((response) => {
          this.countries = response.data;
          console.log(response.data);
        });
      } else if (this.selectedFilter == "País") {
        Country.countryName(this.selectedOption).then((response) => {
          this.countries = response.data;
          console.log(response.data);
        });
      } else if (this.selectedFilter == "Código de discagem") {
        Country.callingCode(this.selectedOption).then((response) => {
          this.countries = response.data;
          console.log(response.data);
        });
      } else if (this.selectedFilter == "Capital") {
        Country.capitalCity(
          this.selectedOption === null ? "all" : this.selectedOption
        ).then((response) => {
          this.countries = response.data;
          console.log(response.data);
        });
      }
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
  cursor: pointer;
}
#forsearch {
  margin: 2%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}
</style>
