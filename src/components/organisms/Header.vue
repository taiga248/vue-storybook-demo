<template>
  <header class="header">
    <NavLogo />
    <Nav :user="user" />
  </header>
</template>

<script>
import NavLogo from "/src/components/atoms/NavLogo.vue";
import Nav from "/src/components/molecules/Nav.vue";

export default {
  components: {
    NavLogo,
    Nav,
  },
  props: {
    user: {
      type: Object,
      require: true,
    },
  },
};
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-bottom: 2px #efefef solid;
}
</style>