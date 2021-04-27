<template>
  <ul class="nav">
    <NavBtn text="one" />
    <NavBtn text="two" />
    <NavBtn text="three" />
    <NavBtn />
    <template v-if="user"> <NavRegistBtn text="マイページ" /></template>
    <template v-else> <NavRegistBtn :class="mypage" text="登録" /></template>
  </ul>
</template>

<script>
import NavBtn from "/src/components/atoms/NavBtn.vue";
import NavRegistBtn from "/src/components/atoms/NavRegistBtn.vue";

export default {
  components: {
    NavBtn,
    NavRegistBtn,
  },
  props: {
    user: {
      type: Object,
      require: true,
    },
  },
  data() {
    return {
      mypage: "mypage",
    };
  },
};
</script>

<style scoped>
.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>