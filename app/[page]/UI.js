"use client"
import React, { useEffect, useState } from "react";
import styles from './styles.module.scss'

export default function Index({ dataPage }) {
  // console.log(dataPage)
  // return null
  /////////////////////////////
  ////// TRANSITION SCHEDULE
  const [day, setDay] = useState({
    number: 0,
    date: [
      '(17<sup>th</sup> NOV)',
      '(18<sup>th</sup> NOV)',
      '(25<sup>th</sup> NOV)'
    ]
  })
  const [transition, setTransition] = useState(false)
  const type = 'full' // full or tag

  const handleTransition = () => {
    setTransition(true)

    setTimeout(() => {
      setTransition(false)
    }, 1100)
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (day.number >= 0 && day.number < 2) {
        setTimeout(() => {
          setDay(prevDay => ({
            ...prevDay,
            number: prevDay.number + 1
          }));
        }, 500)

        handleTransition()
      } else {
        setTimeout(() => {
          setDay(prevDay => ({
            ...prevDay,
            number: 0
          }));
        }, 500)
        handleTransition()
      }
    }, 10000)
    // console.log(day)
    return () => clearInterval(intervalId);
  }, [day.number])
  // console.log(dataPage && dataPage.slug == 'schedule')

  ////////////////////////////////
  /////// TEAM INGAME
  const [dayIngame, setDayIngame] = useState(1)
  const [match, setMatch] = useState(1)

  useEffect(() => {
    let queryString = window.location.search;
    let urlParams = new URLSearchParams(queryString);

    let day1match2 = urlParams.get('day1match2');
    let day2match1 = urlParams.get('day2match1');
    let day2match2 = urlParams.get('day2match2');
    let day2match3 = urlParams.get('day2match3');
    let day3match1 = urlParams.get('day3match1');
    let day3match2 = urlParams.get('day3match2');
    let day3match3 = urlParams.get('day3match3');
    let day3match4 = urlParams.get('day3match4');
    let day3match5 = urlParams.get('day3match5');
    
    if (day1match2) setMatch(2);
    if (day2match1) setMatch(1), setDayIngame(2);
    if (day2match2) setMatch(2), setDayIngame(2);
    if (day2match3) setMatch(3), setDayIngame(2);
    if (day3match1) setMatch(1), setDayIngame(3);
    if (day3match2) setMatch(2), setDayIngame(3);
    if (day3match3) setMatch(3), setDayIngame(3);
    if (day3match4) setMatch(4), setDayIngame(3);
    if (day3match5) setMatch(5), setDayIngame(3);
  }, [])

  ////////////////////////////////
  // RETURN
  return (
    <>
      {
        dataPage && dataPage.slug == 'schedule' &&
        <main className={`${styles.root1} ${transition ? styles.transition : ''}`}>
          <header dangerouslySetInnerHTML={{ __html: `GROUP STAGE - DAY ${day.number + 1} ${day.date[day.number]}` }} />
          <div className={styles.schedule}>
            <div className={styles.content}>
              {
                dataPage.schedule[day.number] && dataPage.schedule[day.number].map((e, i) => {
                  return (
                    <div key={i} className={styles.team}>
                      <div className={`${styles.team1} ${e.lose1 ? styles.lose : ''}`}>
                        {type === 'full' ? e.team1.toUpperCase() : e.tag1.toUpperCase()}
                        <img src={e.team1 == 'chicken slayers' ? `/images/logoteam/Teamchickenslayers.png` : `/images/logoteam/Team${e.team1}.png`} alt={e.team1} />
                      </div>

                      <span>VS</span>

                      <div className={`${styles.team2} ${e.lose2 ? styles.lose : ''}`}>
                        {type === 'full' ? e.team2.toUpperCase() : e.tag2.toUpperCase()}
                        <img src={e.team2 == 'chicken slayers' ? `/images/logoteam/Teamchickenslayers.png` : `/images/logoteam/Team${e.team2}.png`} alt={e.team2} />
                      </div>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </main>
      }

      {
        dataPage && dataPage.slug == 'teamingame' &&
        <main className={styles.root2} >
          <nav>
            <div>
              <img src={dataPage.day[dayIngame - 1].match[match - 1].team1 == 'chicken slayers' ? `/images/logoteam/Teamchickenslayers.png` : `/images/logoteam/Team${dataPage.day[dayIngame - 1].match[match - 1].team1}.png`} alt={dataPage.day[dayIngame - 1].match[match - 1].team1} />
              <span>{dataPage.day[dayIngame - 1].match[match - 1].team1.toUpperCase()}</span>
            </div>

            <div>
              <img src={dataPage.day[dayIngame - 1].match[match - 1].team2 == 'chicken slayers' ? `/images/logoteam/Teamchickenslayers.png` : `/images/logoteam/Team${dataPage.day[dayIngame - 1].match[match - 1].team2}.png`} alt={dataPage.team2} />
              <span>{dataPage.day[dayIngame - 1].match[match - 1].team2.toUpperCase()}</span>
            </div>
          </nav>
        </main>
      }
    </>
  )
}


