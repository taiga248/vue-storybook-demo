import Main from "/src/components/organisms/Main";

export default {
  title: "organism/main",
  component: Main,
};

const Template = (args, { argTypes }) => ({
  components: { Main },
  props: Object.keys(argTypes),
  template: "<Main v-bind='$props' />",
});

export const Default = Template.bind({});
Default.args = {};
