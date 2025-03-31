"use client"
import React from 'react';
import styles from '../[page]/styles.module.scss';

export default function TeamIngame({ day, match, data }) {
  return (
    <main className={styles.root2}>
      <nav>
        <div>
          <img
            src={data.day[day - 1].match[match - 1].team1 === 'chicken slayers'
              ? `/images/logoteam/Teamchickenslayers.png`
              : `/images/logoteam/Team${data.day[day - 1].match[match - 1].team1}.png`}
            alt={data.day[day - 1].match[match - 1].team1}
          />
          <span>{data.day[day - 1].match[match - 1].team1.toUpperCase()}</span>
        </div>

        <div>
          <img
            src={data.day[day - 1].match[match - 1].team2 === 'chicken slayers'
              ? `/images/logoteam/Teamchickenslayers.png`
              : `/images/logoteam/Team${data.day[day - 1].match[match - 1].team2}.png`}
            alt={data.day[day - 1].match[match - 1].team2}
          />
          <span>{data.day[day - 1].match[match - 1].team2.toUpperCase()}</span>
        </div>
      </nav>
    </main>
  );
}