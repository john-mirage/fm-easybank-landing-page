import * as Styled from "./FeatureList.style";

const features: AppData.Feature[] = [
  {
    Icon: <Styled.OnlineIcon />,
    name: "Online Banking",
    description:
      "Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.",
  },
  {
    Icon: <Styled.BudgetingIcon />,
    name: "Simple Budgeting",
    description:
      "See exactly where your money goes each month. Receive notifications when you’re close to your hitting limits.",
  },
  {
    Icon: <Styled.OnboardingIcon />,
    name: "Fast Onboarding",
    description:
      "We don’t do branches. Open your account in minutes online and start taking control of your finances right away.",
  },
  {
    Icon: <Styled.ApiIcon />,
    name: "Open API",
    description:
      "Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.",
  },
];

const FeatureList = () => {
  return (
    <Styled.FeatureList>
      <Styled.Container>
        <Styled.Title>Why choose Easybank?</Styled.Title>
        <Styled.Subtitle>
          We leverage Open Banking to turn your bank account into your financial
          hub. Control your finances like never before.
        </Styled.Subtitle>
        <Styled.List>
          {features.map((feature) => (
            <Styled.Feature key={feature.name} feature={feature} />
          ))}
        </Styled.List>
      </Styled.Container>
    </Styled.FeatureList>
  );
};

export default FeatureList;
