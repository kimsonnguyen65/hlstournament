export function handleMatchParams(setMatch, setDayIngame) {
  const urlParams = new URLSearchParams(window.location.search);
  const matchParams = {
    day1match2: () => setMatch(2),
    day2match1: () => { setMatch(1); setDayIngame(2); },
    day2match2: () => { setMatch(2); setDayIngame(2); },
    day2match3: () => { setMatch(3); setDayIngame(2); },
    day3match1: () => { setMatch(1); setDayIngame(3); },
    day3match2: () => { setMatch(2); setDayIngame(3); },
    day3match3: () => { setMatch(3); setDayIngame(3); },
    day3match4: () => { setMatch(4); setDayIngame(3); },
    day3match5: () => { setMatch(5); setDayIngame(3); }
  };

  Object.entries(matchParams).forEach(([param, handler]) => {
    if (urlParams.get(param)) handler();
  });
}

export function handleMatchConfigs(setBG, setHourCountDown, setMinuteCountDown, setTeam1, setTeam2, setLogoTeam1, setLogoTeam2) {
  const urlParams = new URLSearchParams(window.location.search);
  const matchConfigs = {
    bg: () => setBG(true),
    match2: () => {
      setHourCountDown(15);
      setMinuteCountDown(30);
      setTeam1('COM');
      setTeam2('TCS');
      setLogoTeam1('combatant');
      setLogoTeam2('chickenslayers');
    },
    bgmatch2: () => {
      setBG(true);
      setHourCountDown(15);
      setMinuteCountDown(30);
      setTeam1('COM');
      setTeam2('TCS');
      setLogoTeam1('combatant');
      setLogoTeam2('chickenslayers');
    },
    match3: () => {
      setHourCountDown(16);
      setMinuteCountDown(30);
      setTeam1('COM');
      setTeam2('TCS');
      setLogoTeam1('combatant');
      setLogoTeam2('chickenslayers');
    },
    bgmatch3: () => {
      setBG(true);
      setHourCountDown(16);
      setMinuteCountDown(30);
      setTeam1('COM');
      setTeam2('TCS');
      setLogoTeam1('combatant');
      setLogoTeam2('chickenslayers');
    },
    match4: () => {
      setHourCountDown(17);
      setMinuteCountDown(30);
      setTeam1('PDSI');
      setTeam2('TCS');
      setLogoTeam1('pdsi');
      setLogoTeam2('chickenslayers');
    },
    bgmatch4: () => {
      setBG(true);
      setHourCountDown(17);
      setMinuteCountDown(30);
      setTeam1('PDSI');
      setTeam2('TCS');
      setLogoTeam1('pdsi');
      setLogoTeam2('chickenslayers');
    },
    match5: () => {
      setHourCountDown(18);
      setMinuteCountDown(30);
      setTeam1('PDSI');
      setTeam2('TCS');
      setLogoTeam1('pdsi');
      setLogoTeam2('chickenslayers');
    },
    bgmatch5: () => {
      setBG(true);
      setHourCountDown(18);
      setMinuteCountDown(30);
      setTeam1('PDSI');
      setTeam2('TCS');
      setLogoTeam1('pdsi');
      setLogoTeam2('chickenslayers');
    },
    match6: () => {
      setHourCountDown(19);
      setMinuteCountDown(30);
      setTeam1('PDSI');
      setTeam2('TCS');
      setLogoTeam1('pdsi');
      setLogoTeam2('chickenslayers');
    },
    bgmatch6: () => {
      setBG(true);
      setHourCountDown(19);
      setMinuteCountDown(30);
      setTeam1('PDSI');
      setTeam2('TCS');
      setLogoTeam1('pdsi');
      setLogoTeam2('chickenslayers');
    },
    test: () => {
      setHourCountDown(14);
      setMinuteCountDown(30);
      setTeam1('PDSI');
      setTeam2('2K');
      setLogoTeam1('pdsi');
      setLogoTeam2('2k');
    }
  };

  Object.entries(matchConfigs).forEach(([param, handler]) => {
    if (urlParams.get(param)) handler();
  });
}