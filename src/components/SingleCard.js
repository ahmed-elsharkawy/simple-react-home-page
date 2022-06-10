import { Component } from "react";
import { Card, Button } from "react-bootstrap";

class SingleCard extends Component {
  render() {
    let { id, img, title, click } = this.props.data;

    return (
      <>
        <div className="col-md-6 col-lg-4 mt-3" key={id}>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={img} />
            <Card.Body>
              <Card.Title>{title || "Default Title"}</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">{click || "Default link"}</Button>
            </Card.Body>
          </Card>
        </div>
      </>
    );
  }
}

export default SingleCard;
