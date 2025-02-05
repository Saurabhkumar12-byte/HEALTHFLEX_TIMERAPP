import React, { useContext, useState, useEffect } from 'react';
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  Dimensions,
  Animated,
  StatusBar,
} from 'react-native';
import { TimerContext } from '../context/TimerContext';
import LinearGradient from 'react-native-linear-gradient';

const { width } = Dimensions.get('window');

const HistoryScreen: React.FC = () => {
  const { history } = useContext(TimerContext);
  const [fadeAnim] = useState(new Animated.Value(0));
  const [scaleAnim] = useState(new Animated.Value(0.95));

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

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleString(); 
  };

  const getTotalTimePerCategory = () => {
    return history.reduce((acc, timer) => {
      acc[timer.category] = (acc[timer.category] || 0) + timer.duration;
      return acc;
    }, {} as Record<string, number>);
  };

  const getMostUsedTimer = () => {
    const counts: Record<string, number> = {};
    history.forEach((timer) => {
      counts[timer.name] = (counts[timer.name] || 0) + 1;
    });

    return Object.entries(counts).sort((a, b) => b[1] - a[1])[0]?.[0] || 'None';
  };

  const totalTimePerCategory = getTotalTimePerCategory();
  const mostUsedTimer = getMostUsedTimer();

  return (
    <>
      <StatusBar backgroundColor="#4F46E5" barStyle="light-content" />
      <ScrollView style={styles.container}>
        <LinearGradient colors={['#6A5ACD', '#4F46E5']} style={styles.headerGradient}>
          <Animated.View style={[styles.header, { opacity: fadeAnim }]}>
            <Text style={styles.title}>Timer History</Text>
            <Text style={styles.subtitle}>Review your completed timers</Text>
          </Animated.View>
        </LinearGradient>

        <View style={styles.analyticsContainer}>
          <Text style={styles.analyticsTitle}>📊 HealthFlex Analytics</Text>
          <View style={styles.analyticsCard}>
            <Text style={styles.analyticsText}>
              🔥 Most Used Timer: <Text style={styles.analyticsHighlight}>{mostUsedTimer}</Text>
            </Text>
            {Object.entries(totalTimePerCategory).map(([category, time]) => (
              <Text key={category} style={styles.analyticsText}>
                ⏳ {category}: <Text style={styles.analyticsHighlight}>{Math.round(time / 60)} min</Text>
              </Text>
            ))}
          </View>
        </View>

        <Animated.View
          style={[styles.mainContent, { opacity: fadeAnim, transform: [{ scale: scaleAnim }] }]}
        >
          {history.length === 0 ? (
            <View style={styles.emptyState}>
              <Text style={styles.emptyText}>No history available 🕰️</Text>
              <Text style={styles.emptySubText}>Start a timer to see it here!</Text>
            </View>
          ) : (
            history.map((entry, index) => (
              <View key={index} style={styles.historyCard}>
                <LinearGradient
                  colors={['#FF6B6B', '#FF8E8E']}
                  style={styles.historyHeader}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 1 }}
                >
                  <Text style={styles.historyTitle}>{entry.name}</Text>
                  <Text style={styles.historyTime}>{formatDate(entry.completionTime)}</Text>
                </LinearGradient>
                <View style={styles.historyBody}>
                  <Text style={styles.historyDetail}>⏱️ Duration: {Math.round(entry.duration / 60)} min</Text>
                  <Text style={styles.historyDetail}>📌 Category: {entry.category}</Text>
                </View>
              </View>
            ))
          )}
        </Animated.View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F4FF',
  },
  headerGradient: {
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    paddingVertical: 45,
    alignItems: 'center',
  },
  header: {
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: '900',
    color: 'white',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 18,
    color: 'rgba(255, 255, 255, 0.85)',
  },
  analyticsContainer: {
    padding: 20,
    backgroundColor: 'white',
    marginTop: -20,
    borderRadius: 16,
    marginHorizontal: 16,
  },
  analyticsTitle: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 12,
    color: '#4F46E5',
  },
  analyticsCard: {
    backgroundColor: '#EEF2FF',
    padding: 18,
    borderRadius: 12,
  },
  analyticsText: {
    fontSize: 18,
    color: '#333',
    marginBottom: 8,
  },
  analyticsHighlight: {
    fontWeight: 'bold',
    color: '#6A5ACD',
  },
  mainContent: {
    marginTop: 20,
    padding: 20,
  },
  emptyState: {
    alignItems: 'center',
    marginTop: 50,
  },
  emptyText: {
    fontSize: 22,
    fontWeight: '700',
    color: '#555',
  },
  emptySubText: {
    fontSize: 17,
    color: '#777',
    marginTop: 5,
  },
  historyCard: {
    backgroundColor: 'white',
    borderRadius: 18,
    marginBottom: 18,
    overflow: 'hidden',
    
  },
  historyHeader: {
    padding: 18,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  historyTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: 'white',
  },
  historyTime: {
    fontSize: 16,
    fontWeight: '600',
    color: 'white',
  },
  historyBody: {
    padding: 18,
    backgroundColor: '#fff',
  },
  historyDetail: {
    fontSize: 16,
    color: '#444',
    fontWeight: '500',
  },
});

export default HistoryScreen;
