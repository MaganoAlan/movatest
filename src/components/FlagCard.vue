<template>
  <img id="flag" :src="src" alt="Flag" />
</template>

<script>
export default {
  name: "FlagCard",
  props: {
    src: String,
  },
};
</script>

<style scoped>
#flag {
  width: 28vw;
  height: 30vh;
  margin: 2%;
  box-shadow: 5px 4px 4px rgba(0, 0, 0, 0.25);
  cursor: pointer;
}

@media (max-width: 480px) {
  #flag {
    width: 63vw;
    height: 30vh;
    margin: 2%;
    box-shadow: 5px 4px 4px rgba(0, 0, 0, 0.25);
    cursor: pointer;
  }
}
</style>
