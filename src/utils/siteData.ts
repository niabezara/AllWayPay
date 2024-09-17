export const navigationLinks = [
  {
    name: "home",
    path: "/",
  },
  { name: "Services", path: "/Services" },
  {
    name: "projects",
    path: "/projects",
  },
  { name: "partners", path: "/partners" },
  {
    name: "about us",
    path: "/about us",
  },

  {
    name: "contact",
    path: "/contact",
  },
] as const;

interface Service {
  id: number;
  key: string;
  name: string;
  description: string;
}

interface ServicesResponse {
  services: Service[];
}

export const servicesData: ServicesResponse = {
  services: [
    {
      id: 1,
      key: "web-development",
      name: "Web Development",
      description:
        "Custom web development solutions including frontend and backend development using the latest technologies to build scalable and responsive websites.",
    },
    {
      id: 2,
      key: "mobile-development",
      name: "Mobile Development",
      description:
        "Creating high-quality mobile applications for iOS and Android platforms with a focus on user experience and performance.",
    },
    {
      id: 3,
      key: "ui-ux-development",
      name: "UI/UX Development",
      description:
        "Designing and developing intuitive and engaging user interfaces and experiences to ensure seamless interaction and satisfaction.",
    },
    {
      id: 4,
      key: "e-commerce-solutions",
      name: "E-commerce Solutions",
      description:
        "Building robust e-commerce platforms with features like shopping carts, payment gateways, and product management to enhance online sales.",
    },
    {
      id: 5,
      key: "seo-optimization",
      name: "SEO Optimization",
      description:
        "Improving website visibility and ranking on search engines through strategic optimization techniques and content strategies.",
    },
    {
      id: 6,
      key: "digital-marketing",
      name: "Digital Marketing",
      description:
        "Implementing digital marketing strategies including social media management, content creation, and advertising to boost online presence and engagement.",
    },
    {
      id: 7,
      key: "cloud-services",
      name: "Cloud Services",
      description:
        "Offering scalable and secure cloud solutions for data storage, computing, and application deployment to enhance operational efficiency.",
    },
  ],
};
