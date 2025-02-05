import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import BackIcon from '../assets/icons/BackIcon'; 

interface TopBarProps {
  title: string;
  showBackButton?: boolean;
  rightAction?: () => void;
  rightIcon?: React.ReactNode;
}

const TopBar: React.FC<TopBarProps> = ({ 
  title, 
  showBackButton = true, 
  rightAction, 
  rightIcon 
}) => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {showBackButton && (
          <TouchableOpacity 
            style={styles.iconContainer} 
            onPress={() => navigation.goBack()}
          >
            <BackIcon />
          </TouchableOpacity>
        )}

        <Text style={styles.title}>{title}</Text>

        {rightIcon && (
          <TouchableOpacity 
            style={styles.iconContainer} 
            onPress={rightAction}
          >
            {rightIcon}
          </TouchableOpacity>
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: '#F7F9FC',
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: '#F7F9FC',
  },
  iconContainer: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    color: '#2C3E50',
    textAlign: 'center',
    flex: 1,
  },
});

export default TopBar;