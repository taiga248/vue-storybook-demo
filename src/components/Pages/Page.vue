<template>
  <div>
    <Header :user="user"></Header>
    <Main></Main>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "/src/components/organisms/Header.vue";
import Main from "/src/components/organisms/Main.vue";
import Footer from "/src/components/organisms/Footer.vue";
export default {
  components: {
    Header,
    Main,
    Footer,
  },
  created() {
    // user処理
  },
  data() {
    return {
      // 擬似的にtrue
      user: {},
    };
  },
};
</script>

<style>
* {
  /* outline: solid 1px red; */
}
</style>