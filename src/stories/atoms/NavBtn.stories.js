import NavBtn from "/src/components/atoms/NavBtn";

export default {
  title: "atoms/NavBtn",
  component: NavBtn,
};

const Template = (args, { argTypes }) => ({
  components: { NavBtn },
  props: Object.keys(argTypes),
  template: '<NavBtn v-bind="$props" />',
});

export const Default = Template.bind({});
Default.args = {};

export const isProps = Template.bind({});
isProps.args = {
  text: "Taiga",
};
