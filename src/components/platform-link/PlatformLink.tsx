import React from "react";
import { Link } from "theme-ui";

export enum Platform {
  MASTODON = "Mastodon",
  EMAIL = "Email",
  INSTAGRAM = "Instagram",
  DISCORD = "Discord",
  YOU_TUBE = "YouTube",
  TUMBLR = "Tumblr",
  ARTSTATION = "ArtStation",
  TEEPUBLIC = "Teepublic",
  KO_FI = "Ko Fi",
  BLUESKY = "Bluesky",
  PINTEREST = "Pinterest",
  ITCH = "itch.io",
}

type Props = {
  platform: Platform;
};

type SocialLink = {
  link: string;
  text?: string;
};
const platformUrls: Partial<Record<Platform, SocialLink>> = {
  [Platform.BLUESKY]: {
    link: "https://bsky.app/profile/moonluces.bsky.social",
    text: "@moonluces",
  },
  [Platform.TEEPUBLIC]: {
    link: "https://www.teepublic.com/user/moonless",
    text: "Get a shirt!",
  },
  [Platform.YOU_TUBE]: {
    link: "https://www.youtube.com/channel/UChBnT1Rtmfr6Kb83B7wo-gw",
    text: "Watch process timelapse videos",
  },
  [Platform.KO_FI]: {
    link: "https://ko-fi.com/lucicute/",
    text: "Help support my work",
  },
  [Platform.ARTSTATION]: {
    link: "https://www.artstation.com/lucimoon",
    text: "ArtStation portfolio",
  },
  [Platform.ITCH]: {
    link: "https://minimalocean.itch.io/",
    text: "Game dev portfolio",
  },
  [Platform.TUMBLR]: {
    link: "https://www.tumblr.com/blog/moonluces",
    text: "@moonluces",
  },
};

export default function PlatformLink({
  platform,
}: Props): React.ReactElement | null {
  const { link, text } = platformUrls[platform] || {};

  if (!link && !text) return null;

  return (
    <div>
      {platform}: <Link href={link}>{text || link}</Link>
    </div>
  );
}
