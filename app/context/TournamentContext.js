"use client"
import React, { createContext, useContext, useState } from 'react';

const TournamentContext = createContext();

export function TournamentProvider({ children }) {
  const [bg, setBG] = useState(false);
  const [team1, setTeam1] = useState('Z2');
  const [team2, setTeam2] = useState('TCS');
  const [logoteam1, setLogoTeam1] = useState('zum2');
  const [logoteam2, setLogoTeam2] = useState('chickenslayers');
  const [hourCountDown, setHourCountDown] = useState(19);
  const [minuteCountDown, setMinuteCountDown] = useState(45);
  const [secondCountDown, setSecondCountDown] = useState(0);

  const value = {
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
  };

  return (
    <TournamentContext.Provider value={value}>
      {children}
    </TournamentContext.Provider>
  );
}

export function useTournament() {
  const context = useContext(TournamentContext);
  if (context === undefined) {
    throw new Error('useTournament must be used within a TournamentProvider');
  }
  return context;
}