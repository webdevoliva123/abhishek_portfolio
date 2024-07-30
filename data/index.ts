export const navItems = [
  { name: "About", link: "#about-me" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "Turning Passion into Code: Building Seamless User Experiences. ",
    description: "",
    className: "lg:col-span-2 md:col-span-6 md:row-span-2 ",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-1 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My Tech Stack",
    description: "I constantly try to improve",
    className: "lg:col-span-1 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-1 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently Building A iOS React Native Application.",
    description: "The Inside Scoop",
    className: "md:col-span-2 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-1 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Wyldplanet",
    des: "WYLD PLANET is the first music-for-nature platform in the world, dedicated to stopping biodiversity loss and restoring damaged natural ecosystems. ",
    img: "/pro1.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg","/next.svg"],
    link: "https://wyldplanet.com",
  },
  {
    id: 2,
    title: "Melody.Kr",
    des: `Melodykr is a multifaceted content website offering articles,
music streaming, shopping, fan community engagement, and
chat features for users.`,
    img: "/pro2.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "https://melodykr.vercel.app",
  },
  {
    id: 3,
    title: "Stock Expo.",
    des: "Stock Expo. give you high qualities images for free. You can use for anything",
    img: "/pro3.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "https://stockexpo.vercel.app",
  }
];

export const testimonials = [
  {
    quote:
      "Collaborating with Abhishek Yadav has been an exemplary experience. Their exceptional technical acumen in developing full stack websites, applications, and UI/UX design has consistently propelled our projects to success. They are an invaluable asset to any professional team.",
    name: "Jigar Chheda",
    title: "Fouder & CEO of HitechCoders",
    profile: "/testimonial-1.webp",
  },
  {
    quote:
      "Working alongside Abhishek Yadav has been an inspiring experience. Their exceptional UI/UX skills consistently enhanced our projects, delivering user-friendly and visually appealing designs. Their creativity and attention to detail are unmatched, making them a valuable asset to our team.",
    name: "Harsha Agarwal",
    title: "UI/UX Designer",
    profile: "/testimonial-2.jpeg",
  },
  {
    quote:
      "Collaborating with Abhishek Yadav has been an exemplary experience. Their exceptional technical acumen in developing full stack websites, applications, and UI/UX design has consistently propelled our projects to success. They are an invaluable asset to any professional team.",
    name: "Jigar Chheda",
    title: "Fouder & CEO of HitechCoders",
    profile: "/testimonial-1.webp",
  },
];

export const companies = [
  {
    id: 1,
    name: "insureatoasis",
    img: "/oasis-logo.svg",
    nameImg: "/oasis-name.png",
  },
  {
    id: 2,
    name: "keydemand",
    img: "/keydemand-logo.svg",
    nameImg: "/keydemand-name.svg",
  },
  {
    id: 3,
    name: "wyldplanet",
    img: "/wyldplanet-logo.svg",
    nameImg: "/wyldplanet-name.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Junior Software Developer",
    companyName: "Boppo Technologies Pvt. Ltd.",
    date: {
      stateDate: "May, 2023",
      endDate: "Present",
    },
    desc: [
      `Managed end-to-end development of the complex
international website (Oasis), ensuring timely delivery and
surpassing client expectations.`,
      `Navigated complexities in Oasis website development,
collaborating with cross-functional teams to execute
innovative solutions, enhancing overall user experience.`,
    ],
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Mern Stack Developer - Internship",
    companyName: "Ingoase LLP",
    date: {
      stateDate: "Jul, 2022",
      endDate: "Aug, 2022",
    },
    desc: [
      `Create user interfaces, design and develop RESTful APIs, and
build data models.`,
      `Implement back-end service integration with front-end
components`,
    ],
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Full Stack Developer - Internship",
    companyName: "Applex Technologies Pvt. Ltd.",
    date: {
      stateDate: "Jun, 2022",
      endDate: "Jul, 2022",
    },
    desc: [
      `Design and develop web applications using Next.js,
React, and Redux.`,
      `Work with the team to develop a scalable and
maintainable codebase.`,
    ],
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Mern Stack Developer - Internship",
    companyName: "XCITEDUCATION WORLDWIDE",
    date: {
      stateDate: "Jan, 2022",
      endDate: "Apr, 2022",
    },
    desc: [
      `Create user interfaces, design and develop RESTful APIs, and
build data models.`,
      `Implement back-end service integration with front-end
components.`,
    ],
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    href : "https://github.com/webdevoliva123"
  },
  {
    id: 2,
    img: "/twit.svg",
    href : "https://x.com/Oliva1002"
  },
  {
    id: 3,
    img: "/link.svg",
    href : "https://www.linkedin.com/in/abhishek-yadav-142a03225/"
  },
];
