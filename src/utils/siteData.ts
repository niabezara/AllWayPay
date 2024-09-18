export const navigationLinks = [
  {
    name: "home",
    path: "/",
  },
  { name: "Services", path: "/services" },
  {
    name: "projects",
    path: "/projects",
  },
  { name: "partners", path: "/partners" },
  {
    name: "about us",
    path: "/aboutus",
  },

  {
    name: "contact",
    path: "/contact",
  },
] as const;

export interface Service {
  id: number;
  key: string;
  name: string;
  img: string;
  color: string;
  description: string;
}

interface ServicesResponse {
  services: Service[];
}
export const servicesData: ServicesResponse = {
  services: [
    {
      id: 1,
      key: "01",
      name: "Web Development",
      img: "/assets/web.png",
      color: "#A751E94D",
      description:
        "Your About Us page is one of the first supporting pages you’ll likely design when building your website, regardless of the industry you’re in. It may go by different labels—About, Story, Mission—but these types of pages serve the same key purpose: to be the page for a brand to say, “This is who we are.” When a visitor wants to learn more about you or your business, the About page is what they’ll look for. Learn how to craft the perfect page for your business, with About Us page examples from successful brands to inspire you. It may go by different labels—About, Story, Mission—but these types of pages serve the same key purpose: to be the page for a brand to say, “This is who we are.” When a visitor wants to learn more abou",
    },
    {
      id: 2,
      key: "02",
      name: "Mobile Development",
      img: "/assets/mobile.png",
      color: "#55EDFF4D",
      description:
        "Creating high-quality mobile applications for iOS and Android platforms with a focus on user experience and performance.",
    },
    {
      id: 3,
      key: "03",
      name: "UI/UX Development",
      img: "/assets/ui.png",
      color: "#384BFF4D",
      description:
        "Designing and developing intuitive and engaging user interfaces and experiences to ensure seamless interaction and satisfaction.",
    },
    {
      id: 4,
      key: "04",
      name: "E-commerce Solutions",
      img: "/assets/mobile.png",
      color: "#55EDFF4D",
      description:
        "Building robust e-commerce platforms with features like shopping carts, payment gateways, and product management to enhance online sales.",
    },
    {
      id: 5,
      key: "05",
      name: "SEO Optimization",
      img: "/assets/ui.png",
      color: "#384BFF4D",
      description:
        "Improving website visibility and ranking on search engines through strategic optimization techniques and content strategies.",
    },
    {
      id: 6,
      key: "06",
      name: "Digital Marketing",
      img: "/assets/web.png",
      color: "#A751E94D",
      description:
        "Implementing digital marketing strategies including social media management, content creation, and advertising to boost online presence and engagement.",
    },
    {
      id: 7,
      key: "07",
      name: "Cloud Services",
      img: "/assets/mobile.png",
      color: "#384BFF4D",
      description:
        "Offering scalable and secure cloud solutions for data storage, computing, and application deployment to enhance operational efficiency.",
    },
  ],
};
