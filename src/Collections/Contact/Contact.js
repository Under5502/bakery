import "../Contact/Contact.scss";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function Contact() {
  return (
    <div className="contact-container">
      <div className="contact-form">
        <div className="title">
          <h2 className="contact-h2">CONTACT US</h2>
        </div>

        <div className="form-submit">
          <Form className="form-container">
            <Form.Group className="form-header">
              <Form.Control
                className="name"
                type="text"
                placeholder="FIRST NAME"
              />
              <Form.Control
                className="name"
                type="text"
                placeholder="LAST NAME"
              />
            </Form.Group>

            <Form.Group className="form-body">
              <Form.Control
                className="name"
                type="text"
                placeholder="PHONE NUMBER"
              />
              <Form.Control className="name" type="email" placeholder="EMAIL" />
            </Form.Group>

            <Form.Group className="form-footer">
              <Form.Control
                className="form-footer-1"
                type="text"
                placeholder="Tell us what you need"
              />
            </Form.Group>

            <Button variant="dark" type="submit">
              SEND
            </Button>
          </Form>
        </div>
      </div>
      <div className="contact-form-image">
        <img
          className="img-contact"
          src="//bernicebakery.com/cdn/shop/files/Two_Food_Photograhers.jpg?v=1716473606&amp;width=1920"
          alt=""
          srcSet="//bernicebakery.com/cdn/shop/files/Two_Food_Photograhers.jpg?v=1716473606&amp;width=352 352w, //bernicebakery.com/cdn/shop/files/Two_Food_Photograhers.jpg?v=1716473606&amp;width=832 832w, //bernicebakery.com/cdn/shop/files/Two_Food_Photograhers.jpg?v=1716473606&amp;width=1200 1200w, //bernicebakery.com/cdn/shop/files/Two_Food_Photograhers.jpg?v=1716473606&amp;width=1920 1920w"
          width="560"
          height="797"
        />
      </div>
    </div>
  );
}

export default Contact;
