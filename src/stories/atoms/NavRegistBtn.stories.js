import NavRegistBtn from "/src/components/atoms/NavRegistBtn";

export default {
  title: "atoms/NavRegistBtn",
  component: NavRegistBtn,
};

const Template = (args, { argTypes }) => ({
  components: { NavRegistBtn },
  props: Object.keys(argTypes),
  template: '<NavRegistBtn v-bind="$props" />',
});

export const mypage = Template.bind({});
mypage.args = {
  text: "マイページ",
  mypage: "mypage",
};

export const register = Template.bind({});
register.args = {
  text: "登録",
};
