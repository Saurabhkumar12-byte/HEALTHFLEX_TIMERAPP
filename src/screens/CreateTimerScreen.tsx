import React, { useState, useContext } from 'react';
import { 
  View, TextInput, TouchableOpacity, StyleSheet, Text, SafeAreaView, ScrollView, KeyboardAvoidingView, Platform 
} from 'react-native';
import { TimerContext } from '../context/TimerContext';
import { Timer } from '../types';
import TopBar from '../components/Topbar';
import {
  TimeIcon,
  TimerIcon,
  FitnessIcon,
  BookIcon,
  CafeIcon,
  BulbIcon,
  AddCircleIcon,
  MeditationIcon,
  SleepIcon,
  PomodoroIcon
} from '../assets/icons/TimerIcons';
import { useNavigation } from '@react-navigation/native';

const CreateTimerScreen = () => {
  const { timers, setTimers } = useContext(TimerContext);
  const [name, setName] = useState('');
  const [duration, setDuration] = useState('');
  const [category, setCategory] = useState('Workout');
  const navigation = useNavigation();

  const handleAddTimer = () => {
    if (name && duration && category) {
      const newTimer: Timer = {
        name,
        duration: Number(duration),
        category,
        remainingTime: Number(duration),
        status: 'Paused',
      };

      const updatedTimers = { ...timers };
      if (updatedTimers[category]) {
        updatedTimers[category].push(newTimer);
      } else {
        updatedTimers[category] = [newTimer];
      }
      setTimers(updatedTimers);
      navigation.goBack();
    } else {
      alert('Please fill all fields!');
    }
  };

  const categories = [
    { label: 'Workout', icon: FitnessIcon },
    { label: 'Study', icon: BookIcon },
    { label: 'Break', icon: CafeIcon },
    { label: 'Focus', icon: BulbIcon },
    { label: 'Meditation', icon: MeditationIcon },
    { label: 'Sleep', icon: SleepIcon },
    { label: 'Pomodoro', icon: PomodoroIcon },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <TopBar title="Create Timer" />
      
      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}
      >
        <ScrollView 
          contentContainerStyle={styles.scrollContainer} 
          keyboardShouldPersistTaps="handled"
        >
          <View style={styles.innerContainer}>
            <View style={styles.headerSection}>
              <Text style={styles.header}>New Timer</Text>
              <Text style={styles.subHeader}>Customize Your Time Management</Text>
            </View>

            <View style={styles.formContainer}>
              <View style={styles.inputWrapper}>
                <TimeIcon size={24} color="#6C63FF" />
                <TextInput
                  style={styles.input}
                  placeholder="Timer Name"
                  placeholderTextColor="#A9A9A9"
                  value={name}
                  onChangeText={setName}
                />
              </View>

              <View style={styles.inputWrapper}>
                <TimerIcon size={24} color="#6C63FF" />
                <TextInput
                  style={styles.input}
                  placeholder="Duration (seconds)"
                  placeholderTextColor="#A9A9A9"
                  value={duration}
                  onChangeText={setDuration}
                  keyboardType="numeric"
                />
              </View>

              <View style={styles.categorySection}>
                <Text style={styles.categoryLabel}>Select Category</Text>
                <View style={styles.categoryGrid}>
                  {categories.map((cat) => {
                    const IconComponent = cat.icon;
                    return (
                      <TouchableOpacity 
                        key={cat.label}
                        style={[
                          styles.categoryItem,
                          category === cat.label && styles.selectedCategory
                        ]}
                        onPress={() => setCategory(cat.label)}
                        activeOpacity={0.7}
                      >
                        <IconComponent 
                          size={30} 
                          color={category === cat.label ? '#FFF' : '#6C63FF'} 
                        />
                        <Text style={[
                          styles.categoryText,
                          category === cat.label && styles.selectedCategoryText
                        ]}>{cat.label}</Text>
                      </TouchableOpacity>
                    );
                  })}
                </View>
              </View>
            </View>

            <TouchableOpacity 
              style={styles.addButton} 
              onPress={handleAddTimer}
            >
              <AddCircleIcon size={24} color="#FFF" />
              <Text style={styles.addButtonText}>Create Timer</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F9FC',
  },
  scrollContainer: {
    flexGrow: 1,
  },
  innerContainer: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  headerSection: {
    marginVertical: 24,
  },
  header: {
    fontSize: 32,
    fontWeight: '800',
    color: '#2C3E50',
    marginBottom: 8,
  },
  subHeader: {
    fontSize: 16,
    color: '#7F8C8D',
  },
  formContainer: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F1F4F8',
    borderRadius: 12,
    marginBottom: 16,
    paddingHorizontal: 12,
  },
  input: {
    flex: 1,
    height: 50,
    fontSize: 16,
    color: '#2C3E50',
    marginLeft: 10,
  },
  categorySection: {
    marginTop: 20,
  },
  categoryLabel: {
    fontSize: 18,
    fontWeight: '600',
    color: '#2C3E50',
    marginBottom: 16,
  },
  categoryGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  categoryItem: {
    width: '48%',
    backgroundColor: '#F1F4F8',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  selectedCategory: {
    backgroundColor: '#6C63FF',
  },
  categoryText: {
    marginLeft: 8,
    fontSize: 16,
    color: '#6C63FF',
    fontWeight: '600',
  },
  selectedCategoryText: {
    color: '#FFF',
  },
  addButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#6C63FF',
    borderRadius: 16,
    paddingVertical: 16,
    marginTop: 24,
    shadowColor: '#6C63FF',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
  },
  addButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '700',
    marginLeft: 8,
  },
});

export default CreateTimerScreen;
