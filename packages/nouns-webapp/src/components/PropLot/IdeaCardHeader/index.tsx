import clsx from 'clsx';
import classes from './IdeaCardHeader.module.css';
import VoteControls from '../VoteControls';

const IdeaCardHeader = () => {
  const tags = ['Request', 'Community', 'Governance'];
  const comments = [1, 1, 1];

  return (
    <>
      {/* mobile header */}
      <div className={classes.mobileWrapper}>
        <div className={classes.mobileHeader}>
          <span className={classes.mobileMeta}>
            <span>123</span>
            <span>badublanc.eth</span>
          </span>

          <VoteControls />
        </div>

        <span className={classes.mobileTitle}>PPP (Perpertual POAP Program Continuation)</span>

        {tags && tags.length && (
          <div className={classes.tagWrapper}>
            {tags.map((tag, i) => {
              return (
                <span key={i} className={clsx(classes.tag)}>
                  {tag}
                </span>
              );
            })}
            <span className={classes.comment}>
              {comments.length} {comments.length === 1 ? 'comment' : 'comments'}
            </span>
          </div>
        )}
      </div>

      {/* desktop header */}
      <div className={classes.desktopWrapper}>
        <div className={classes.desktopHeader}>
          <div className={classes.desktopMeta}>
            <span>182</span>
            <span>PPP (Perpetual POAP Program Continuation)</span>
          </div>

          <VoteControls />
        </div>

        <div className={classes.desktopMidRow}>
          <div className={classes.midRow1}>
            <span className={classes.comment}>badublanc.eth</span>
            {tags && tags.length && (
              <div className={classes.tagWrapper}>
                {tags.map((tag, i) => {
                  return (
                    <span key={i} className={clsx(classes.tag)}>
                      {tag}
                    </span>
                  );
                })}
              </div>
            )}
          </div>

          <span className={classes.comment}>
            {comments.length} {comments.length === 1 ? 'comment' : 'comments'}
          </span>
        </div>
      </div>
    </>
  );
};

export default IdeaCardHeader;
