export type LanguageCode = 'es' | 'fr' | 'ja' | 'ko' | 'de' | 'zh';

export interface Language {
  code: LanguageCode;
  name: string;
  nativeName: string;
  flagEmoji: string;
  learnersLabel: string;
  description: string;
  greeting: string;
}

export type ActivityType = 'video' | 'audio' | 'chat' | 'vocabulary';

export interface VocabularyItem {
  id: string;
  term: string;
  translation: string;
  phonetic?: string;
}

export interface Phrase {
  id: string;
  phrase: string;
  translation: string;
  phonetic?: string;
}

export interface LessonActivity {
  id: string;
  type: ActivityType;
  title: string;
  description: string;
}

/**
 * Context handed to the Stream Vision Agent AI teacher. The teacher always
 * speaks English and teaches the target language through it.
 */
export interface AITeacherPrompt {
  teacherName: string;
  spokenLanguage: 'English';
  teachingLanguage: LanguageCode;
  systemPrompt: string;
}

export interface Unit {
  id: string;
  languageCode: LanguageCode;
  order: number;
  level: string;
  title: string;
  description: string;
}

export interface Lesson {
  id: string;
  unitId: string;
  languageCode: LanguageCode;
  order: number;
  title: string;
  description: string;
  goal: string;
  xpReward: number;
  imageUrl?: string;
  vocabulary: VocabularyItem[];
  phrases: Phrase[];
  activities: LessonActivity[];
  aiTeacherPrompt: AITeacherPrompt;
}
