import AirijkoBanner from "../assets/images/AirijkoBanner.png";
import Aatrox_pixel from "../assets/images/Aatrox_pixel.gif";
import SocialIcons from "../constants/SocialIcons";

const About = () => {
  return (
    <section className="p-12 max-w-screen-xl mx-auto">
      <div className="flex flex-col items-center w-full">
        <img
          src={AirijkoBanner}
          alt="HomeImage"
          className="opacity-75 mt-5 border-white border-2 rounded-lg"
        />
        <div className="flex flex-row items-center justify-between w-full mt-2">
          <span className="font-quicksand text-gray-400">
            ▣ A content creator for fun
          </span>
          <div className="flex flex-row gap-2">
            <a href="https://www.youtube.com/@Airijko">
              <SocialIcons name="youtube" />
            </a>
            <a href="https://www.twitch.tv/airijko">
              <SocialIcons name="twitch" />
            </a>
            <a href="https://www.tiktok.com/@airijko">
              <SocialIcons name="tiktok" />
            </a>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 pt-5 h-[600px]">
        <div className="flex flex-col items-center">
          <h2 className="font-quicksand text-3xl font-bold uppercase">
            About Me
          </h2>
          <p className="flex flex-col font-grotesk mt-2">
            <span>
              I've always wanted to become a programmer in high school, but the
              school I attended, Faith Academy, didn't have such a course.
              College was the first time I touched coding. I struggled in my
              first year and wanted to instead be a server admin or network
              technician to avoid code, but everything started clicking in my
              second year during web development. I also saw the potential in
              programming. You are only limited by your imagination, and now
              it's even more true with tools like AI.
            </span>
          </p>
          <p className="flex flex-col text font-grotesk mt-8">
            <span>
              I volunteer at my church regularly as a teacher’s assistant and
              will sometimes teach myself whenever needed. One of my biggest
              goals is to create and run a social platform for Christians and
              Churches. As of writing this in early 2024, it has been on a halt.
              I realized you need to really think about design and not just push
              code. I hope to gain skills in engineering/design so I can come
              back to this project.
            </span>
          </p>
        </div>
        <div className="flex flex-col pl-8 pr-8">
          <div>
            <h2 className="font-quicksand text-3xl font-quicksand font-bold uppercase">
              Social Brand
            </h2>
            <p className="flex flex-col text font-grotesk mt-2">
              <span>
                I stream on Twitch and create YouTube videos for fun under the
                online name "Airijko". Which is a pun for "Aray ko" which means
                "ouch" in Tagalog.
              </span>
            </p>
          </div>
          <div className="mt-5">
            <div className="grid grid-cols-2 gap-2">
              <div className="flex flex-col">
                <h2 className="font-quicksand text-3xl font-bold uppercase">
                  Hobbies
                </h2>
                <p className="flex flex-col text font-grotesk mt-2 z-10">
                  <span>League of Legends</span>
                  <span>Minecraft</span>
                  <span>Programming</span>
                  <span>Volleyball</span>
                </p>
                <img
                  src={Aatrox_pixel}
                  alt="HomeImage"
                  className="w-full p-2 -mt-[75px] -ml-8 z-0"
                />
              </div>
              <div className="flex flex-col">
                <h2 className="font-quicksand text-3xl font-bold uppercase">
                  Identity
                </h2>
                <p className="flex flex-col text font-grotesk mt-2">
                  <span>
                    <strong>Name:</strong> Jonathan Jimena Jr.
                  </span>
                  <span>
                    <strong>Belief:</strong> Christian
                  </span>
                  <span>
                    <strong>Nick:</strong> Jojo
                  </span>
                  <span>
                    <strong>Birth Place:</strong> Philippines
                  </span>
                  <span>
                    <strong>Birth Day:</strong> September 6, 2002
                  </span>
                  <span>
                    <strong>Location:</strong> Canada
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
