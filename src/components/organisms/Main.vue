<template>
  <main>
    <section class="contents">
      <Card :title="titles[0]" :explain="explains[0]" />
      <Card :title="titles[1]" :explain="explains[1]" />
      <Card :title="titles[2]" :explain="explains[2]" />
    </section>
  </main>
</template>

<script>
import Card from "../molecules/Card.vue";

export default {
  components: { Card },
  name: "Main",
  data() {
    return {
      titles: ["Title1", "Title2", "Title3"],
      explains: [
        "Lorem 1 ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, quisquam!",
        "Lorem 2 ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, quisquam!",
        "Lorem 3 ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, quisquam!",
      ],
    };
  },
};
</script>

<style scoped>
.contents {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 80vw;
  margin: 40px auto;
}
</style>
