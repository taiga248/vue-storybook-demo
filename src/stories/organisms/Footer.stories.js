import Footer from "/src/components/organisms/Footer";

export default {
  title: "organism/Footer",
  component: Footer,
};

const Template = () => ({
  components: { Footer },
  template: "<Footer />",
});

export const Default = Template.bind({});
Default.args = {};
