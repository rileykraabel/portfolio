import NavBar from './NavBar.jsx';
import './Contact.css';

function Contact() {
  return (
    <>
      <NavBar />
      <div className="contact-page">
        <h2>Contact Me:</h2>
        <div className="contact-info">
          <p>Email: rileykraabel@gmail.com</p>
        </div>
      </div>
    </>
  );
}

export default Contact