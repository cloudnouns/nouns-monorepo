import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useEthers } from '@usedapp/core';
import clsx from 'clsx';
import classes from './IdeaCard.module.css';
import IdeaCardHeader from '../IdeaCardHeader';
import { Button } from 'react-bootstrap';

const IdeaCard = () => {
  const { account } = useEthers();
  const history = useHistory();
  const deleted = false;

  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className={classes.cardWrapper}>
      {deleted ? (
        <div className={clsx(classes.card, classes.notFound)}>This idea cannot be found.</div>
      ) : (
        <div className={classes.card} onClick={() => setIsOpen(!isOpen)}>
          <IdeaCardHeader />

          {isOpen && (
            <>
              <div className={classes.summary}>
                <span className={classes.summaryContent}>content</span>
              </div>

              <div className={classes.footer}>
                <span className={classes.footerTextWrapper}>
                  badublanc.eth | 2 nouns | Mar 01, 2023
                </span>

                <span className={classes.footerBtnWrapper}>
                  <Button className={clsx(classes.detailsBtn, 'btn')}>Details</Button>
                </span>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default IdeaCard;
