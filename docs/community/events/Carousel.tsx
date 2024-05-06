import React, {useEffect, useState} from 'react';
import CTAButton from "@site/src/components/CTAButton";

type Event = {
  type: 'Podcast' | 'Twitter Space' | 'Livestream' | 'Meetup'
  title: string;
  description: string;
  date: string;
  thumbnail?: string;
  link?: string;
}

const Carousel = () => {
  const [upcomingEvents, setUpcomingEvents] = useState<Event[]>([]);
  const [pastEvents, setPastEvents] = useState<Event[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const getEventsCSV = () => {
      const url = 'https://docs.google.com/spreadsheets/d/1KxveCdudvDSz2tHRYcOYAy6UHdpp9mPvbBHfbfRpGoI/gviz/tq?tqx=out:csv'

      // Papa.parse(url, {
      //   download: true,
      //   header: true,
      //   transformHeader(header: string, index: number): string {
      //     return header.toLowerCase().replace(/\s/g, '_')
      //   },
      //   step(results: ParseStepResult<any>, parser: Parser) {
      //     console.log('Row:', results.data)
      //   },
      //   complete: (result) => {
      //     console.log('complete', result.data)
      //
      //     const events = result.data as Event[];
      //     setEvents(events);
      //
      //     console.log('Events:', events)
      //   },
      //   error(error, file) {
      //     console.error(error, file)
      //   },
      // });

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
          const now = new Date(); // Get the current date and time
          const data = rows.slice(1).map(row => {
            const values = row.split('","').map(value => value.replace(/^"|"$/g, ''));
            const entry = headers.reduce((object, header, index) => {
              if (values[index] === '') {
                object[header] = null;
                return object;
              }

              object[header] = values[index];
              return object;
            }, {});
            return entry as Event;
          })

          const upcomingEvents = data.filter(event => {
            const eventDate = new Date(event.date);
            return eventDate >= now; // Keep only events that are in the future
          }).sort((a, b) => {
            const dateA = new Date(a.date), dateB = new Date(b.date);
            // @ts-ignore
            return dateA - dateB; // Sort events in ascending order by date
          });

          setUpcomingEvents(upcomingEvents);

          const pastEvents = data.filter(event => {
            const eventDate = new Date(event.date);
            return eventDate < now; // Keep only events that are in the past
          }).sort((a, b) => {
            const dateA = new Date(a.date), dateB = new Date(b.date);
            // @ts-ignore
            return dateB - dateA; // Sort events in descending order by date
          })

          setPastEvents(pastEvents);
        })
        .catch(error => {
          console.error('Error fetching events:', error)
        })
    }

    getEventsCSV()
  }, [])

  // const goToPrevious = () => {
  //   setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : events.length - 1));
  // };
  //
  // const goToNext = () => {
  //   setCurrentIndex((prevIndex) => (prevIndex < events.length - 1 ? prevIndex + 1 : 0));
  // };

  return (
    <>
      <h2>Upcoming Events</h2>

      <div className="carousel-container">
        {/*<button onClick={goToPrevious}>Previous</button>*/}
        {upcomingEvents.length > 0 ? upcomingEvents.map((event: Event, index: number) => (
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
        )}
        {/*<button onClick={goToNext}>Next</button>*/}
      </div>

      <h2>Past Events</h2>

      <div className="carousel-container">
        {/*<button onClick={goToPrevious}>Previous</button>*/}
        {pastEvents.length > 0 ? pastEvents.map((event: Event, index: number) => (
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
          <span>No previous events found...</span>
        )}
        {/*<button onClick={goToNext}>Next</button>*/}
      </div>
    </>
  );
};

export default Carousel;
