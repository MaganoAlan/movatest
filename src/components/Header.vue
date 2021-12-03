<template>
  <div id="HeaderContainer">
    <img id="logo" src="../assets/logo_principal.png" alt="Logo" />
    <DefaultButton text="" />
  </div>
</template>

<script>
import DefaultButton from "../components/DefaultButton.vue";

export default {
  components: { DefaultButton },
  name: "Header",
};
</script>

<style scoped>
#HeaderContainer {
  width: 100%;
  height: 15vh;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  background-color: #fff;
}

#logo {
  padding: 3%;
}
</style>
