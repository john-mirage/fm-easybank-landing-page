import * as Styled from "./Feature.style";
import {
  IconOnline,
  IconBudgeting,
  IconOnboarding,
  IconApi,
} from "@components/Icon";
import { useMemo } from "react";

interface Props {
  className?: string;
  feature: AppData.Feature;
}

const Feature = ({ className, feature }: Props) => {
  const icon = useMemo(() => {
    switch (feature.icon) {
      case "online":
        return <IconOnline width={72} height={72} />;
      case "budgeting":
        return <IconBudgeting width={72} height={72} />;
      case "onboarding":
        return <IconOnboarding width={72} height={72} />;
      case "api":
        return <IconApi width={72} height={72} />;
      default:
        throw new Error("The feature name is not valid");
    }
  }, [feature]);

  return (
    <Styled.Feature className={className}>
      <Styled.Article>
        <Styled.Icon>{icon}</Styled.Icon>
        <Styled.Name>{feature.name}</Styled.Name>
        <Styled.Description>{feature.description}</Styled.Description>
      </Styled.Article>
    </Styled.Feature>
  );
};

export default Feature;
