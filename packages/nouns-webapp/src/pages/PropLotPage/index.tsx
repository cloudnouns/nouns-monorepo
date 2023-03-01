import { Col, Row } from 'react-bootstrap';
import Section from '../../layout/Section';
import classes from './PropLot.module.css';
import PropLot from '../../components/PropLot';

interface PropLotPageProps {}

const PropLotPage: React.FC<PropLotPageProps> = props => {
  return (
    <Section fullWidth={false} className={classes.section}>
      <Col lg={10} className={classes.wrapper}>
        <Row className={classes.headerRow}>
          <span>Prop Lot</span>
          <h1>Submissions</h1>
        </Row>
        <PropLot />
      </Col>
    </Section>
  );
};

export default PropLotPage;
