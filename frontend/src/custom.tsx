import React from 'react';
import styles from './custom.module.css';

function TopBanner(props: any) {
  return (
    <>
      <div className="row">
        <div className="col-3">
          <img src="./logo192.png" alt="Our company logo" />
        </div>
        <div className="col align-self-center text-start">
          <h1 className={styles.h1}>Cool cool -- {props.saying}</h1>
        </div>
      </div>
    </>
  );
}

export default TopBanner;
