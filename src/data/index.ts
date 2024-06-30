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

export const NavData = {
  navItems: [
    { icon: "💻", text: "Projects", ref: "#projects" },
    { icon: "✍️", text: "Blog", ref: "#blog" },
    { icon: "🎙️", text: "Podcast", ref: "#pod" },
    { icon: "✉️️", text: "Contact Me", ref: "#contact" },
    {
      icon: "📄",
      text: "Resume",
      ref: "https://utfs.io/f/0d4f4098-25c4-4d6d-9200-4b49c61246c4-3olpfc.pdf",
    },
  ],
  title: "Tushar Selvakumar",
};

export const Intro: Intro = {
  image: "https://avatars.githubusercontent.com/u/54372016?v=4",
  company: "AI Squared",
  role: "Software Engineer (SDE-1)",
};

export const ProjectData: Section = {
  title: "💻 Projects",
  subtitle: "Here's a few Projects I've worked on over the years",
  cards: [
    {
      title: "Sneaker Street",
      description:
        "Sneaker Street is an e-commerce platform intended on helping users to easily purchase sneakers.",
      image:
        "https://utfs.io/f/e5eed4b9-6b55-4ba9-ad70-0ce36cc65568-28jlz8.png",
      buttons: [
        {
          buttonText: "View Code",
          buttonLink: "https://github.com/macintushar/SneakerStore",
          buttonImage: "https://cdn.simpleicons.org/github/black/white",
          buttonHasImage: true,
        },
        {
          buttonText: "Demo",
          buttonLink: "https://sneaker-street-demo.netlify.app/",
          buttonImage: "https://cdn.simpleicons.org/netlify/black/white",
          buttonHasImage: true,
        },
      ],
    },
    {
      title: "SPKR - Voice Keyboard",
      description:
        "SPKR is an android keyboard app that helps users speak into their keyboards in any language and translates that text into any other language to be inputted into any app.",
      image: "https://utfs.io/f/94b46082-327a-43b3-9c93-327a45638769-1ip38.png",
      buttons: [
        {
          buttonText: "View Code",
          buttonLink: "https://github.com/macintushar/SPKR-Voice-Keyboard",
          buttonImage: "https://cdn.simpleicons.org/github/black/white",
          buttonHasImage: true,
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
          buttonLink:
            "https://medium.com/@macintushar/how-to-setup-github-ssh-on-ubuntu-a0ece1587780",
          buttonHasImage: true,
          buttonImage: "https://cdn.simpleicons.org/medium/black/white",
        },
      ],
    },
  ],
};

export const PodcastData = {
  sectionData: {
    title: "🎙️ Podcast",
    subtitle: "Check out my podcast about tech and stuff",
  },
  ctaLink: "https://podcasters.spotify.com/pod/show/boredkid",
  ctaImage: "https://cdn.simpleicons.org/podcastindex/black/white",
  ctaText: "Check out all the other episodes",
};

export const ContactData = {
  sectionData: {
    title: "✉️️ Contact Me",
    subtitle:
      "I’m always trying to do some interesting work so if you are doing something that’s interesting, drop me an email or get in touch with me through my socials.",
  },
  ctaLink: "mailto:tusharkumar91111@gmail.com",
  ctaText: "Say Hi! 👋",
};
