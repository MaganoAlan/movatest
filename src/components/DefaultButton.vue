<template>
  <button id="btn">
    <img id="back" src="../assets/Vector.png" />{{ text != "" ? text : ""
    }}<router-link id="backlink" to="/">Voltar</router-link>
  </button>
</template>

<script>
export default {
  name: "DefaultButton",
  props: {
    text: String,
  },
};
</script>

<style scoped>
#btn {
  color: #6d2080;
  border: 1px solid #6d2080;
  box-sizing: border-box;
  width: 7vw;
  margin: 3%;
  background: none;
  display: flex;
  flex-direction: row;
  align-content: space-around;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
  text-overflow: ellipsis;
}

#back {
  margin: 2%;
  margin-right: 2%;
}
#backlink {
  text-decoration: none;
  margin: 2%;
  font-family: "Montserrat";
  font-size: large;
}
</style>
