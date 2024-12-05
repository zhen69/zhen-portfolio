import { useRef, useState } from "react";
import EarthCanvas from "./canvas/Earth";

export default function Contact() {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setForm({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <section
      id="contact"
      className="mt-24 flex flex-col items-center gap-y-7 mb-11"
    >
      <h1
        className="
            text-[42px] font-bold bg-clip-text 
            text-transparent bg-gradient-to-r 
            from-blue-600 to-purple-500 py-9"
      >
        {"Let's Stay Connected!"}
      </h1>
      <div className="grid grid-cols-2 w-8/12 gap-10">
        <form
          ref={formRef}
          className="flex flex-col gap-8 bg-card p-11 rounded-lg"
          onSubmit={handleSubmit}
        >
          <h2
            className="
            text-[30px] font-bold bg-clip-text 
            text-transparent bg-gradient-to-r 
            from-blue-600 to-purple-500"
          >
            Contact
          </h2>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className="bg-tertiary py-4 px-6 rounded-lg outline-none border-none font-medium text-primary"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your web address?"
              className="bg-tertiary py-4 px-6 rounded-lg outline-none border-none font-medium text-primary"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What you want to say?"
              className="bg-tertiary py-4 px-6 rounded-lg outline-none border-none font-medium text-primary"
            />
          </label>

          <button
            type="submit"
            className="bg-gradient-to-r 
                from-blue-600 to-purple-500
                py-3 px-11 w-fit rounded-md"
          >
            Send
          </button>
        </form>
        <EarthCanvas />
      </div>
    </section>
  );
}
