import React from "react";
import JojoHomeImage from "../assets/images/JojoHomeImage.png";
import SocialIcons from "../constants/SocialIcons";

const Home = () => {
  return (
    <section className="background pt-12 pb-12">
      <div className="max-w-screen-xl mx-auto md:grid md:grid-cols-2 grid-cols-1 items-center">
        <div className="flex flex-col items-center">
          <h1 className="font-quicksand font-bold uppercase whitespace-nowrap">
            <span className="text-5xl text-red-500">Jonathan</span>
            <span className="text-5xl"> Jimena Jr.</span>
          </h1>
          <p className="mb-5">Leveling Up One Algorithm at a Time</p>
          <img
            src={JojoHomeImage}
            alt="HomeImage"
            className="w-[400px] h-[400px] opacity-75"
          />
        </div>
        <div className="flex w-full justify-center">
          <div className="w-[400px]">
            <h1 className="font-quicksand uppercase whitespace-nowrap">
              <span className="text text-gray-600">━ Introduction</span>
            </h1>
            <h2 className="flex flex-col">
              <span className="font-code text-blue-100 text-2xl uppercase">
                BIT Graduate 2024
              </span>
              <span className="font-quicksand text-yellow-500 font-bold text-3xl">
                Software Developer
              </span>
            </h2>
            <p className="flex flex-col text font-grotesk mt-2">
              <span>
                I'm a Business Information Technology Graduate at managing
                servers and database, UI/UX design, and networking.
              </span>
            </p>

            <div className="flex flex-row gap-5 mt-10">
              <a href="https://www.linkedin.com/in/jonathan-jimena-jr/">
                <SocialIcons name="linkedin" />{" "}
              </a>
              <a href="https://github.com/Airijko">
                <SocialIcons name="github" />
              </a>
              <a href="https://www.youtube.com/@Airijko">
                <SocialIcons name="youtube" />
              </a>
              <a href="https://www.twitch.tv/airijko">
                <SocialIcons name="twitch" />
              </a>
              <a href="https://discord.com/invite/ra7EbEvM4K">
                <SocialIcons name="discord" />
              </a>
              <a href="https://www.tiktok.com/@airijko">
                <SocialIcons name="tiktok" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
