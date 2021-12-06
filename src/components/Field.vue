<template>
  <div v-if="clickable">
    <div class="text">
      {{ title }}:
      <router-link v-if="clickable" :to="`/${value}`">
        {{ value }}
      </router-link>
    </div>
  </div>
  <div v-else class="text">{{ title }}: {{ value }}</div>
</template>

<script>
export default {
  name: "Field",
  props: {
    title: String,
    value: [String, Number],
    clickable: Boolean,
  },
};
</script>

<style scoped>
.text {
  font-size: 18px;
  color: #454545;
  line-height: 22px;
  margin: 20px 20px;
}
</style>
