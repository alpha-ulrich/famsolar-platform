import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Home() {
  return (
    <Container>
      <Row>
        <Col md={2}>Logo</Col>
        <Col md={8}>Blank</Col>
        <Col md={2}>Contact</Col>
      </Row>
      <Row>
        <Col md={4}>Item1</Col>
        <Col md={4}>Item2</Col>
        <Col md={4}>Item3</Col>
      </Row>
      <Row>
        <Col md={6}>Item4</Col>
        <Col md={6}>Item5</Col>
      </Row>
    </Container>
  );
}
