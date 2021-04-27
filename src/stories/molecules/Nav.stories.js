import Nav from "/src/components/molecules/Nav";

export default {
  title: "molecules/Nav",
  component: Nav,
};

const Template = (args, { argTypes }) => ({
  components: { Nav },
  props: Object.keys(argTypes),
  template: '<Nav v-bind="$props" />',
});

export const isUser = Template.bind({});
isUser.args = {
  user: {},
};

export const noUser = Template.bind({});
noUser.args = {};
