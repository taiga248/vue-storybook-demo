<template>
  <button class="btn" :class="mypage">{{ text }}</button>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      require: true,
    },
    mypage: {
      type: String,
    },
  },
};
</script>

<style scoped>
.btn {
  width: 128px;
  padding: 8px 24px;
  margin: 0 8px;
  border: solid 2px #efefef;
  background: rgb(10, 132, 255);
  color: #fff;
  transition: 0.2s;
  cursor: pointer;
}
.mypage {
  background: #333;
}
.btn:hover {
  opacity: 0.7;
  transform: scale(1.05);
}
</style>