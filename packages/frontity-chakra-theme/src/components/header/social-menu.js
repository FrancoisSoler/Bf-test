import { Box, VisuallyHidden } from "@chakra-ui/react";
import React from "react";
import { SiteMenu } from "./navigation";
import {
  IoLogoTwitter,
  IoLogoLinkedin,
  IoLogoFacebook,
  IoLogoInstagram
} from "react-icons/io";
import Link from "../link";

// warning for showSocialLinks and menu.length
export const SocialMenu = ({ menu, ...props }) => (
  <SiteMenu spacing="20px" ml="24px" position={{ sm: "relative" }} {...props}>
    {menu.map(([name, link]) => {
      const SocialIcon = icons[name];
      return (
        <SocialMenuItem key={name} label={name} link={link} icon={SocialIcon} />
      );
    })}
  </SiteMenu>
);

const SocialMenuItem = ({ icon, label, link, ...props }) => (
  <Box
    color="gray"
    transition="all 0.3s"
    _hover={{ color: "white" }}
    as="li"
    listStyleType="none"
    margin="0"
    {...props}
  >
    <Link link={link}>
      <Box as={icon} boxSize="20px" />
    </Link>
    <VisuallyHidden>{label}</VisuallyHidden>
  </Box>
);

const icons = {
  twitter: IoLogoTwitter,
  linkedin: IoLogoLinkedin,
  facebook: IoLogoFacebook,
  instagram: IoLogoInstagram
};

const SocialNav = ({ menu, ...props }) => (
  <Box ml="auto" display={{ base: "none", lg: "none" }} {...props}>
    <SocialMenu menu={menu} />
  </Box>
);

export default SocialNav;

