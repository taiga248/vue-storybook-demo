import NavLogo from "/src/components/atoms/NavLogo";

export default {
  title: "atoms/NavLogo",
  component: NavLogo,
};

export const Default = () => ({
  components: { NavLogo },
  template: "<NavLogo />",
});
