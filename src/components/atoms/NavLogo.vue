<template>
  <a class="logo" href="/">
    <img :src="logo_path" alt="logo" />
  </a>
</template>

<script>
export default {
  data() {
    return {
      logo_path: require("/assets/square.svg"),
    };
  },
};
</script>

<style>
.logo img {
  width: 80px;
}
</style>