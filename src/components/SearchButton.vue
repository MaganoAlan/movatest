<template>
  <button id="search">PESQUISAR</button>
</template>

<script>
export default {
  name: "SearchButton",
};
</script>

<style scoped>
#search {
  color: #fff;
  background-color: #6d2080;
  border-radius: 7px;
  padding-right: 2%;
  padding-left: 2%;
  border: none;
  cursor: pointer;
}
#search:hover {
  background-color: #9f59b1;
}

@media (max-width: 480px) {
  #search {
    color: #fff;
    background-color: #6d2080;
    border-radius: 7px;
    padding: 2%;
    border: none;
    cursor: pointer;
    margin: 2%;
  }
  #search:hover {
    background-color: #9f59b1;
  }
}
</style>
