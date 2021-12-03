<template>
  <img id="flag" :src="src" alt="Flag" />
</template>

<script>
export default {
  name: "FlagCard",
  props: {
    src: Object,
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
</style>
