import Ruby from "../assets/images/Ruby.png";
import NextJS from "../assets/images/NextJS.jpg";
import SoloLeveling from "../assets/images/SoloLevelingLogo.jpg";
import Python from "../assets/images/Python.png";
import League from "../assets/images/LeagueofLegends.jpg";

export const cardData = [
  {
    title: "Ruby on Rails",
    image: Ruby,
    link: ["https://github.com/Airijko/E-Commerce-Ruby-on-Rails"],
    tag: ["Ruby on Rails", "E-Commerce", "Full Stack", "Bootstrap5"],
    description: [
      "I built a full-stack E-Commerce website using Ruby on Rails, with Bootstrap5 for a sleek frontend. It integrates Stripe API for payments, features Active Admin for easy administration, and utilizes Faker Gem for data generation.",
      {
        list: [
          "Solo Project",
          "Full Stack",
          "Stripe API",
          "Database Design",
          "Active Admin",
          "Faker Gem",
          "Bootstrap5",
        ],
      },
    ],
    download: "",
  },
  {
    title: "NextJS Blog",
    image: NextJS,
    link: [
      "https://github.com/Airijko/NextJS-PromptTopia-Tutorial",
      "https://next-js-prompt-topia-tutorial-git-main-airijko.vercel.app",
    ],
    tag: ["Blog", "Full Stack", "TailWindCSS"],
    description: [
      "I followed JavaScript Mastery's YouTube tutorial for NextJS 13. I used Tailwind CSS for the first time to learn new technologies and ensure a modern and engaging user experience. I also learned to integrate Google OAuth and deploy my site on Vercel.",
      {
        list: [
          "Self-Taught Project",
          "Blog Website",
          "Full Stack",
          "Google OAuth",
          "MongoDB",
          "TailWind CSS",
        ],
      },
    ],
    download: "",
  },
  {
    title: "Project Solo Leveling",
    image: SoloLeveling,
    link: ["https://github.com/Solo-Level-MC"],
    tag: ["Minecraft", "Java", "PaperMC", "Solo Leveling"],
    description: [
      "This is inspired by Solo Leveling. I'm creating a huge plugin pack for Minecraft PaperMC, using Java. I have a lot to learn. Nothing that I’ve learned in school was remotely close to this. There are so many different libraries to use.",
      {
        list: [
          "Minecraft PaperMC",
          "Java",
          "Plugin Pack",
          "Solo Leveling Theme",
          "MMO RPG",
          "Server Admin",
        ],
      },
    ],
    download: "https://modrinth.com/plugin/endless-skills",
  },
  {
    title: "Weather Application",
    image: Python,
    link: ["https://github.com/Airijko/Python-Weather-App"],
    tag: ["Python", "Weather", "Database", "Data Visualization"],
    description: [
      "I created a Weather Application in Python. Its main focus lies in scraping data from the web to grab weather information. All data scraped would be saved into a MySQL database which then could be visualized in graphs.",
      {
        list: [
          "Weather Application",
          "Python",
          "Scraper",
          "Matplotlib",
          "Interactive Graphs",
          "Database Design",
          "MySQL",
        ],
      },
    ],
    download:
      "https://github.com/Airijko/Python-Weather-App/releases/download/Main/weather_processor.exe",
  },
  {
    title: "Red League Website",
    image: League,
    link: ["https://github.com/Airijko/Red-LoL-Website-PHP"],
    tag: ["PHP", "Riot API", "Database"],
    description: [
      "This was my first PHP project. It was fun creating a site based on my interest in League of Legends. I designed a database and learned to use Riot Games’ API. I also created a login system, a blog/posts feature, and an admin dashboard. I overdid this project for how much it was worth.",
      {
        list: [
          "First PHP Project",
          "Raw PHP Website",
          "Riot API",
          "Login System",
          "Blog System",
          "CSV Files",
          "Database Design",
        ],
      },
    ],
    download: "",
  },
];
