export interface Projects {
  id: number;
  key: string;
  img: string;
  description: string;
}

interface ProjectsResponse {
  project: Projects[];
}
export const ProjectsData: ProjectsResponse = {
  project: [
    {
      id: 1,
      key: "01",
      img: "/assets/img1.png",
      description:
        "Your About Us page is one of the first supporting pages you’ll likely design when building your website, regardless of the industry you’re in. It may go by different labels—About, Story, Mission—but these types of pages serve the same key purpose: to be the page for a brand to say, “This is who we are.” When a visitor wants to learn more about you or your business, the About page is what they’ll look for. Learn how to craft the perfect page for your business, with About Us page examples from successful brands to inspire you. It may go by different labels—About, Story, Mission—but these types of pages serve the same key purpose: to be the page for a brand to say, “This is who we are.” When a visitor wants to learn more abou",
    },
    {
      id: 2,
      key: "02",
      img: "/assets/img2.png",
      description:
        "Creating high-quality mobile applications for iOS and Android platforms with a focus on user experience and performance.",
    },
    {
      id: 3,
      key: "03",
      img: "/assets/img3.png",
      description:
        "Designing and developing intuitive and engaging user interfaces and experiences to ensure seamless interaction and satisfaction.",
    },
    {
      id: 4,
      key: "04",
      img: "/assets/img3.png",
      description:
        "Building robust e-commerce platforms with features like shopping carts, payment gateways, and product management to enhance online sales.",
    },
    {
      id: 5,
      key: "05",
      img: "/assets/img3.png",
      description:
        "Improving website visibility and ranking on search engines through strategic optimization techniques and content strategies.",
    },
    {
      id: 6,
      key: "06",
      img: "/assets/img3.png",
      description:
        "Implementing digital marketing strategies including social media management, content creation, and advertising to boost online presence and engagement.",
    },
    {
      id: 7,
      key: "07",
      img: "/assets/img3.png",
      description:
        "Offering scalable and secure cloud solutions for data storage, computing, and application deployment to enhance operational efficiency.",
    },
  ],
};
