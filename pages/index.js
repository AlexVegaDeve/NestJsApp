import styles from '../styles/Home.module.css';
import { getFeaturedEvents } from '../dummy-data';
import EventList from '../components/Events/event-list';

export default function Home() {
  const featuredEvents = getFeaturedEvents();

  return (
    <div className={styles.container}>
      <EventList items={featuredEvents}/>
    </div>
  )
}
