import styles from "./TourList.module.css";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

const TourList = () => {
    return (
        <>
            <Container>
                <h1 className={styles.header}>Heading</h1>
                <Button>Test</Button>
            </Container>
        </>
    )
}

export default TourList;