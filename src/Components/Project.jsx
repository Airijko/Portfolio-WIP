const Project = ({ title, image, link, description, downloadLink }) => {
  function renderParagraphs(description) {
    const paragraphs = description.filter((item) => !item.list);
    return paragraphs.map((item, index) => <p key={index}>{item}</p>);
  }

  function renderLists(description) {
    const lists = description.filter((item) => item.list);
    return lists.map((item, index) => (
      <ul key={index} className="font-grotesk">
        {item.list.map((listItem, listIndex) => (
          <li
            key={listIndex}
            className="inline-block shadow-lg bg-gray-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 mr-2 mb-2"
          >
            {listItem}
          </li>
        ))}
      </ul>
    ));
  }

  return (
    <div className="grid grid-cols-3 h-full gap-5">
      <div className="col-span-2 flex flex-col justify-between h-full border-l-8 border-green-500 pt-5 pb-5 pl-8 md:pr-5 lg:pr-12">
        <div className="flex flex-col">
          <h1 className="text font-bold font-sora text-4xl">{title}</h1>
          <div className="font-grotesk text-md">
            {renderParagraphs(description)}
          </div>
        </div>
        <div className="md:pt-0 pt-4">{renderLists(description)}</div>
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
        <div className="flex flex-col mt-auto ml-auto">
          {downloadLink ? (
            <a
              type="button"
              href={downloadLink}
              class="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
              Download
            </a>
          ) : null}
          {link[1] && (
            <a
              type="button"
              href={link[1]}
              class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
              Visit Website
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
export default Project;
