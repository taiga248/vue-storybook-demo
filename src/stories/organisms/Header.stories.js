import Header from "/src/components/organisms/Header";

export default {
  title: "organism/header",
  component: Header,
};

const Template = (args, { argTypes }) => ({
  components: { Header },
  props: Object.keys(argTypes),
  template: "<Header v-bind='$props' />",
});

export const isUser = Template.bind({});
isUser.args = {
  user: {},
};

export const noUser = Template.bind({});
noUser.args = {};
