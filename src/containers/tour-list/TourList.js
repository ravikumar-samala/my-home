import styles from "./TourList.module.css";
import Header from './../../components/common/header/Header';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TourListCard from './../../components/tour-list-card/TourListCard';

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
                        <TourListCard />
                    </Col>
                    <Col md={6}>
                        <TourListCard />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default TourList;