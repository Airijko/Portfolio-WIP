import Card from "../components/Card";
import RedRiver from "../assets/images/RedRiver.jpg";

const Portfolio = () => {
  return (
    <section className="grid grid-cols-2 items-center pt-12 h-[600px]">
      <div className="flex flex-col items-center p-12">
        <h1 className="font-quicksand font-bold uppercase whitespace-nowrap">
          <span className="text-5xl text-blue-200">Work Experience</span>
        </h1>
        <div className="mt-8">
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
            xSize="500px"
            ySize="275px"
          />
        </div>
      </div>
      <div className="flex flex-col items-center p-12"></div>
    </section>
  );
};

export default Portfolio;
