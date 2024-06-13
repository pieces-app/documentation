import React, {useEffect, useState} from 'react';
import CTAButton from "@site/src/components/CTAButton";

type Event = {
  type: 'All' | 'Podcast' | 'Twitter Space' | 'Livestream' | 'Meetup'
  title: string;
  description: string;
  date: string;
  thumbnail?: string;
  link?: string;
}

const EventCarousel = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [eventTypeFilter, setEventTypeFilter] = useState<Event['type']>('All');
  const [events, setEvents] = useState<Event[]>([]);
  const [filteredEvents, setFilteredEvents] = useState<Event[]>([]);

  const categories = ['All', 'Podcast', 'Twitter Space', 'Livestream', 'Meetup', 'Conference'] as Event['type'][];

  useEffect(() => {
    const getEventsCSV = () => {
      const url = 'https://docs.google.com/spreadsheets/d/1KxveCdudvDSz2tHRYcOYAy6UHdpp9mPvbBHfbfRpGoI/gviz/tq?tqx=out:csv'

      fetch(url,{
        method: 'GET',
        headers: {
          'Content-Type': 'text/csv'
        }
      })
        .then(response => response.text())
        .then(text => {
          const rows = text.split('\n');
          // Remove quotes from headers
          const headers = rows[0].split(',').map(header => header.replace(/^"|"$/g, '')).map(header => header.toLowerCase().replace(/\s/g, '_'));
          const data = rows.slice(1).map(row => {
            const values = row.split('","').map(value => value.replace(/^"|"$/g, ''));
            const entry = headers.reduce((object, header, index) => {
              if (values[index] === '') {
                // @ts-ignore
                object[header] = null;
                return object;
              }

              // @ts-ignore
              object[header] = values[index];
              return object;
            }, {});
            return entry as Event;
          })

          setEvents(data as Event[]);
          setFilteredEvents(data as Event[]);
          setIsLoading(false);
        })
        .catch(error => {
          console.error('Error fetching events:', error)
          setIsLoading(false);
        })
    }

    getEventsCSV()
  }, [])

  useEffect(() => {
    const filteredEvents = events.filter(event => {
      if (eventTypeFilter.toLowerCase() === 'all') {
        return true;
      }

      return event.type.toLowerCase() === eventTypeFilter;
    })

    setFilteredEvents(filteredEvents);
  }, [eventTypeFilter])

  const today = new Date();

  const todaysEvents = filteredEvents.filter(event => {
    const eventDate = new Date(event.date);
    eventDate.setHours(0, 0, 0, 0); // Set event date to the start of the day
    return eventDate.getDay() === today.getDay()
  }).sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

  const upcomingEvents = filteredEvents.filter(event => {
    const eventDate = new Date(event.date);
    eventDate.setHours(0, 0, 0, 0); // Set event date to the start of the day
    return eventDate > today;
  }).sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

  const pastEvents = filteredEvents.filter(event => {
    const eventDate = new Date(event.date);
    eventDate.setHours(0, 0, 0, 0); // Set event date to the start of the day
    return eventDate < today; // Compare dates
  }).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <>
      <hr />

      <div className="category-filters">
        {categories.map((category, index) => (
          <span
            key={index}
            className={`category ${eventTypeFilter === category.toLowerCase() ? 'active' : ''}`}
            onClick={() => setEventTypeFilter(category.toLowerCase() as Event['type'])}
          >
            {category}
          </span>
        ))}
      </div>

      <h2
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
        }}
      >
        Today's Events
      </h2>

      <div className="carousel-container">
        {/*<button onClick={goToPrevious}>Previous</button>*/}
        {!isLoading ? (
          todaysEvents.length > 0 ? todaysEvents.map((event: Event, index: number) => (
            <div key={`${event.title}_${index}`} className={'carousel-card'}>
              <img src={event.thumbnail ?? '/assets/pfd_preview.png'} alt={event.title} style={{
                width: '100%',
                height: '175px',
                objectFit: 'cover',
                borderRadius: '6px 6px 0 0'
              }}/>

              <div style={{
                padding: '8px 12px',
              }}>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                  <span style={{
                    fontSize: '0.8rem',
                  }}>{event.date}</span>
                  <span style={{
                    fontSize: '0.8rem',
                    padding: '2px 4px',
                    borderRadius: '4px',
                    backgroundColor: 'var(--ifm-color-secondary)'
                  }}>{event.type}</span>
                </div>
                <span style={{
                  fontWeight: 'bold'
                }}>{event.title}</span>
                <p style={{
                  fontSize: '0.8rem',
                  flexGrow: 1,
                }}>{event.description}</p>
                <div className={'cta'}>
                  {event.link ? (
                    <CTAButton
                      label={'View Event'}
                      href={event.link}
                      type={'secondary'}
                    />
                  ) : (
                    <CTAButton
                      label={'Coming soon'}
                      type={'secondary'}
                    />
                  )}
                </div>
              </div>
            </div>
          )) : (
            <span>No ongoing events found...</span>
          )) : (
          <div className="carousel-container">
            <div className="ghost-card"></div>
          </div>
        )}
      </div>

      <h2>Upcoming Events</h2>

      <div className="carousel-container">
        {/*<button onClick={goToPrevious}>Previous</button>*/}
        {!isLoading ? (
          upcomingEvents.length > 0 ? upcomingEvents.map((event: Event, index: number) => (
            <div key={`${event.title}_${index}`} className={'carousel-card'}>
              <img src={event.thumbnail ?? '/assets/pfd_preview.png'} alt={event.title} style={{
                width: '100%',
                height: '175px',
                objectFit: 'cover',
                borderRadius: '6px 6px 0 0'
              }}/>

              <div style={{
                padding: '8px 12px',
              }}>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <span style={{
                  fontSize: '0.8rem',
                }}>{event.date}</span>
                  <span style={{
                    fontSize: '0.8rem',
                    padding: '2px 4px',
                    borderRadius: '4px',
                    backgroundColor: 'var(--ifm-color-secondary)'
                  }}>{event.type}</span>
                </div>
                <span style={{
                  fontWeight: 'bold'
                }}>{event.title}</span>
                <p style={{
                  fontSize: '0.8rem',
                  flexGrow: 1,
                }}>{event.description}</p>
                <div className={'cta'}>
                  {event.link ? (
                    <CTAButton
                      label={'View Event'}
                      href={event.link}
                      type={'secondary'}
                    />
                  ) : (
                    <CTAButton
                      label={'Coming soon'}
                      type={'secondary'}
                    />
                  )}
                </div>
              </div>
            </div>
          )) : (
            <span>No upcoming events found...</span>
          )) : (
          // <div className="spinner"></div>
          <div className="carousel-container">
            <div className="ghost-card"></div>
          </div>
        )}
      </div>

      <h2>Past Events</h2>

      <div className="carousel-container">
        {/*<button onClick={goToPrevious}>Previous</button>*/}
        {!isLoading ? (
          pastEvents.length > 0 ? pastEvents.map((event: Event, index: number) => (
            <div key={`${event.title}_${index}`} className={'carousel-card'}>
              <img src={event.thumbnail ?? '/assets/pfd_preview.png'} alt={event.title} style={{
                width: '100%',
                height: '175px',
                objectFit: 'cover',
                borderRadius: '6px 6px 0 0'
              }}/>

              <div style={{
                padding: '8px 12px',
              }}>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                  <span style={{
                    fontSize: '0.8rem',
                  }}>{event.date}</span>
                  <span style={{
                    fontSize: '0.8rem',
                    padding: '2px 4px',
                    borderRadius: '4px',
                    backgroundColor: 'var(--ifm-color-secondary)'
                  }}>{event.type}</span>
                </div>
                <span style={{
                  fontWeight: 'bold'
                }}>{event.title}</span>
                <p style={{
                  fontSize: '0.8rem',
                  flexGrow: 1,
                }}>{event.description}</p>
                <div className={'cta'}>
                  {event.link ? (
                    <CTAButton
                      label={'View Event'}
                      href={event.link}
                      type={'secondary'}
                    />
                  ) : (
                    <CTAButton
                      label={'Coming soon'}
                      type={'secondary'}
                    />
                  )}
                </div>
              </div>
            </div>
          )) : (
            <span>No past events found...</span>
          )) : (
          <div className="carousel-container">
            <div className="ghost-card"></div>
          </div>
        )}
      </div>
    </>
  );
};

export default EventCarousel;
