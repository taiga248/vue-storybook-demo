<template>
  <div class="card">
    <h2 class="title">{{ title }}</h2>
    <p class="explain">{{ explain }}</p>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      require: true,
    },
    explain: {
      type: String,
      require: true,
    },
  },
};
</script>

<style scoped>
.card {
  max-width: 250px;
  border: solid 2px #efefef;
  border-radius: 24px;
  padding: 16px 24px;
}
.explain {
  padding: 8px 16px;
  font-size: 16px;
}
.title {
  font-size: 24px;
  text-align: center;
  font-weight: 200;
  letter-spacing: 0.1em;
}
</style>