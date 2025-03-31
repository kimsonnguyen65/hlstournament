"use client"
import React from 'react';
import styles from '../[page]/styles.module.scss';

export default function Schedule({ schedule, day, date, transition }) {
    const type = 'full'; // full or tag

    return (
        <main className={`${styles.root1} ${transition ? styles.transition : ''}`}>
            {day.number === 1 && (
                <img src="/images/MainBannerKnockout.jpg" alt="MainBannerKnockout" />
            )}

            {day.number > 1 && day.number <= 4 && (
                <>
                    <header dangerouslySetInnerHTML={{ __html: `GROUP STAGE - DAY ${day.number - 1} ${date[day.number - 2]}` }} />
                    <div className={styles.schedule}>
                        <div className={styles.content}>
                            {schedule[day.number - 2]?.map((e, i) => (
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
                </>
            )}
        </main>
    );
}