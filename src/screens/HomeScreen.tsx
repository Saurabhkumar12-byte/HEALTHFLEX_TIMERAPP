import React, { useState, useContext, useEffect, useRef } from 'react';
import { ScrollView, View, Text, TouchableOpacity, StyleSheet, Dimensions, Animated, StatusBar } from 'react-native';
import { TimerContext } from '../context/TimerContext';
import TimerItem from '../components/TimerItem';
import { Timer } from '../types';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import Svg, { Path } from 'react-native-svg';

const { width } = Dimensions.get('window');

const HomeScreen = () => {
  const { timers, startTimer, pauseTimer, resetTimer } = useContext(TimerContext);
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);
  const navigation = useNavigation();
  
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const scaleAnim = useRef(new Animated.Value(0.95)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 800,
        useNativeDriver: true,
      }),
      Animated.spring(scaleAnim, {
        toValue: 1,
        friction: 8,
        tension: 40,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  const toggleCategory = (category: string) => {
    setExpandedCategory(expandedCategory === category ? null : category);
  };

  const getCategoryGradient = (category: string) => {
    const gradients: Record<string, string[]> = {
      'Workout': ['#FF6B6B', '#FF8E8E'],
      'Study': ['#4FACFE', '#00F2FE'],
      'Break': ['#43E97B', '#38F9D7'],
      'Focus': ['#6C63FF', '#A594F9'],
      'Meditation': ['#FFD700', '#FF6347'],
      'Work': ['#34D399', '#059669'],
      'Sleep': ['#8A2BE2', '#A9A9A9'],
    };
    return gradients[category] || ['#6C63FF', '#A594F9'];
  };

  const renderIcon = (category: string) => {
    switch (category) {
      case 'Workout':
        return (
          <Svg width="30" height="30" viewBox="0 0 24 24" fill="none">
            <Path fill="white" d="M12 7.2l2.4 2.4 4.8-.6V9l-3-3.6L12 7.2zM19.2 2h-2.4l-2.4 2.4L12 5.4l-2.4-2.4L7.2 2H4.8l2.4 3-4.8.6v1.8l4.8.6L12 10.8l2.4-2.4L19.2 8V7.2l-3-3.6L12 7.2z" />
          </Svg>
        );
      case 'Study':
        return (
          <Svg width="30" height="30" viewBox="0 0 24 24" fill="none">
            <Path fill="white" d="M16 3H8c-1.1 0-1.99.9-1.99 2L6 19c0 1.1.89 2 1.99 2H16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-1 2v12H9V5h6z" />
          </Svg>
        );
      case 'Break':
        return (
          <Svg width="30" height="30" viewBox="0 0 24 24" fill="none">
            <Path fill="white" d="M19 9.6L15 5.6 9 11.2 4.6 6.6C2.2 8.8 2.8 12.8 6 14.6l5 2 3.8-2.4c1.4-.8 2.6-2.8 3.6-5.6l2.6-1.6zM12 12.2l-2.2 1.3L7.4 12l.8-2.4 2-1.2 2.2 1.3.2.8-1.6.9-2 1.1z" />
          </Svg>
        );
      case 'Focus':
        return (
          <Svg width="30" height="30" viewBox="0 0 24 24" fill="none">
            <Path fill="white" d="M12 2L8 6h3v4h2V6h3l-4-4zm0 12v8h-2v-8H4v-2h8V8h2v4h8v2h-8z" />
          </Svg>
        );
      case 'Meditation':
        return (
          <Svg width="30" height="30" viewBox="0 0 24 24" fill="none">
            <Path fill="white" d="M12 2c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6 2.69-6 6-6zm0 10c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zM4 16h16v2H4z" />
          </Svg>
        );
      case 'Work':
        return (
          <Svg width="30" height="30" viewBox="0 0 24 24" fill="none">
            <Path fill="white" d="M21 4H3c-1.1 0-1.99.9-1.99 2L1 18c0 1.1.89 2 1.99 2H21c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-1 12H4V8h16v8z" />
          </Svg>
        );
      case 'Sleep':
        return (
          <Svg width="30" height="30" viewBox="0 0 24 24" fill="none">
            <Path fill="white" d="M12 2C7.03 2 3 6.03 3 10s4.03 8 9 8c2.65 0 5.02-1.06 6.67-2.93L19 20l1.41-1.41-3.94-3.94C17.68 13.72 18 11.92 18 10c0-4.97-4.03-8-8-8zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z" />
          </Svg>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <StatusBar backgroundColor="#252250" barStyle="light-content" />
      <ScrollView style={styles.container}>
        <LinearGradient colors={['#252250', '#151537']} style={styles.headerGradient}>
          <Animated.View style={[styles.header, { opacity: fadeAnim }]}>
            <Text style={styles.title}>HealthFlex Timer</Text>
            <Text style={styles.subtitle}>Stay on track with your time</Text>
          </Animated.View>
        </LinearGradient>

        <Animated.View style={[styles.mainContent, { opacity: fadeAnim, transform: [{ scale: scaleAnim }] }]}>
          <View style={styles.statsContainer}>
            <LinearGradient colors={['#FF6B6B', '#FF8E8E']} style={styles.statBox}>
              {renderIcon('Workout')}
              <Text style={styles.statNumber}>{Object.keys(timers).length}</Text>
              <Text style={styles.statLabel}>Categories</Text>
            </LinearGradient>
            <LinearGradient colors={['#4FACFE', '#00F2FE']} style={styles.statBox}>
              {renderIcon('Study')}
              <Text style={styles.statNumber}>
                {Object.values(timers).reduce((acc, curr) => acc + curr.length, 0)}
              </Text>
              <Text style={styles.statLabel}>Total Timers</Text>
            </LinearGradient>
          </View>

          <View style={styles.categoriesContainer}>
            {Object.keys(timers).map((category, index) => (
              <TouchableOpacity key={index} style={styles.categoryCard} onPress={() => toggleCategory(category)} activeOpacity={0.9}>
                <LinearGradient colors={getCategoryGradient(category)} style={styles.categoryHeader}>
                  {renderIcon(category)}
                  <Text style={styles.categoryTitle}>{category}</Text>
                  <View style={styles.timerCountBadge}>
                    <Text style={styles.timerCount}>{timers[category].length}</Text>
                  </View>
                </LinearGradient>
                {expandedCategory === category && (
                  <View>
                    {timers[category].map((timer: Timer, index: number) => (
                      <TimerItem key={index} timer={timer} onStart={() => startTimer(timer)} onPause={() => pauseTimer(timer)} onReset={() => resetTimer(timer)} />
                    ))}
                  </View>
                )}
              </TouchableOpacity>
            ))}
          </View>
        </Animated.View>

        <TouchableOpacity style={styles.addButton} onPress={() => navigation.navigate('CreateTimer')} activeOpacity={0.8}>
          <LinearGradient colors={['#6C63FF', '#5046E4']} style={styles.addButtonGradient}>
            <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <Path fill="white" d="M12 2v10H2v2h10v10h2V14h10v-2h-10V2h-2z" />
            </Svg>
            <Text style={styles.addButtonText}>Create New Timer</Text>
          </LinearGradient>
        </TouchableOpacity>

        <TouchableOpacity style={styles.addButton} onPress={() => navigation.navigate('History')} activeOpacity={0.8}>
          <LinearGradient colors={['#34D399', '#059669']} style={styles.addButtonGradient}>
            <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <Path fill="white" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14v-4h2v4h-2zm0-6V7h2v3h-2z" />
            </Svg>
            <Text style={styles.addButtonText}>View Timer History</Text>
          </LinearGradient>
        </TouchableOpacity>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FF',
  },
  headerGradient: {
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    paddingBottom: 30,
  },
  header: {
    padding: 24,
    paddingTop: 48,
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'white',
  },
  subtitle: {
    fontSize: 16,
    color: 'rgba(255, 255, 255, 0.6)',
  },
  mainContent: {
    padding: 20,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  statBox: {
    width: '48%',
    padding: 20,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  statNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  statLabel: {
    fontSize: 16,
    color: 'white',
    marginTop: 5,
  },
  categoriesContainer: {
    marginTop: 20,
  },
  categoryCard: {
    marginBottom: 10,
    borderRadius: 15,
    overflow: 'hidden',
  },
  categoryHeader: {
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 15,
  },
  categoryTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  timerCountBadge: {
    backgroundColor: 'white',
    borderRadius: 15,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  timerCount: {
    color: '#4A4A4A',
    fontWeight: 'bold',
  },
  addButton: {
    marginTop: 20,
    marginHorizontal: 20,
    marginBottom: 10,
    borderRadius: 15,
    overflow: 'hidden',
  },
  addButtonGradient: {
    paddingVertical: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  addButtonText: {
    fontSize: 18,
    color: 'white',
    marginLeft: 10,
  },
});

export default HomeScreen;
