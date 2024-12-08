"use client"
import React, { useEffect, useState } from "react";
import styles from './styles.module.scss'

// DATE TIME
import { calculateCountdown } from '@/utils/countdown';

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
      if (day.number >= 0 && day.number < 4) {
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

  // console.log(dataPage.schedule[day.number])

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
  /////// LAYOUT NEXTGAME
  const [bg, setBG] = useState(false)
  const [team1, setTeam1] = useState('Z2')
  const [team2, setTeam2] = useState('TCS')
  const [logoteam1, setLogoTeam1] = useState('zum2')
  const [logoteam2, setLogoTeam2] = useState('chickenslayers')

  const targetTimezone = 'Asia/Ho_Chi_Minh'; // (GMT+7)
  const [hourCountDown, setHourCountDown] = useState(19)
  const [minuteCountDown, setMinuteCountDown] = useState(45)
  const [secondCountDown, setSecondCountDown] = useState(0)
  const [countdown, setCountdown] = useState(
    calculateCountdown(hourCountDown, minuteCountDown, secondCountDown, targetTimezone)
  );

  useEffect(() => {
    const countdownInterval = setInterval(() => {
      const newCountdown = calculateCountdown(hourCountDown, minuteCountDown, secondCountDown, targetTimezone);
      setCountdown(newCountdown);

      // console.log(newCountdown.minutes, newCountdown.seconds)

      // Check if the target time has been reached
      if (newCountdown.minutes <= 0 && newCountdown.seconds <= 0) {
        console.log('Countdown reached!'); // You can perform any action when the countdown reaches zero
        clearInterval(countdownInterval); // Stop the countdown interval
      }
    }, 1000);

    // Cleanup the interval on component unmount
    return () => clearInterval(countdownInterval);
  }, [hourCountDown, minuteCountDown, secondCountDown]);

  useEffect(() => {
    let queryString = window.location.search;
    let urlParams = new URLSearchParams(queryString);

    let bg = urlParams.get('bg');
    let match2 = urlParams.get('match2');
    let bgmatch2 = urlParams.get('bgmatch2');
    let match3 = urlParams.get('match3');
    let bgmatch3 = urlParams.get('bgmatch3');
    let match4 = urlParams.get('match4');
    let bgmatch4 = urlParams.get('bgmatch4');
    let match5 = urlParams.get('match5');
    let bgmatch5 = urlParams.get('bgmatch5');
    let match6 = urlParams.get('match6');
    let bgmatch6 = urlParams.get('bgmatch6');

    if (bg) setBG(true)
    if (match2) setHourCountDown(15), setMinuteCountDown(30), setTeam1('COM'), setTeam2('TCS'), setLogoTeam1('combatant'), setLogoTeam2('chickenslayers')
    if (bgmatch2) setBG(true), setHourCountDown(15), setMinuteCountDown(30), setTeam1('COM'), setTeam2('TCS'), setLogoTeam1('combatant'), setLogoTeam2('chickenslayers')
    if (match3) setHourCountDown(16), setMinuteCountDown(30), setTeam1('COM'), setTeam2('TCS'), setLogoTeam1('combatant'), setLogoTeam2('chickenslayers')
    if (bgmatch3) setBG(true), setHourCountDown(16), setMinuteCountDown(30), setTeam1('COM'), setTeam2('TCS'), setLogoTeam1('combatant'), setLogoTeam2('chickenslayers')
    if (match4) setHourCountDown(17), setMinuteCountDown(30), setTeam1('PDSI'), setTeam2('TCS'), setLogoTeam1('pdsi'), setLogoTeam2('chickenslayers')
    if (bgmatch4) setBG(true), setHourCountDown(17), setMinuteCountDown(30), setTeam1('PDSI'), setTeam2('TCS'), setLogoTeam1('pdsi'), setLogoTeam2('chickenslayers')
    if (match5) setHourCountDown(18), setMinuteCountDown(30), setTeam1('PDSI'), setTeam2('TCS'), setLogoTeam1('pdsi'), setLogoTeam2('chickenslayers')
    if (bgmatch5) setBG(true), setHourCountDown(18), setMinuteCountDown(30), setTeam1('PDSI'), setTeam2('TCS'), setLogoTeam1('pdsi'), setLogoTeam2('chickenslayers')
    if (match6) setHourCountDown(19), setMinuteCountDown(30), setTeam1('PDSI'), setTeam2('TCS'), setLogoTeam1('pdsi'), setLogoTeam2('chickenslayers')
    if (bgmatch6) setBG(true), setHourCountDown(19), setMinuteCountDown(30), setTeam1('PDSI'), setTeam2('TCS'), setLogoTeam1('pdsi'), setLogoTeam2('chickenslayers')
    // test
    let test = urlParams.get('test');
    if (test) setHourCountDown(14), setMinuteCountDown(30), setTeam1('PDSI'), setTeam2('2K'), setLogoTeam1('pdsi'), setLogoTeam2('2k')

  }, [])

  ////////////////////////////////
  //////// RESULT BOARD
  dataPage?.result?.sort(function (a, b) {
    // Compare "win" properties in descending order
    let winComparison = b.win - a.win;

    // If "win" properties are the same, compare "lose" properties in descending order
    if (winComparison === 0) {
      let loseComparison = b.lose - a.lose;

      // If "lose" properties are the same, compare "totalKill" properties in ascending order
      if (loseComparison === 0) {
        let totalKilla = a.kill.reduce((acc, current) => acc + current, 0);
        let totalKillb = b.kill.reduce((acc, current) => acc + current, 0);

        return totalKillb - totalKilla;
      }

      return loseComparison;
    }

    return winComparison;
  });

  // console.log(dataPage.result)


  ////////////////////////////////
  // RETURN
  return (
    <>
      {
        dataPage && dataPage.slug == 'schedule' &&
        <main className={`${styles.root1} ${transition ? styles.transition : ''}`}>
          {
            dataPage && (day.number < 4 && day.number > 0) &&
            <>
              <header dangerouslySetInnerHTML={{ __html: `GROUP STAGE - DAY ${day.number} ${day.date[day.number - 1]}` }} />
              <div className={styles.schedule}>
                <div className={styles.content}>
                  {
                    dataPage.schedule[day.number - 1] && dataPage.schedule[day.number - 1].map((e, i) => {
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
            </>
          }

          {
            dataPage && day.number == 0 &&
            <img src="/images/MainBannerKnockout.jpg" alt="MainBannerKnockout"></img>
          }

          {
            dataPage && day.number == 4 &&
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
                  {
                    dataPage.result.map((e, i) => {
                      let totalKill = e.kill.reduce((acc, current) => acc + current, 0);
                      return (
                        <tr key={i}>
                          <td><img src={e.team == 'chicken slayers' ? `/images/logoteam/Teamchickenslayers.png` : `/images/logoteam/Team${e.team}.png`} />{e.team.toUpperCase()}</td>
                          <td>{`${e.win} - ${e.lose}`}</td>
                          <td>{totalKill}</td>
                        </tr>
                      )
                    })
                  }
                </tbody>
              </table>
            </div>
          }
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

      {
        dataPage && dataPage.slug == 'nextgame' &&
        <main className={`${styles.root3} ${bg ? styles.bg : ''}`} >
          <header dangerouslySetInnerHTML={{ __html: `FINAL STAGE - 8<sup>th</sup> DEC ` }} />
          <div className={styles.board}>
            <div className={styles.content}>
              <div>
                <h2>COMING UP NEXT</h2>
                <div className={styles.team}>
                  <div className={styles.team1}>
                    {team1}
                    <img src={`/images/logoteam/Team${logoteam1}.png`} />
                  </div>

                  <span>VS</span>

                  <div className={styles.team2}>
                    {team2}
                    <img src={`/images/logoteam/Team${logoteam2}.png`} />
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
      }

      {
        dataPage && dataPage.slug == 'result' &&
        <main className={`${styles.root4} ${bg ? styles.bg : ''}`} >
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
                {
                  dataPage.result.map((e, i) => {
                    let totalKill = e.kill.reduce((acc, current) => acc + current, 0);
                    return (
                      <tr key={i}>
                        <td><img src={e.team == 'chicken slayers' ? `/images/logoteam/Teamchickenslayers.png` : `/images/logoteam/Team${e.team}.png`} />{e.team.toUpperCase()}</td>
                        <td>{`${e.win} - ${e.lose}`}</td>
                        <td>{totalKill}</td>
                      </tr>
                    )
                  })
                }
              </tbody>
            </table>
          </div>
        </main>
      }

      {
        dataPage && dataPage.slug == 'nextday' &&
        <main className={`${styles.root5} ${bg ? styles.bg : ''}`} >
          <header dangerouslySetInnerHTML={{ __html: `GROUP STAGE - DAY 3 (25<sup>th</sup> NOV)` }} />
          <div className={styles.schedule}>
            <div className={styles.content}>
              {
                dataPage.schedule[2] && dataPage.schedule[2].map((e, i) => {
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
        dataPage && dataPage.slug == 'test' &&
        <main className={styles.test}>
          <ul>
            <li>
              <div className={styles.articleItem}>
                <div className={styles.img}></div>
                <div className={styles.tag}>tag thứ 1 tag thứ 1 tag thứ 1 tag thứ 1</div>
                <div className={styles.title}>Sản phẩm 1</div>
                <div className={styles.btn}>Liên hệ</div>
              </div>
            </li>

            <li>
              <div className={styles.articleItem}>
                <div className={styles.img}></div>
                <div className={styles.tag}>tag thứ 1</div>
                <div className={styles.title}>Sản phẩm 1</div>
                <div className={styles.btn}>Liên hệ</div>
              </div>
            </li>

            <li>
              <div className={styles.articleItem}>
                <div className={styles.img}></div>
                <div className={styles.tag}>tag thứ 1</div>
                <div className={styles.title}>Sản phẩm 1</div>
                <div className={styles.btn}>Liên hệ</div>
              </div>
            </li>

            <li>
              <div className={styles.articleItem}>
                <div className={styles.img}></div>
                <div className={styles.tag}>tag thứ 1</div>
                <div className={styles.title}>Sản phẩm 1</div>
                <div className={styles.btn}>Liên hệ</div>
              </div>
            </li>

            <li>
              <div className={styles.articleItem}>
                <div className={styles.img}></div>
                <div className={styles.tag}>tag thứ 1</div>
                <div className={styles.title}>Sản phẩm 1 Sản phẩm 1 Sản phẩm 1 Sản phẩm 1 Sản phẩm 1 Sản phẩm 1</div>
                <div className={styles.btn}>Liên hệ</div>
              </div>
            </li>

            <li>
              <div className={styles.articleItem}>
                <div className={styles.img}></div>
                <div className={styles.tag}>tag thứ 1</div>
                <div className={styles.title}>Sản phẩm 1</div>
                <div className={styles.btn}>Liên hệ</div>
              </div>
            </li>
          </ul>
        </main>
      }
    </>
  )
}


