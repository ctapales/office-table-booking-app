import axios from "axios";
import React, { useEffect, useState } from "react";
import { Form, Button, Card, Col, Row } from "react-bootstrap";
import authHeader from "../../services/auth-header";
import * as API from "./../../services/api";

function LayoutImage({ officeId }) {
  const [office, setOffice] = useState([]);
  const [image, setImage] = useState("");

  useEffect(
    () => {
      axios
        .get(`${API.URL}/office/getOfficeById/${officeId}`, {
          headers: authHeader()
        })
        .then(response => {
          setOffice(response.data);
        });
    },
    [officeId]
  );

  function handleImageUpload(event) {
    event.preventDefault();

    const data = image.split(",")[1];
    let raw = window.atob(data);
    let rawLength = raw.length;
    let array = new Uint8Array(new ArrayBuffer(rawLength));
    for (let i = 0; i < rawLength; i++) {
      array[i] = raw.charCodeAt(i);
    }
    let img = [];
    for (let i = 0; i < rawLength; i++) {
      array[i] = raw.charCodeAt(i);
      img.push(array[i]);
    }
  }

  function handleImageChange(event) {
    let reader = new FileReader();
    let file = event.target.files[0];

    reader.onloadend = () => {
      setImage(reader.data);
    };

    reader.readAsDataURL(file);
  }

  return (
    <React.Fragment>
      <Card className="reservation-form mt-5">
        <Card.Img variant="top" src={'data:image/png;base64, ' + office.layout} />
        <Card.Body>
          <Card.Title>
            Office {office.number} Layout
          </Card.Title>
          <Form>
            <Row>
              <Col xs={10}>
                <Form.Group className="form-group">
                  <Form.Label>Enter Office Layout Image</Form.Label>
                  <Form.Control type="file" />
                </Form.Group>
              </Col>
              <Col xs={2}>
                <Form.Group className="form-group btn">
                  <Button variant="primary" type="submit">
                    Upload
                  </Button>
                </Form.Group>
              </Col>
            </Row>
          </Form>
        </Card.Body>
      </Card>
    </React.Fragment>
  );
}

export default LayoutImage;
