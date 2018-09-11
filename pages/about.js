import Layout from "../components/Layout";
var GifPlayer = require("react-gif-player");
const About = () => (
  <Layout>
    <div>
      <h1>About</h1>
      <p>A simple application to check the price of Bitcoin.</p>
      <GifPlayer
        gif="https://media1.tenor.com/images/73d09c9996f17bcbefc4c41bbda431ec/tenor.gif"
        still="https://media1.tenor.com/images/73d09c9996f17bcbefc4c41bbda431ec/tenor.gif"
      />
    </div>
  </Layout>
);
export default About;
