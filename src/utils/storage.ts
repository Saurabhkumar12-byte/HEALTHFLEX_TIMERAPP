import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeTimers = async (timers: Record<string, any>) => {
  try {
    await AsyncStorage.setItem('timers', JSON.stringify(timers));
  } catch (error) {
    console.error('Error storing timers:', error);
  }
};

export const getTimers = async () => {
  try {
    const timers = await AsyncStorage.getItem('timers');
    return timers ? JSON.parse(timers) : {};
  } catch (error) {
    console.error('Error retrieving timers:', error);
    return {};
  }
};

export const storeHistory = async (history: any[]) => {
  try {
    await AsyncStorage.setItem('history', JSON.stringify(history));
  } catch (error) {
    console.error('Error storing history:', error);
  }
};

export const getHistory = async () => {
  try {
    const history = await AsyncStorage.getItem('history');
    return history ? JSON.parse(history) : [];
  } catch (error) {
    console.error('Error retrieving history:', error);
    return [];
  }
};
