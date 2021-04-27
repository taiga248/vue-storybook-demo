import Page from "/src/components/Pages/Page";

export default {
  title: "Pages/Page",
  component: Page,
};

const Template = (args, { argTypes }) => ({
  components: { Page },
  props: Object.keys(argTypes),
  template: "<Page v-bind='$props' />",
});

export const Default = Template.bind({});
Default.args = {};
