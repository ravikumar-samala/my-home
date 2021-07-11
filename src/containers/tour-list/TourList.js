import styles from "./TourList.module.css";
import Header from './../../components/common/header/Header';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

const TourList = () => {
    return (
        <div className={styles.tourListWraper}>
            <Header />
            <Container>
                <Jumbotron className={styles.tourListHeader}>
                    <div>
                        <h1>My Tours</h1>
                        <p>Manage your tours, create scenes, narrate your tour, and share them.</p>
                    </div>
                    <Button variant="warning" size="lg">Create Tour</Button>
                </Jumbotron>
                
                <Row>
                    <Col md={6}>
                        <Card className={styles.tourListCard}>
                            <Card.Body>
                                <Card.Title>
                                    <h2>My Dubai Tour</h2>
                                </Card.Title>
                                <Card.Text className="py-4">
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                                <div className={styles.tourListCardFooter}>
                                    <Button className={styles.tourListCardFooterButton}>View</Button>
                                    <Button className={styles.tourListCardFooterButton}>Edit</Button>
                                    <Button className={styles.tourListCardFooterButton}>Delete</Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default TourList;