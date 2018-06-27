import React from 'react';
import * as styles from './left-nav-panel.css';

class TocElement extends React.Component {
	render() {
		return (
			<div className={styles.tocElementContainer}>
				<div className={styles.tocTextLine} />
				<div className={styles.tocTextLine} />
				<div className={styles.tocTextLine} />
			</div>
		);
	}
}

export default TocElement;
