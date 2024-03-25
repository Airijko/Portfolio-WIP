const Project = ({ title, image, link, description }) => {
  function renderParagraphs(description) {
    const paragraphs = description.filter((item) => !item.list);
    return paragraphs.map((item, index) => <p key={index}>{item}</p>);
  }

  function renderLists(description) {
    const lists = description.filter((item) => item.list);
    return lists.map((item, index) => (
      <ul key={index} className="font-grotesk">
        {item.list.map((listItem, listIndex) => (
          <li key={listIndex}>{listItem}</li>
        ))}
      </ul>
    ));
  }

  return (
    <div className="grid grid-cols-3 h-[450px] gap-5">
      <div className="col-span-2 flex flex-col justify-between h-full bg-gray-900 p-5 rounded-xl">
        <div className="flex flex-col">
          <h1 className="text font-bold font-sora text-4xl">{title}</h1>
          <div className="font-grotesk text-md w-4/5">
            {renderParagraphs(description)}
          </div>
        </div>
        {renderLists(description)}
      </div>
      <div className="col-span-1 flex flex-col">
        <div>
          <img src={image} alt={title} className="rounded-lg" />
        </div>
        <div className="text-sm font-code">
          <a
            href={link[0]}
            className="text-blue-500 hover:text-blue-700 transition duration-300 ease-in-out"
          >
            Source Code
          </a>
        </div>
        {link[1] && (
          <div className="mt-auto ml-auto">
            <a
              type="button"
              href={link[1]}
              class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
              Visit Website
            </a>
          </div>
        )}
      </div>
    </div>
  );
};
export default Project;
