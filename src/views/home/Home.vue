<template>
  <div id="forsearch">
    <v-select
      id="sel"
      placeholder="Escolha uma opção"
      v-model="selectedFilter"
      :clearable="false"
      :options="[
        'Continente',
        'Capital',
        'Língua',
        'País',
        'Código de discagem',
      ]"
    ></v-select>

    <input
      type="number"
      v-if="selectedFilter == 'Código de discagem'"
      :title="selectedFilter"
      :value="selectedOption"
      @change="changeCode"
      placeholder="Digite o código telefônico"
    />
    <v-select
      v-else
      id="sel"
      :title="selectedFilter"
      :placeholder="'Filtrar por' + ': ' + selectedFilter"
      v-model="selectedOption"
      :clearable="false"
      :getOptionLabel="renderOption"
      :options="
        this.selectedFilter == 'Língua'
          ? languages
          : this.selectedFilter == 'Continente'
          ? ['Asia', 'Africa', 'Americas', 'Europe', 'Oceania']
          : this.selectedFilter == 'País'
          ? countries
          : this.selectedFilter == 'Capital'
          ? capitals
          : ''
      "
    ></v-select>

    <SearchButton @click="clickSearch" />
  </div>
  <div id="flagcontainer">
    <div id="apicall" v-for="country in pageOfItems" :key="country.id">
      <router-link :to="'/details/' + country.alpha3Code">
        <FlagCard :src="country.flags.svg" />
      </router-link>
    </div>
  </div>
  <Pagination :items="countries" @changePage="onChangePage" />
</template>

<script>
import FlagCard from "../../components/FlagCard.vue";
import SearchButton from "../../components/SearchButton.vue";
import vSelect from "vue-select";
import Country from "../../services/countries";
import Pagination from "../../components/Pagination.vue";
//import { isnumber } from "../../utilities";

export default {
  name: "Home",
  components: { FlagCard, SearchButton, vSelect, Pagination },
  props: { region: String },

  data() {
    return {
      countries: [],
      capitals: [],
      languages: [
        { name: "English", code: "en" },
        { name: "Spanish", code: "es" },
        { name: "Portuguese", code: "pt" },
        { name: "Chinese", code: "zh" },
        { name: "Italian", code: "it" },
        { name: "French", code: "fr" },
        { name: "Russian", code: "ru" },
        { name: "German", code: "de" },
        { name: "Japanese", code: "ja" },
      ],
      selectedFilter: "País",
      selectedOption: null,
      pageOfItems: [],
      pageNumber: 1,
    };
  },

  methods: {
    clickSearch() {
      console.log(` Filtro = ${this.selectedFilter}`);
      console.log(` Opção = ${this.selectedOption}`);

      if (this.selectedFilter == "Língua") {
        Country.countryLanguage(this.selectedOption.code).then((response) => {
          this.countries = response.data;
          console.log(response.data);
        });
      } else if (this.selectedFilter == "Continente") {
        Country.countryRegion(this.selectedOption).then((response) => {
          this.countries = response.data;
          console.log(response.data);
        });
      } else if (this.selectedFilter == "País") {
        Country.countryName(this.selectedOption.name).then((response) => {
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
          this.selectedOption === null ? "all" : this.selectedOption.capital
        ).then((response) => {
          this.countries = response.data;
          console.log(response.data);
        });
      }
    },
    onChangePage(pageOfItems) {
      this.pageOfItems = pageOfItems;
    },
    changeCode(evt) {
      this.selectedOption = evt.target.value;
    },
    renderOption(opt) {
      if (this.selectedFilter == "Língua") {
        return opt.name;
      } else if (this.selectedFilter == "País") {
        return opt.name;
      } else if (this.selectedFilter == "Capital") {
        return opt.capital;
      } else {
        return opt;
      }
    },
  },

  created() {
    if (this.region) {
      this.selectedFilter = "Continente";
      this.selectedOption = this.region;
      Country.countryRegion(this.region).then((response) => {
        this.countries = response.data;
      });
    } else {
      Country.listar().then((response) => {
        this.countries = response.data;
        this.capitals = response.data;
        console.log(response.data);
      });
    }
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
@media (max-width: 480px) {
  #forsearch {
    margin: 2%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }
  #sel {
    width: 100vw;
    cursor: pointer;
    margin: 2%;
  }

  #flagcontainer {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    align-content: space-evenly;
    justify-content: space-evenly;
    justify-items: center;
  }
}
</style>
