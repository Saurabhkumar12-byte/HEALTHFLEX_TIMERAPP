import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';
import { colors } from '../styles/theme';

interface ProgressBarProps {
  duration: number;
  remainingTime: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ duration, remainingTime }) => {
  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
  };

  const progress = (remainingTime / duration) * 100;
  const animatedWidth = useRef(new Animated.Value(progress)).current;

  useEffect(() => {
    Animated.timing(animatedWidth, {
      toValue: progress,
      duration: 400,
      useNativeDriver: false,
    }).start();
  }, [remainingTime]);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{formatTime(remainingTime)} left</Text>
      <Animated.View
        style={[
          styles.progressBar,
          {
            width: animatedWidth.interpolate({
              inputRange: [0, 100],
              outputRange: ['0%', '100%'],
            }),
            backgroundColor: remainingTime > 10 ? colors.primary : 'red',
          },
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 14,
    backgroundColor: colors.lightGray,
    borderRadius: 7,
    marginBottom: 15,
    position: 'relative',
    overflow: 'hidden',
  },
  text: {
    position: 'absolute',
    left: '50%',
    top: -22,
    fontWeight: 'bold',
    color: colors.darkGray,
    fontSize: 14,
    marginLeft: -35,
    zIndex: 1,
  },
  progressBar: {
    height: '100%',
    borderRadius: 7,
    position: 'absolute',
    top: 0,
    left: 0,
  },
});

export default ProgressBar;
