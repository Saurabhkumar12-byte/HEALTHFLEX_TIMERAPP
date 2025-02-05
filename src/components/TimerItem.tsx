import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import ProgressBar from './ProgressBar';
import { Timer } from '../types';

const { width } = Dimensions.get('window');

interface TimerItemProps {
  timer: Timer;
  onStart: () => void;
  onPause: () => void;
  onReset: () => void;
}

const TimerItem: React.FC<TimerItemProps> = ({ timer, onStart, onPause, onReset }) => {
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <View style={styles.container}>
      {}
      <View style={styles.header}>
        <Text style={styles.timerName}>{timer.name}</Text>
        <View
          style={[
            styles.statusBadge,
            { backgroundColor: timer.status === 'Running' ? '#34D399' : timer.status === 'Paused' ? '#FBBF24' : '#EF4444' },
          ]}
        >
          <Text style={styles.statusText}>{timer.status}</Text>
        </View>
      </View>

      {}
      <View style={styles.timeContainer}>
        <Text style={styles.timeText}>{formatTime(timer.remainingTime)}</Text>
        <Text style={styles.totalTime}>/ {formatTime(timer.duration)}</Text>
      </View>

      {}
      <ProgressBar duration={timer.duration} remainingTime={timer.remainingTime} />

      {}
      <View style={styles.controls}>
        <TouchableOpacity
          style={[styles.button, styles.startButton, timer.status === 'Running' && styles.disabledButton]}
          onPress={timer.status !== 'Running' ? onStart : undefined}
          disabled={timer.status === 'Running'}
        >
          <Text style={[styles.buttonText, timer.status === 'Running' && styles.disabledText]}>Start</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button, styles.pauseButton]} onPress={onPause}>
          <Text style={styles.buttonText}>Pause</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button, styles.resetButton]} onPress={onReset}>
          <Text style={styles.buttonText}>Reset</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    marginBottom: 15,
    width: width - 40,
    
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  timerName: {
    fontSize: 20,
    fontWeight: '700',
    color: '#1E293B',
  },
  statusBadge: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },
  statusText: {
    color: 'white',
    fontSize: 12,
    fontWeight: '600',
  },
  timeContainer: {
    flexDirection: 'row',
    alignItems: 'baseline',
    marginBottom: 15,
  },
  timeText: {
    fontSize: 32,
    fontWeight: '700',
    color: '#2563EB',
  },
  totalTime: {
    fontSize: 18,
    color: '#64748B',
    marginLeft: 8,
  },
  controls: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  button: {
    flex: 1,
    marginHorizontal: 5,
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
  },
  startButton: {
    backgroundColor: '#34D399',
  },
  pauseButton: {
    backgroundColor: '#FBBF24',
  },
  resetButton: {
    backgroundColor: '#EF4444',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  disabledButton: {
    backgroundColor: '#9CA3AF',
  },
  disabledText: {
    color: '#E5E7EB',
  },
});

export default TimerItem;
