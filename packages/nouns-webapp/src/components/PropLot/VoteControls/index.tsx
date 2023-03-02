import { useEthers } from '@usedapp/core';
import Davatar from '@davatar/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretUp, faCaretDown } from '@fortawesome/free-solid-svg-icons';
import classes from './VoteControls.module.css';

const VoteControls = () => {
  const calculatedVoteCount = 235;
  return (
    <div className={classes.wrapper}>
      <div className={classes.avatars}></div>

      <div className={classes.controls}>
        <svg className={classes.arrowUp} viewBox="0 0 20 12" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M9.27942 0.748845C9.67282 0.340012 10.3272 0.340012 10.7206 0.748845L17.0308 7.30662C17.6421 7.94193 17.1919 9 16.3102 9H3.68977C2.80811 9 2.35788 7.94193 2.9692 7.30662L9.27942 0.748845Z"
            fill="black"
          />
        </svg>

        <span>{calculatedVoteCount}</span>

        <svg className={classes.arrowDown} viewBox="0 0 20 12" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M7.27942 8.25115C7.67282 8.65999 8.32718 8.65999 8.72058 8.25115L15.0308 1.69338C15.6421 1.05807 15.1919 0 14.3102 0H1.68977C0.808114 0 0.357875 1.05807 0.969197 1.69338L7.27942 8.25115Z"
            fill="black"
          />
        </svg>
      </div>
    </div>
  );
};

export default VoteControls;
