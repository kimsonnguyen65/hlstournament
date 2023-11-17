"use client"
import React, { useEffect, useState } from "react";
import styles from './styles.module.scss'

export default function Index({ dataPage }) {
  const [day, setDay] = useState({
    number: 0,
    date: [
      '(17<sup>th</sup> NOV)',
      '(18<sup>th</sup> NOV)',
      '(25<sup>th</sup> NOV)'
    ]
  })
  const type = 'full' // full or tag

  /////////////////////////////
  ////// TRANSITION
  const [transition, setTransition] = useState(false)

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
    </>
  )
}


