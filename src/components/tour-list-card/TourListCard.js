import styles from "./TourListCard.module.css";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const TourListCard = () => {
    return (
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
    )
}

export default TourListCard;