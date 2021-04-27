import Card from "/src/components/molecules/Card";

export default {
  title: "molecules/Card",
  component: Card,
};

const Template = (args, { argTypes }) => ({
  components: { Card },
  props: Object.keys(argTypes),
  template: '<Card v-bind="$props" />',
});

export const Default = Template.bind({});
Default.args = {
  title: "title",
  explain:
    "Lorem  ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, quisquam!",
};
