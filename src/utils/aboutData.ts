export interface IAbout {
  id: number;
  key: string;
  img: string;
  name: string;
  Position: string;
  description: string;
}

interface AboutResponse {
  about: IAbout[];
}
export const AboutData: AboutResponse = {
  about: [
    {
      id: 1,
      key: "01",
      img: "/assets/aboutimg.png",
      name: "Alex Johnson",
      Position: "Chief Financial Officer",
      description:
        "Our About Us page provides insights into who we are and what we stand for. It serves as a key touchpoint for visitors to understand our mission, values, and the story behind our brand. Whether labeled About, Story, or Mission, this page helps to build trust and connection with our audience by sharing our journey and core beliefs.",
    },
    {
      id: 2,
      key: "02",
      img: "/assets/img2.png",
      name: "Emma Davis",
      Position: "Mobile App Developer",
      description:
        "Specializing in the creation of high-quality mobile applications for iOS and Android. With a strong emphasis on user experience and performance, we ensure that each app we develop meets the highest standards of functionality and design.",
    },
    {
      id: 3,
      key: "03",
      img: "/assets/aboutimg.png",
      name: "Michael Lee",
      Position: "UI/UX Designer",
      description:
        "Focused on designing and developing intuitive and engaging user interfaces. Our goal is to create seamless interactions and satisfying experiences for users, ensuring that every touchpoint with our products is both enjoyable and effective.",
    },
    {
      id: 4,
      key: "04",
      img: "/assets/aboutimg.png",
      name: "Sophia Martinez",
      Position: "E-Commerce Specialist",
      description:
        "Expert in building robust e-commerce platforms that enhance online sales. We integrate features such as shopping carts, payment gateways, and product management to create a comprehensive and user-friendly online shopping experience.",
    },
    {
      id: 5,
      key: "05",
      img: "/assets/aboutimg.png",
      name: "James Brown",
      Position: "SEO Strategist",
      description:
        "Dedicated to improving website visibility and ranking through strategic optimization techniques. We use advanced content strategies and SEO practices to enhance your website's performance and attract more organic traffic.",
    },
    {
      id: 6,
      key: "06",
      img: "/assets/aboutimg.png",
      name: "Olivia Wilson",
      Position: "Digital Marketing Manager",
      description:
        "Implementing effective digital marketing strategies to boost online presence. From social media management to content creation and advertising, we focus on enhancing engagement and driving growth for your brand.",
    },
    {
      id: 7,
      key: "07",
      img: "/assets/aboutimg.png",
      name: "Liam Smith",
      Position: "Cloud Solutions Architect",
      description:
        "Providing scalable and secure cloud solutions for data storage, computing, and application deployment. Our services are designed to enhance operational efficiency and support your business's growth with cutting-edge cloud technology.",
    },
  ],
};
