import React from 'react';
import styles from './event-item.module.css'; // importing css modules
import Button from '../ui/button';

function EventItem(props) {
    const { title, image, date, location, id} = props

    const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    });

    const formattedAddress = location.replace(', ', '\n');

    const exploreLink = `/events/${id}`;

    return (  
        <li key={id} className={styles.item}>
            <img src={'/' + image} alt={title} />
            <div className={styles.content}>
                <div className={styles.summary}>
                    <h2>{title}</h2>
                </div>
                <div className={styles.date}> 
                    <time>{humanReadableDate}</time>
                </div>
                <div className={styles.address}> 
                    <address>{formattedAddress}</address>
                </div>
                <div className={styles.actions}>
                    <Button link={exploreLink} children={'Explore Event'}/>
                </div>
            </div>
        </li>
    );
}

export default EventItem;