import * as Styled from "./FooterNavigation.style";

interface Props {
  className?: string;
}

const links = [
  "About Us",
  "Contact",
  "Blog",
  "Careers",
  "Support",
  "Privacy Policy",
];

const FooterNavigation = ({ className }: Props) => {
  return (
    <Styled.Navigation className={className}>
      <Styled.List>
        {links.map((link) => (
          <Styled.ListItem key={link}>
            <Styled.Link href="#">{link}</Styled.Link>
          </Styled.ListItem>
        ))}
      </Styled.List>
    </Styled.Navigation>
  );
};

export default FooterNavigation;
