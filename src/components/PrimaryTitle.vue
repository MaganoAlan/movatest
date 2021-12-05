<template>
  <h1>{{ title }}</h1>
</template>

<script>
export default {
  name: "PrimaryTitle",
  props: {
    title: String,
  },
};
</script>

<style scoped>
h1 {
  margin: 1%;
  color: #6d2080;
  text-align: center;
}
</style>
