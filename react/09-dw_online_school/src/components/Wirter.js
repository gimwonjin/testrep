import React from "react";
import Avatar from "./Avatar";
import styles from "./Wirter.module.css"
import cn from "classnames"

function Wirter({className ,wirter }) {
    const {name, level, profile: {photo}} = wirter;
  return (
    <div className={cn(className, styles.wirter)}>
      <div className={styles.info}>
        <div className={styles.name}>{name}</div>
        <div className={styles.level}>{level}</div>
      </div>
      <Avatar photoUrl={photo} />
    </div>
  );
}

export default Wirter;
