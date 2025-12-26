import React from 'react';
import { View, StyleSheet, ScrollView, Image } from 'react-native';
import { Card, Title, Paragraph, Button, useTheme, Surface } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { getCurrentLocation } from '../services/LocationService';

// Define navigation types locally or import
export type RootStackParamList = {
  Home: undefined;
  OfflineGuides: undefined;
  BloodDonor: undefined;
  Volunteer: undefined;
};

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

const HomeScreen = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const theme = useTheme();

  const handleSOS = async () => {
    console.log('Getting location for SOS...');
    const location = await getCurrentLocation();
    if (location) {
      console.log('SOS Location:', location);
      alert(`SOS Alert Sent! Location: ${location.latitude}, ${location.longitude}`);
    } else {
      alert('Could not get location for SOS');
    }
  };

  return (
    <ScrollView style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <View style={styles.header}>
        <Image 
          source={require('../../logo.png.jpeg')} 
          style={styles.logo}
          resizeMode="contain"
        />
        <Title style={[styles.appTitle, { color: theme.colors.primary }]}>Scouting For Health</Title>
        <Paragraph style={{ color: theme.colors.secondary, fontWeight: 'bold' }}>
          Emergency Response & Volunteer Network
        </Paragraph>
      </View>

      <View style={styles.moduleContainer}>
        <Surface style={[styles.cardSurface, { shadowColor: theme.colors.secondary }]}>
          <Card style={[styles.card, { borderColor: theme.colors.primary }]} onPress={() => navigation.navigate('OfflineGuides')}>
            <Card.Cover source={{ uri: 'https://img.icons8.com/color/480/first-aid-kit.png' }} style={styles.cardImage} />
            <Card.Content>
              <Title style={{ color: theme.colors.primary }}>🚑 Offline First Aid</Title>
              <Paragraph>Access emergency guides without internet.</Paragraph>
            </Card.Content>
            <Card.Actions>
              <Button mode="contained" buttonColor={theme.colors.primary} onPress={() => navigation.navigate('OfflineGuides')}>
                Open Guides
              </Button>
            </Card.Actions>
          </Card>
        </Surface>

        <Surface style={[styles.cardSurface, { shadowColor: theme.colors.secondary }]}>
          <Card style={[styles.card, { borderColor: theme.colors.secondary }]} onPress={() => navigation.navigate('BloodDonor')}>
            <Card.Content>
              <Title style={{ color: theme.colors.secondary }}>🩸 Blood Donor Finder</Title>
              <Paragraph>Find nearby donors or register to donate.</Paragraph>
            </Card.Content>
            <Card.Actions>
              <Button mode="outlined" textColor={theme.colors.secondary} onPress={() => navigation.navigate('BloodDonor')}>
                Find Donors
              </Button>
            </Card.Actions>
          </Card>
        </Surface>

        <Surface style={[styles.cardSurface, { shadowColor: theme.colors.secondary }]}>
          <Card style={[styles.card, { borderColor: theme.colors.tertiary }]} onPress={() => navigation.navigate('Volunteer')}>
            <Card.Content>
              <Title style={{ color: theme.colors.tertiary }}>🤝 Volunteer Corp</Title>
              <Paragraph>Coordinate with local volunteers.</Paragraph>
            </Card.Content>
            <Card.Actions>
              <Button mode="contained" buttonColor={theme.colors.tertiary} onPress={() => navigation.navigate('Volunteer')}>
                Join / Request
              </Button>
            </Card.Actions>
          </Card>
        </Surface>
      </View>
      
      <Button 
        mode="contained" 
        buttonColor="#d32f2f"
        textColor="white"
        style={styles.sosButton}
        contentStyle={styles.sosButtonContent}
        icon="alert"
        onPress={handleSOS}
      >
        SOS EMERGENCY
      </Button>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    marginBottom: 30,
    alignItems: 'center',
    paddingVertical: 20,
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 16,
  },
  appTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  moduleContainer: {
    gap: 24,
  },
  cardSurface: {
    borderRadius: 12,
    elevation: 4,
    backgroundColor: 'white',
  },
  card: {
    borderRadius: 12,
    borderWidth: 1,
    borderStyle: 'solid',
    backgroundColor: 'white',
  },
  cardImage: {
    height: 120,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    backgroundColor: '#f5f5f5',
  },
  sosButton: {
    marginTop: 30,
    marginBottom: 20,
    borderRadius: 50,
    elevation: 6,
  },
  sosButtonContent: {
    paddingVertical: 12,
  }
});

export default HomeScreen;
