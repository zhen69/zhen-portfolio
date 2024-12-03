import { projects, technicalCommunicationProjects } from "../data";

function ProjectCard({ title, img, time, description }) {
  return (
    <div
      className="flex w-8/12 rounded-lg mb-3"
    >
      <img src={img} width="50%" className="rounded-l-lg" />
      <div className="bg-card w-full rounded-r-lg p-5 flex flex-col gap-y-3">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="mb-2">{time}</p>
        <ul className="flex flex-col gap-2 list-disc px-5">
          {description.map((desc, index) => (
            <li key={index}>{desc}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function SmallCard({title, description, btnText, url }) {
  return (
    <div
      className="w-full h-72 rounded-lg bg-card p-7 flex flex-col gap-y-5 relative"
    >
      <h3 className="text-xl font-semibold">{title}</h3>
      <p>{description}</p>
      <button
        className="bg-gradient-to-r 
                from-blue-600 to-purple-500
                py-3 px-4 rounded-md absolute
                bottom-6"
      >
        <a href={url}>{btnText}</a>
      </button>
    </div>
  );
}

export default function Projects() {
  return (
    <section
      id="projects"
      className="mt-24 flex flex-col items-center gap-y-7 mb-11"
    >
      <h1
        className="
            text-center text-[42px] font-bold bg-clip-text 
            text-transparent bg-gradient-to-r 
            from-blue-600 to-purple-500 py-9"
      >
        Projects
      </h1>
      {projects.map((proj, index) => (
        <ProjectCard
          key={index}
          img={proj.img}
          title={proj.title}
          time={proj.time}
          description={proj.description}
        />
      ))}
      <h2
        className="
            text-center text-[30px] font-semibold bg-clip-text 
            text-transparent bg-gradient-to-r 
            from-blue-600 to-purple-500 py-9"
      >
        Technical Communication Projects
      </h2>
      <div className="grid grid-cols-4 w-8/12 gap-7">
        {technicalCommunicationProjects.map((item, index) => (
          <SmallCard
            key={index}
            title={item.title}
            url={item.url}
            btnText={item.btnText}
            description={item.description}
          />
        ))}
      </div>
    </section>
  );
}
