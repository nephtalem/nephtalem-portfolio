export const navItems = [
  { name: "Home", link: "#home" },
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  // {
  //   id: 5,
  //   title: "Currently building a JS Animation library",
  //   description: "The Inside Scoop",
  //   className: "md:col-span-3 md:row-span-2",
  //   imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
  //   titleClassName: "justify-center md:justify-start lg:justify-center",
  //   // img: "/b5.svg",
  //   spareImg: "/grid.svg",
  // },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Movie Search Application",
    des: "Easily search for movies by title, view cast, ratings, and release dates. Quickly find the perfect movie for any mood, from classics to new releases.",
    img: "/movie-search-app.png",
    iconLists: ["/re.svg", "/tail.svg", "/fm.svg"],
    link: "https://sweet-tartufo-ecc5f3.netlify.app/",
  },
  {
    id: 2,
    title: "Hospital Appointment website UI",
    des: "An intuitive interface to manage patients, appointments, doctor schedules, and billing efficiently, all in one place.",
    img: "/hospital.png",
    iconLists: ["/tail.svg", "/ts.svg"],
    link: "https://transcendent-beijinho-1fcd4e.netlify.app/",
  },

  {
    id: 3,
    title: "Animated Apple Iphone 3D Website",
    des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
    img: "/p4.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "/ui.apple.com",
  },
];

export const testimonials = [
  {
    quote:
      "This is to certify that Nephtalem Woldeyohanes successfully completed a 7-month internship program at Smartly Built. During his time with us, Nephtalem demonstrated punctuality, hard work, and a keen willingness to learn. He developed strong skills in HTML, CSS, and JavaScript, alongside robust coding practices with a focus on object-oriented design. Nephtalem's positive attitude and teamwork made him a valuable asset to our company, and I am confident he will continue to excel in his career.",
    name: "Dev Cham",
    title: "CEO of SmartlyBuilt",
    img: "/ceo.jpg",
  },
  {
    quote:
      "I am pleased to acknowledge that Nephtalem Woldeyohanes successfully served as a Technical Advisor for Windows and Office applications for 7 months. Throughout this period, Nephtalem demonstrated exceptional technical expertise and effectively resolved a wide range of issues. His problem-solving skills and clear communication made him a key asset to the team. Nephtalem's dedication and professionalism were outstanding, and I am confident he will excel in his future endeavors.",
    name: "Abubaker Sidiqq",
    title: "Manger of Concentrix",
    img: "/manager.jpg",
  },
];

export const companies = [
  // {
  //   id: 1,
  //   name: "cloudinary",
  //   img: "/cloud.svg",
  //   nameImg: "/cloudName.svg",
  // },
  // {
  //   id: 2,
  //   name: "appwrite",
  //   img: "/app.svg",
  //   nameImg: "/appName.svg",
  // },
  // {
  //   id: 3,
  //   name: "HOSTINGER",
  //   img: "/host.svg",
  //   nameImg: "/hostName.svg",
  // },
  // {
  //   id: 4,
  //   name: "stream",
  //   img: "/s.svg",
  //   nameImg: "/streamName.svg",
  // },
  // {
  //   id: 5,
  //   name: "docker.",
  //   img: "/dock.svg",
  //   nameImg: "/dockerName.svg",
  // },
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Engineer Intern",
    desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Technical Advisor",
    desc: "Provided technical support for Windows and Office applications, performed both basic and advanced troubleshooting to resolve customer issues, and advised customers on the best Microsoft services based on their needs.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
  },
  {
    id: 2,
    img: "/twit.svg",
  },
  {
    id: 3,
    img: "/link.svg",
  },
];
