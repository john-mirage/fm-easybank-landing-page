import * as Styled from "./SocialNavigation.style";

interface Props {
  className?: string;
}

const socialMedias = [
  {
    name: "facebook",
    Icon: <Styled.FacebookIcon />,
  },
  {
    name: "youtube",
    Icon: <Styled.YoutubeIcon />,
  },
  {
    name: "twitter",
    Icon: <Styled.TwitterIcon />,
  },
  {
    name: "pinterest",
    Icon: <Styled.PinterestIcon />,
  },
  {
    name: "instagram",
    Icon: <Styled.InstagramIcon />,
  },
];

const SocialNavigation = ({ className }: Props) => {
  return (
    <nav className={className}>
      <Styled.List>
        {socialMedias.map((socialMedia) => (
          <Styled.ListItem key={socialMedia.name}>
            <Styled.Link href="#" aria-label={`${socialMedia.name} page`}>
              {socialMedia.Icon}
            </Styled.Link>
          </Styled.ListItem>
        ))}
      </Styled.List>
    </nav>
  );
};

export default SocialNavigation;
