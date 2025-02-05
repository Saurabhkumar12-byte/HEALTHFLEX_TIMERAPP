import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Timer } from '../types';

interface TimerContextType {
  timers: Record<string, Timer[]>;
  history: Timer[];
  startTimer: (timer: Timer) => void;
  pauseTimer: (timer: Timer) => void;
  resetTimer: (timer: Timer) => void;
  markTimerCompleted: (timer: Timer) => void;
  setTimers: (timers: Record<string, Timer[]>) => void;
}

export const TimerContext = createContext<TimerContextType>({
  timers: {},
  history: [],
  startTimer: () => {},
  pauseTimer: () => {},
  resetTimer: () => {},
  markTimerCompleted: () => {},
  setTimers: () => {},
});

export const TimerProvider: React.FC = ({ children }) => {
  const [timers, setTimersState] = useState<Record<string, Timer[]>>({});
  const [history, setHistory] = useState<Timer[]>([]);
  const [intervals, setIntervals] = useState<Record<string, NodeJS.Timeout>>({});

  const storeTimers = async (timers: Record<string, Timer[]>) => {
    try {
      await AsyncStorage.setItem('timers', JSON.stringify(timers));
    } catch (error) {
      console.error('Error saving timers:', error);
    }
  };

  const storeHistory = async (history: Timer[]) => {
    try {
      await AsyncStorage.setItem('history', JSON.stringify(history));
    } catch (error) {
      console.error('Error saving history:', error);
    }
  };

  const startTimer = (timer: Timer) => {
    const updatedTimers = { ...timers };
    const timerIndex = updatedTimers[timer.category]?.findIndex((t) => t.name === timer.name);

    if (timerIndex !== -1) {
      updatedTimers[timer.category][timerIndex].status = 'Running';
      setTimersState(updatedTimers);
      storeTimers(updatedTimers);

      const interval = setInterval(() => {
        setTimersState((prevTimers) => {
          const newTimers = { ...prevTimers };
          const timerToUpdate = newTimers[timer.category]?.find((t) => t.name === timer.name);

          if (timerToUpdate && timerToUpdate.remainingTime > 0) {
            timerToUpdate.remainingTime -= 1;
            storeTimers(newTimers);
            return newTimers;
          } else {
            clearInterval(interval);
            markTimerCompleted(timer);
            return prevTimers;
          }
        });
      }, 1000);

      setIntervals((prevIntervals) => ({
        ...prevIntervals,
        [timer.name]: interval,
      }));
    }
  };

  const pauseTimer = (timer: Timer) => {
    const updatedTimers = { ...timers };
    const timerIndex = updatedTimers[timer.category]?.findIndex((t) => t.name === timer.name);

    if (timerIndex !== -1) {
      updatedTimers[timer.category][timerIndex].status = 'Paused';
      setTimersState(updatedTimers);
      storeTimers(updatedTimers);

      if (intervals[timer.name]) {
        clearInterval(intervals[timer.name]);
      }

      setIntervals((prevIntervals) => {
        const newIntervals = { ...prevIntervals };
        delete newIntervals[timer.name];
        return newIntervals;
      });
    }
  };

  const resetTimer = (timer: Timer) => {
    const updatedTimers = { ...timers };
    const timerIndex = updatedTimers[timer.category]?.findIndex((t) => t.name === timer.name);

    if (timerIndex !== -1) {
      updatedTimers[timer.category][timerIndex].remainingTime = updatedTimers[timer.category][timerIndex].duration;
      updatedTimers[timer.category][timerIndex].status = 'Paused';
      setTimersState(updatedTimers);
      storeTimers(updatedTimers);
    }
  };

  const markTimerCompleted = (timer: Timer) => {
    const updatedTimers = { ...timers };
    const timerIndex = updatedTimers[timer.category]?.findIndex((t) => t.name === timer.name);

    if (timerIndex !== -1) {
      updatedTimers[timer.category].splice(timerIndex, 1);
      setTimersState(updatedTimers);
      storeTimers(updatedTimers);

      const updatedHistory = [...history, { ...timer, completionTime: new Date() }];
      setHistory(updatedHistory);
      storeHistory(updatedHistory);
    }
  };

  useEffect(() => {
    const loadTimersAndHistory = async () => {
      try {
        const storedTimers = await AsyncStorage.getItem('timers');
        const storedHistory = await AsyncStorage.getItem('history');

        if (storedTimers) setTimersState(JSON.parse(storedTimers));
        if (storedHistory) setHistory(JSON.parse(storedHistory));
      } catch (error) {
        console.error('Error loading timers/history:', error);
      }
    };

    loadTimersAndHistory();
  }, []);

  return (
    <TimerContext.Provider
      value={{
        timers,
        history,
        startTimer,
        pauseTimer,
        resetTimer,
        markTimerCompleted,
        setTimers: (timers) => {
          setTimersState(timers);
          storeTimers(timers);
        },
      }}
    >
      {children}
    </TimerContext.Provider>
  );
};
