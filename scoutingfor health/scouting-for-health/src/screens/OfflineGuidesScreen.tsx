import React, { useEffect, useState } from 'react';
import { View, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { Card, Title, Paragraph, ActivityIndicator, SegmentedButtons, useTheme, Text, Avatar } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { EmergencyGuide } from '../types';
import { getGuides, initDatabase } from '../services/DatabaseService';

const OfflineGuidesScreen = () => {
  const [guides, setGuides] = useState<EmergencyGuide[]>([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState<'medical' | 'disaster'>('medical');
  const navigation = useNavigation<any>();
  const theme = useTheme();

  useEffect(() => {
    const loadData = async () => {
      try {
        await initDatabase();
        const data = await getGuides();
        setGuides(data);
      } catch (error) {
        console.error("Failed to load guides", error);
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, []);

  const filteredGuides = guides.filter(g => g.category === category);

  // Group by subCategory
  const groupedGuides = filteredGuides.reduce((acc, guide) => {
    const sub = guide.subCategory || 'General';
    if (!acc[sub]) acc[sub] = [];
    acc[sub].push(guide);
    return acc;
  }, {} as Record<string, EmergencyGuide[]>);

  const renderGuideItem = ({ item }: { item: EmergencyGuide }) => (
    <Card 
      style={[styles.card, { backgroundColor: theme.colors.surface }]} 
      onPress={() => navigation.navigate('GuideDetail', { guideId: item.id })}
    >
      <Card.Content style={styles.cardContent}>
        <Avatar.Icon 
          size={48} 
          icon={category === 'medical' ? 'medical-bag' : 'alert-decagram'} 
          style={{ backgroundColor: category === 'medical' ? theme.colors.primary : theme.colors.secondary }} 
        />
        <View style={styles.cardText}>
          <Title style={styles.cardTitle}>{item.title}</Title>
          <Paragraph numberOfLines={2} style={styles.cardDesc}>{item.description}</Paragraph>
        </View>
      </Card.Content>
    </Card>
  );

  if (loading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color={theme.colors.primary} />
      </View>
    );
  }

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <View style={styles.tabContainer}>
        <SegmentedButtons
          value={category}
          onValueChange={val => setCategory(val as 'medical' | 'disaster')}
          buttons={[
            { value: 'medical', label: 'First Aid', icon: 'bandage' },
            { value: 'disaster', label: 'Disaster Guide', icon: 'home-alert' },
          ]}
          style={styles.segmentedButton}
          theme={{ colors: { secondaryContainer: theme.colors.primary, onSecondaryContainer: theme.colors.onPrimary } }}
        />
      </View>

      <FlatList
        data={Object.keys(groupedGuides)}
        keyExtractor={(item) => item}
        contentContainerStyle={styles.listContent}
        renderItem={({ item: subCategory }) => (
          <View style={styles.section}>
            <Title style={[styles.sectionTitle, { color: theme.colors.primary }]}>{subCategory}</Title>
            {groupedGuides[subCategory].map(guide => (
              <View key={guide.id} style={styles.itemWrapper}>
                {renderGuideItem({ item: guide })}
              </View>
            ))}
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabContainer: {
    padding: 16,
    backgroundColor: '#fff',
    elevation: 2,
  },
  segmentedButton: {
    marginHorizontal: 0,
  },
  listContent: {
    padding: 16,
    paddingBottom: 32,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 12,
    marginLeft: 4,
  },
  itemWrapper: {
    marginBottom: 12,
  },
  card: {
    borderRadius: 12,
    elevation: 2,
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardText: {
    marginLeft: 16,
    flex: 1,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  cardDesc: {
    fontSize: 14,
    color: '#666',
  },
});

export default OfflineGuidesScreen;
