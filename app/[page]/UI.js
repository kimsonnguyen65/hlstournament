"use client"
import React, { useEffect, useState, useMemo } from "react";
import styles from './styles.module.scss'
import Schedule from '../components/Schedule';
import TeamIngame from '../components/TeamIngame';
import { useSchedule } from '../hooks/useSchedule';
import { useCountdown } from '../hooks/useCountdown';
import { TournamentProvider, useTournament } from '../context/TournamentContext';
import { handleMatchParams, handleMatchConfigs } from '../utils/urlParams';
import { sortResults } from '../utils/sorting';

// DATE TIME
import { calculateCountdown } from '@/utils/countdown';

function PageUI({ dataPage }) {
  const memoizedDataPage = useMemo(() => dataPage, [dataPage]);
  const { day, setDay, transition } = useSchedule();
  const [dayIngame, setDayIngame] = useState(1);
  const [match, setMatch] = useState(1);
  const type = 'full'; // full or tag
  const {
    bg,
    setBG,
    team1,
    setTeam1,
    team2,
    setTeam2,
    logoteam1,
    setLogoTeam1,
    logoteam2,
    setLogoTeam2,
    hourCountDown,
    setHourCountDown,
    minuteCountDown,
    setMinuteCountDown,
    secondCountDown,
    setSecondCountDown,
  } = useTournament();

  const targetTimezone = 'Asia/Ho_Chi_Minh';
  const [countdown, setCountdown] = useState({
    minutes: minuteCountDown,
    seconds: secondCountDown
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const target = new Date();
      target.setHours(hourCountDown, minuteCountDown, secondCountDown, 0);

      if (now > target) {
        target.setDate(target.getDate() + 1);
      }

      const diff = target - now;
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      setCountdown({
        minutes: minutes,
        seconds: seconds
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [hourCountDown, minuteCountDown, secondCountDown]);

  const handleTransition = useMemo(() => () => {
    setBG(true)

    setTimeout(() => {
      setBG(false)
    }, 1100)
  }, [])

  useEffect(() => {
    let intervalId;
    let timeoutId;

    const updateDay = () => {
      if (day.number >= 0 && day.number < 4) {
        setDay(prevDay => ({
          ...prevDay,
          number: prevDay.number + 1
        }));
      } else {
        setDay(prevDay => ({
          ...prevDay,
          number: 0
        }));
      }
      handleTransition()
    };

    // Delay the first update to ensure client-side hydration is complete
    timeoutId = setTimeout(() => {
      intervalId = setInterval(updateDay, 10000)
    }, 1000)

    return () => {
      clearTimeout(timeoutId)
      clearInterval(intervalId)
    }
  }, [day.number, handleTransition, setDay])

  useEffect(() => {
    handleMatchParams(setMatch, setDayIngame);
  }, [setMatch, setDayIngame]);

  useEffect(() => {
    handleMatchConfigs(
      setBG,
      setHourCountDown,
      setMinuteCountDown,
      setTeam1,
      setTeam2,
      setLogoTeam1,
      setLogoTeam2
    );
  }, [setBG, setHourCountDown, setMinuteCountDown, setTeam1, setTeam2, setLogoTeam1, setLogoTeam2]);

  const sortedResults = useMemo(() => {
    return sortResults(memoizedDataPage?.result);
  }, [memoizedDataPage?.result]);

  ////////////////////////////////
  // RETURN
  return (
    <>
      {dataPage && dataPage.slug === 'schedule' && (
        <Schedule
          schedule={dataPage.schedule}
          day={day}
          date={day.date}
          transition={transition}
        />
      )}

      {dataPage && dataPage.slug === 'teamingame' && (
        <TeamIngame day={dayIngame} match={match} data={dataPage} />
      )}

      {dataPage && dataPage.slug === 'nextgame' && (
        <main className={`${styles.root3} ${bg ? styles.bg : ''}`}>
          <header dangerouslySetInnerHTML={{ __html: `FINAL STAGE - 8<sup>th</sup> DEC ` }} />
          <div className={styles.board}>
            <div className={styles.content}>
              <div>
                <h2>COMING UP NEXT</h2>
                <div className={styles.team}>
                  <div className={styles.team1}>
                    {team1}
                    <img src={`/images/logoteam/Team${logoteam1}.png`} alt={team1} />
                  </div>

                  <span>VS</span>

                  <div className={styles.team2}>
                    {team2}
                    <img src={`/images/logoteam/Team${logoteam2}.png`} alt={team2} />
                  </div>
                </div>

                <p className={styles.time}>
                  <span>{countdown.minutes < 10 ? '0' + countdown.minutes : countdown.minutes}</span>
                  <span>:</span>
                  <span>{countdown.seconds < 10 ? '0' + countdown.seconds : countdown.seconds}</span>
                </p>
              </div>
            </div>
          </div>
        </main>
      )}

      {dataPage && dataPage.slug === 'result' && (
        <main className={`${styles.root4} ${bg ? styles.bg : ''}`}>
          <div className={styles.board_layer}>
            <table className={styles.result_board}>
              <thead>
                <tr>
                  <th>Team</th>
                  <th>Result</th>
                  <th>Kill</th>
                </tr>
              </thead>
              <tbody>
                {sortedResults.map((e, i) => {
                  let totalKill = e.kill.reduce((acc, current) => acc + current, 0);
                  return (
                    <tr key={i}>
                      <td>
                        <img
                          src={e.team === 'chicken slayers'
                            ? `/images/logoteam/Teamchickenslayers.png`
                            : `/images/logoteam/Team${e.team}.png`}
                          alt={e.team}
                        />
                        {e.team.toUpperCase()}
                      </td>
                      <td>{`${e.win} - ${e.lose}`}</td>
                      <td>{totalKill}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </main>
      )}

      {dataPage && dataPage.slug === 'nextday' && (
        <main className={`${styles.root5} ${bg ? styles.bg : ''}`}>
          <header dangerouslySetInnerHTML={{ __html: `GROUP STAGE - DAY 3 (25<sup>th</sup> NOV)` }} />
          <div className={styles.schedule}>
            <div className={styles.content}>
              {dataPage.schedule[2]?.map((e, i) => (
                <div key={i} className={styles.team}>
                  <div className={`${styles.team1} ${e.lose1 ? styles.lose : ''}`}>
                    {type === 'full' ? e.team1.toUpperCase() : e.tag1.toUpperCase()}
                    <img
                      src={e.team1 === 'chicken slayers'
                        ? `/images/logoteam/Teamchickenslayers.png`
                        : `/images/logoteam/Team${e.team1}.png`}
                      alt={e.team1}
                    />
                  </div>

                  <span>VS</span>

                  <div className={`${styles.team2} ${e.lose2 ? styles.lose : ''}`}>
                    {type === 'full' ? e.team2.toUpperCase() : e.tag2.toUpperCase()}
                    <img
                      src={e.team2 === 'chicken slayers'
                        ? `/images/logoteam/Teamchickenslayers.png`
                        : `/images/logoteam/Team${e.team2}.png`}
                      alt={e.team2}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
      )}

      {dataPage && dataPage.slug === 'test' && (
        <main className={styles.test}>
          <ul>
            {[1, 2, 3, 4, 5, 6].map((_, i) => (
              <li key={i}>
                <div className={styles.articleItem}>
                  <div className={styles.img}></div>
                  <div className={styles.tag}>tag thứ 1</div>
                  <div className={styles.title}>Sản phẩm 1</div>
                  <div className={styles.btn}>Liên hệ</div>
                </div>
              </li>
            ))}
          </ul>
        </main>
      )}
    </>
  )
}

export default function PageUIWithProvider({ dataPage }) {
  return (
    <TournamentProvider>
      <PageUI dataPage={dataPage} />
    </TournamentProvider>
  );
}


