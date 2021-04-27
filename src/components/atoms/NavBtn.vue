<template>
  <button class="btn">{{ text }}</button>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: "default",
    },
  },
};
</script>

<style scoped>
.btn {
  width: 120px;
  padding: 8px 24px;
  margin: 0 8px;
  border-radius: 20px;
  border: solid 2px #efefef;
  background: #fff;
  color: #333;
  transition: 0.2s;
  cursor: pointer;
}
.btn:hover {
  background: #eee;
  transform: scale(1.05);
}
</style>