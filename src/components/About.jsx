const About = () => {
    return (
      <section className="mt-16 w-full max-w-4xl mx-auto text-center">
        <h1 className="head_text">About <span className="orange_gradient">Me</span></h1>
        <p className="desc mt-5">
          Hello! I am Abhijai, the creator of BriefMe. With a passion for web development and artificial intelligence,
          I aim to build tools that simplify people's lives. This project leverages cutting-edge AI models to summarize articles efficiently and to get some really interesting insights about what you like from the articles.
        </p>
        <p className="desc mt-5">
          Explore the tool, learn more about AI, and feel free to connect with me on <a href="https://www.linkedin.com/in/abhijai-srivastava/" className="text-blue-500 underline">LinkedIn</a> or <a href="https://github.com/abhijai1510?tab=repositories" className="text-blue-500 underline">GitHub</a>.
        </p>
      </section>
    );
  };
  
  export default About;
  