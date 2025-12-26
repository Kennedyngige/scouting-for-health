import * as SQLite from 'expo-sqlite';
import { EmergencyGuide } from '../types';
import { INITIAL_GUIDES } from '../data/initialGuides';

let db: SQLite.SQLiteDatabase | null = null;

const getDB = async () => {
  if (!db) {
    console.log('Opening database...');
    db = await SQLite.openDatabaseAsync('scoutingforhealth_v2.db'); // Changed DB name to force fresh start
    console.log('Database opened.');
  }
  return db;
};

export const initDatabase = async () => {
  try {
    console.log('Initializing database...');
    const database = await getDB();
    await database.execAsync(`
      CREATE TABLE IF NOT EXISTS guides (
        id TEXT PRIMARY KEY NOT NULL,
        category TEXT NOT NULL,
        subCategory TEXT,
        title TEXT NOT NULL,
        data TEXT NOT NULL,
        lastUpdated TEXT NOT NULL
      );
    `);
    console.log('Table created or verified.');
    
    // Seed initial data if empty
    const result = await database.getAllAsync('SELECT * FROM guides');
    console.log('Current guides count:', result.length);
    if (result.length === 0) {
      await seedDatabase();
    }
  } catch (error) {
    console.error('Database initialization failed:', error);
    throw error;
  }
};

const seedDatabase = async () => {
  console.log('Seeding database with initial guides...');
  for (const guide of INITIAL_GUIDES) {
    await saveGuide(guide);
  }
  console.log('Seeding complete.');
};

export const saveGuide = async (guide: EmergencyGuide) => {
  const database = await getDB();
  await database.runAsync(
    'INSERT OR REPLACE INTO guides (id, category, subCategory, title, data, lastUpdated) VALUES (?, ?, ?, ?, ?, ?)',
    guide.id,
    guide.category,
    guide.subCategory || 'General',
    guide.title,
    JSON.stringify(guide),
    guide.lastUpdated
  );
};

export const getGuides = async (): Promise<EmergencyGuide[]> => {
  const database = await getDB();
  const rows = await database.getAllAsync<{ data: string }>('SELECT data FROM guides');
  return rows.map(row => JSON.parse(row.data));
};

export const getGuideById = async (id: string): Promise<EmergencyGuide | null> => {
  const database = await getDB();
  const row = await database.getFirstAsync<{ data: string }>('SELECT data FROM guides WHERE id = ?', id);
  return row ? JSON.parse(row.data) : null;
};
