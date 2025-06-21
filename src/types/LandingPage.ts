export type THeroSection = {
  developerInto: string;
  developerName: string;
  hiText: string;
};

export type TAbout = {
  description: string;
  highlightText: string[];
  title: string;
};

type Skill = {
  skill: string;
};

export type TTechStack = {
  skills: Skill[];
  title: string;
};

type Blog = {
  title: string;
  url: string;
};

export type TBlogList = {
  blogs: Blog[];
  title: string;
};

type SocialLink = {
  icon: string;
  text: string;
  url: string;
};

export type TFindMeOnline = {
  introText: string;
  socialLinks: SocialLink[];
  title: string;
};

export type TFooterText = string;
