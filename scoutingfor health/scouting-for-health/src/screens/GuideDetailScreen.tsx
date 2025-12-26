import React, { useEffect, useState } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { Title, Paragraph, Card, Button, Chip, useTheme, List, Divider } from 'react-native-paper';
import { RouteProp, useRoute } from '@react-navigation/native';
import { EmergencyGuide } from '../types';
import { getGuideById } from '../services/DatabaseService';

type RootStackParamList = {
  GuideDetail: { guideId: string };
};

type GuideDetailRouteProp = RouteProp<RootStackParamList, 'GuideDetail'>;

const GuideDetailScreen = () => {
  const route = useRoute<GuideDetailRouteProp>();
  const { guideId } = route.params;
  const [guide, setGuide] = useState<EmergencyGuide | null>(null);
  const theme = useTheme();

  useEffect(() => {
    const loadGuide = async () => {
      const data = await getGuideById(guideId);
      setGuide(data);
    };
    loadGuide();
  }, [guideId]);

  if (!guide) {
    return (
      <View style={[styles.container, styles.centered]}>
        <Title>Loading...</Title>
      </View>
    );
  }

  return (
    <ScrollView style={[styles.container, { backgroundColor: theme.colors.background }]}>
      {/* Title & Description */}
      <View style={styles.header}>
        <Title style={[styles.title, { color: theme.colors.primary }]}>{guide.title}</Title>
        <Paragraph style={styles.description}>{guide.description}</Paragraph>
      </View>

      {/* Steps Section */}
      <View style={styles.section}>
        <Title style={[styles.sectionHeader, { color: theme.colors.secondary }]}>What to do (Step-by-Step)</Title>
        {guide.steps.map((step, index) => (
          <View key={index} style={styles.stepItem}>
            <View style={[styles.stepNumber, { backgroundColor: theme.colors.primary }]}>
              <Title style={styles.stepNumberText}>{step.stepNumber}</Title>
            </View>
            <View style={styles.stepContent}>
              <Paragraph style={styles.stepText}>{step.instruction}</Paragraph>
              {step.warning && (
                <Paragraph style={[styles.warning, { color: theme.colors.error }]}>⚠️ {step.warning}</Paragraph>
              )}
              {step.timer && (
                <Button mode="outlined" icon="timer" style={styles.timerButton} textColor={theme.colors.primary}>
                  Start {step.timer}s Timer
                </Button>
              )}
            </View>
          </View>
        ))}
      </View>

      <Divider style={styles.divider} />

      {/* DO NOT Section */}
      {guide.doNot && guide.doNot.length > 0 && (
        <View style={styles.section}>
          <Title style={[styles.sectionHeader, { color: theme.colors.error }]}>DO NOT</Title>
          {guide.doNot.map((item, index) => (
            <View key={index} style={styles.bulletItem}>
              <List.Icon icon="close-circle" color={theme.colors.error} style={styles.bulletIcon} />
              <Paragraph style={[styles.bulletText, { color: theme.colors.error }]}>{item}</Paragraph>
            </View>
          ))}
        </View>
      )}

      {/* Call Emergency Alert Box */}
      {guide.callEmergencyIf && guide.callEmergencyIf.length > 0 && (
        <Card style={[styles.alertCard, { borderColor: theme.colors.error }]}>
          <Card.Content>
            <Title style={[styles.alertTitle, { color: theme.colors.error }]}>
              <List.Icon icon="phone-alert" color={theme.colors.error} />
              Call Emergency Services If:
            </Title>
            {guide.callEmergencyIf.map((item, index) => (
              <Paragraph key={index} style={styles.alertText}>• {item}</Paragraph>
            ))}
            {guide.emergencyNumbers.length > 0 && (
              <Button 
                mode="contained" 
                buttonColor={theme.colors.error} 
                icon="phone" 
                style={styles.callButton}
                onPress={() => {}} // In a real app, this would use Linking.openURL(`tel:${number}`)
              >
                Call {guide.emergencyNumbers[0]}
              </Button>
            )}
          </Card.Content>
        </Card>
      )}

      {/* Aftercare Section */}
      {guide.aftercare && guide.aftercare.length > 0 && (
        <View style={styles.section}>
          <Title style={[styles.sectionHeader, { color: theme.colors.primary }]}>Aftercare</Title>
          {guide.aftercare.map((item, index) => (
            <View key={index} style={styles.bulletItem}>
              <List.Icon icon="check-circle" color={theme.colors.primary} style={styles.bulletIcon} />
              <Paragraph style={styles.bulletText}>{item}</Paragraph>
            </View>
          ))}
        </View>
      )}

      <View style={{ height: 40 }} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  centered: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    marginBottom: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    color: '#555',
    lineHeight: 24,
  },
  section: {
    marginBottom: 24,
  },
  sectionHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  stepItem: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  stepNumber: {
    width: 32,
    height: 32,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
    marginTop: 2,
  },
  stepNumberText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    lineHeight: 32, // Center vertically
  },
  stepContent: {
    flex: 1,
  },
  stepText: {
    fontSize: 16,
    lineHeight: 24,
  },
  warning: {
    marginTop: 4,
    fontWeight: 'bold',
  },
  timerButton: {
    marginTop: 8,
    alignSelf: 'flex-start',
  },
  divider: {
    marginVertical: 16,
  },
  bulletItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 8,
    marginLeft: -8, // Compensate for List.Icon padding
  },
  bulletIcon: {
    margin: 0,
    padding: 0,
    height: 24,
    width: 24,
    marginRight: 8,
    marginTop: 2,
  },
  bulletText: {
    fontSize: 16,
    lineHeight: 24,
    flex: 1,
  },
  alertCard: {
    marginBottom: 24,
    borderWidth: 2,
    backgroundColor: '#fff0f0',
  },
  alertTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    marginLeft: -8,
  },
  alertText: {
    fontSize: 16,
    color: '#d32f2f',
    marginBottom: 4,
    marginLeft: 8,
  },
  callButton: {
    marginTop: 16,
  },
});

export default GuideDetailScreen;
