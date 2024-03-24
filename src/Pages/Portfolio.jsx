import Card from "../components/Card";
import Card2 from "../components/Card2";
import RedRiver from "../assets/images/RedRiver.jpg";

const Portfolio = () => {
  return (
    <section className="max-w-screen-xl mx-auto">
      <div className="grid grid-cols-3 gap-12 pt-12">
        <div className="flex flex-col items-center col-span-1 bg-green-500 p-2">
          <h1 className="font-quicksand font-bold uppercase whitespace-nowrap">
            <span className="text-5xl text-blue-200">Work Experience</span>
          </h1>
          <div className="mt-5 w-full">
            <Card
              name="Internship - Pixellriver"
              text={[
                "Student Lead Project",
                "React & Django",
                "Restful API",
                "PostgreSQL",
                "Grafana",
                "Material UI",
              ]}
              image={RedRiver}
              link="https://www.twitch.tv/airijko"
              date="June - August 2023"
            />
          </div>
        </div>
        <div className="flex flex-col col-span-2">
          <div className="bg-green-500 w-full"> col two</div>
          <div className="flex flex-row bg-red-500 w-full overflow-x-auto whitespace-nowrap">
            <Card2 title="test1" tag={["tag1", "tag2", "tag3"]} />
            <Card2 title="test2" tag={["tag1", "tag2", "tag3"]} />
            <Card2 title="test3" tag={["tag1", "tag2", "tag3"]} />
            <Card2 title="test4" tag={["tag1", "tag2", "tag3"]} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
