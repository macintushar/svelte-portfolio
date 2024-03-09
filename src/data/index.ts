export type CardButton = {
  buttonText?: string;
  buttonLink?: string;
  buttonImage?: string;
  buttonHasImage?: boolean;
};

type Card = {
  title: string;
  description: string;
  image: string;
  buttons: CardButton[];
};

type Section = {
  title: string;
  subtitle: string;
  cards?: Card[];
};

type Intro = {
  image: string;
  company?: string;
  role?: string;
};

export const Intro: Intro = {
  image: "https://www.w3schools.com/w3images/avatar_g2.jpg",
  company: "Multiwoven",
  role: "SDE Intern",
};

export const ProjectData: Section = {
  title: "💻 Projects",
  subtitle: "Here's a few Projects I've worked on over the years",
  cards: [
    {
      title: "Project 1",
      description: "This is a project I worked on",
      image: "SneakerStreet.png",
      buttons: [
        {
          buttonText: "View Code",
          buttonLink: "https://github.com",
          buttonImage: "https://www.w3schools.com/w3images/avatar_g2.jpg",
          buttonHasImage: true,
        },
        {
          buttonText: "Demo",
          buttonLink: "https://sneaker-street-demo.netlify.app/",
          // buttonImage: "https://www.w3schools.com/w3images/avatar_g2.jpg",
          buttonHasImage: false,
        },
      ],
    },
  ],
};

export const BlogData: Section = {
  title: "✍️ Blogs",
  subtitle: "Here are some things I’ve written",
  cards: [
    {
      title: "Setting up GitHub SSH in Ubuntu / Unix",
      description: "",
      image:
        "https://miro.medium.com/v2/resize:fit:720/format:webp/1*vWEP54_6iBuXxaj_clR0Tg.png",
      buttons: [
        {
          buttonText: "View Post",
          buttonLink: "https://github.com",
          buttonHasImage: false,
        },
      ],
    },
  ],
};

export const PodcastData: Section = {
  title: "🎙️ Podcast",
  subtitle: "Check out my podcast about tech and stuff",
};
