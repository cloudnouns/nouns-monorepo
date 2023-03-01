import { Alert, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { useEthers } from '@usedapp/core';
import clsx from 'clsx';
import classes from './PropLot.module.css';
import DropdownFilter from './DropdownFilter';
import IdeaCard from './IdeaCard';

interface PropLotProps {}

const PropLot: React.FC<PropLotProps> = props => {
  const { account } = useEthers();
  const history = useHistory();

  const hasNouns = false;
  const data = { propLot: { ideas: [1, 1, 1] } };

  return (
    <div>
      {/* conditional copy */}
      {!hasNouns && (
        <div className={classes.copy}>
          {!account ? (
            <p>Connect wallet to submit an idea.</p>
          ) : (
            <p>Only Noun owners can submit.</p>
          )}
        </div>
      )}

      {/* actions */}
      <div className={classes.actionWrapper}>
        <div className={classes.filterWrapper}>
          <DropdownFilter />
          <DropdownFilter />
          <DropdownFilter />
        </div>

        <div className={classes.btnWrapper}>
          <Button
            disabled={!hasNouns}
            className={clsx(classes.createBtn, hasNouns ? classes.btnIsOwner : classes.btnNotOwner)}
            onClick={() => history.push('/proplot/create')}
          >
            New Submission
          </Button>
        </div>
      </div>

      {/* ideas */}
      <div>
        {data?.propLot?.ideas?.length ? (
          data?.propLot?.ideas.map((idea, i) => {
            return <IdeaCard key={i} />;
          })
        ) : (
          <Alert variant="secondary">
            <Alert.Heading>No ideas found.</Alert.Heading>
            <p>We couldn't find any ideas for this search.</p>
          </Alert>
        )}
      </div>
    </div>
  );
};

export default PropLot;
