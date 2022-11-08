import * as Styled from "./Feature.style";

interface Props {
  className?: string;
  feature: AppData.Feature;
}

const Feature = ({ className, feature }: Props) => {
  return (
    <Styled.Feature className={className}>
      <Styled.Article>
        {feature.Icon}
        <Styled.Name>{feature.name}</Styled.Name>
        <Styled.Description>{feature.description}</Styled.Description>
      </Styled.Article>
    </Styled.Feature>
  );
};

export default Feature;
