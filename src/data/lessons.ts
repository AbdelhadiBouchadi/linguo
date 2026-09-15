import type { Lesson, LanguageCode } from '@/types/learning';

export const lessons: Lesson[] = [
  // Spanish
  {
    id: 'es-lesson-1',
    unitId: 'es-unit-1',
    languageCode: 'es',
    order: 1,
    title: 'Greetings',
    description: 'Say hello and introduce yourself in Spanish.',
    goal: 'Greet someone and say your name.',
    xpReward: 10,
    imageUrl: 'https://picsum.photos/seed/es-lesson-1/400/400',
    vocabulary: [
      { id: 'es-l1-v1', term: 'Hola', translation: 'Hello', phonetic: 'OH-lah' },
      { id: 'es-l1-v2', term: 'Adiós', translation: 'Goodbye', phonetic: 'ah-DYOHS' },
      { id: 'es-l1-v3', term: 'Sí', translation: 'Yes', phonetic: 'see' },
      { id: 'es-l1-v4', term: 'No', translation: 'No', phonetic: 'noh' },
      { id: 'es-l1-v5', term: 'Gracias', translation: 'Thank you', phonetic: 'GRAH-syahs' },
    ],
    phrases: [
      { id: 'es-l1-p1', phrase: '¿Cómo te llamas?', translation: 'What is your name?', phonetic: 'KOH-moh teh YAH-mahs' },
      { id: 'es-l1-p2', phrase: 'Me llamo...', translation: 'My name is...', phonetic: 'meh YAH-moh' },
      { id: 'es-l1-p3', phrase: 'Mucho gusto', translation: 'Nice to meet you', phonetic: 'MOO-choh GOOS-toh' },
    ],
    activities: [
      { id: 'es-l1-a1', type: 'video', title: 'Meet your teacher', description: 'Watch a short intro with your AI teacher.' },
      { id: 'es-l1-a2', type: 'vocabulary', title: 'Vocabulary review', description: 'Practice greeting words.' },
      { id: 'es-l1-a3', type: 'audio', title: 'Speak it out loud', description: 'Practice greetings with your AI teacher.' },
    ],
    aiTeacherPrompt: {
      teacherName: 'Sofía',
      spokenLanguage: 'English',
      teachingLanguage: 'es',
      systemPrompt:
        'You are Sofía, a friendly Spanish teacher. Speak only in English and teach the student basic Spanish greetings: hola, adiós, sí, no, gracias, and how to ask and answer "¿Cómo te llamas?". Keep sentences short, encourage the student to repeat words out loud, and gently correct pronunciation.',
    },
  },
  {
    id: 'es-lesson-2',
    unitId: 'es-unit-1',
    languageCode: 'es',
    order: 2,
    title: 'Numbers 1-10',
    description: 'Count from one to ten in Spanish.',
    goal: 'Count to ten and ask "how many?".',
    xpReward: 10,
    imageUrl: 'https://picsum.photos/seed/es-lesson-2/400/400',
    vocabulary: [
      { id: 'es-l2-v1', term: 'Uno', translation: 'One', phonetic: 'OO-noh' },
      { id: 'es-l2-v2', term: 'Dos', translation: 'Two', phonetic: 'dohs' },
      { id: 'es-l2-v3', term: 'Tres', translation: 'Three', phonetic: 'trehs' },
      { id: 'es-l2-v4', term: 'Cuatro', translation: 'Four', phonetic: 'KWAH-troh' },
      { id: 'es-l2-v5', term: 'Cinco', translation: 'Five', phonetic: 'SEEN-koh' },
    ],
    phrases: [
      { id: 'es-l2-p1', phrase: '¿Cuántos años tienes?', translation: 'How old are you?', phonetic: 'KWAHN-tohs AH-nyohs TYEH-nehs' },
      { id: 'es-l2-p2', phrase: 'Tengo... años', translation: 'I am... years old', phonetic: 'TEHN-goh AH-nyohs' },
    ],
    activities: [
      { id: 'es-l2-a1', type: 'vocabulary', title: 'Vocabulary review', description: 'Practice numbers one to ten.' },
      { id: 'es-l2-a2', type: 'chat', title: 'Chat practice', description: 'Text with your AI tutor using numbers.' },
      { id: 'es-l2-a3', type: 'audio', title: 'Count out loud', description: 'Practice counting with your AI teacher.' },
    ],
    aiTeacherPrompt: {
      teacherName: 'Sofía',
      spokenLanguage: 'English',
      teachingLanguage: 'es',
      systemPrompt:
        'You are Sofía, a friendly Spanish teacher. Speak only in English and teach the student to count from uno to diez in Spanish, and how to ask and answer "¿Cuántos años tienes?". Keep sentences short, encourage the student to repeat numbers out loud, and gently correct pronunciation.',
    },
  },

  // French
  {
    id: 'fr-lesson-1',
    unitId: 'fr-unit-1',
    languageCode: 'fr',
    order: 1,
    title: 'Greetings',
    description: 'Say hello and introduce yourself in French.',
    goal: 'Greet someone and say your name.',
    xpReward: 10,
    imageUrl: 'https://picsum.photos/seed/fr-lesson-1/400/400',
    vocabulary: [
      { id: 'fr-l1-v1', term: 'Bonjour', translation: 'Hello', phonetic: 'bohn-ZHOOR' },
      { id: 'fr-l1-v2', term: 'Au revoir', translation: 'Goodbye', phonetic: 'oh ruh-VWAHR' },
      { id: 'fr-l1-v3', term: 'Oui', translation: 'Yes', phonetic: 'wee' },
      { id: 'fr-l1-v4', term: 'Non', translation: 'No', phonetic: 'nohn' },
      { id: 'fr-l1-v5', term: 'Merci', translation: 'Thank you', phonetic: 'mehr-SEE' },
    ],
    phrases: [
      { id: 'fr-l1-p1', phrase: 'Comment tu t’appelles?', translation: 'What is your name?', phonetic: 'koh-mahn tew tah-PELL' },
      { id: 'fr-l1-p2', phrase: 'Je m’appelle...', translation: 'My name is...', phonetic: 'zhuh mah-PELL' },
      { id: 'fr-l1-p3', phrase: 'Enchanté', translation: 'Nice to meet you', phonetic: 'ahn-shahn-TAY' },
    ],
    activities: [
      { id: 'fr-l1-a1', type: 'video', title: 'Meet your teacher', description: 'Watch a short intro with your AI teacher.' },
      { id: 'fr-l1-a2', type: 'vocabulary', title: 'Vocabulary review', description: 'Practice greeting words.' },
      { id: 'fr-l1-a3', type: 'audio', title: 'Speak it out loud', description: 'Practice greetings with your AI teacher.' },
    ],
    aiTeacherPrompt: {
      teacherName: 'Camille',
      spokenLanguage: 'English',
      teachingLanguage: 'fr',
      systemPrompt:
        'You are Camille, a friendly French teacher. Speak only in English and teach the student basic French greetings: bonjour, au revoir, oui, non, merci, and how to ask and answer "Comment tu t’appelles?". Keep sentences short, encourage the student to repeat words out loud, and gently correct pronunciation.',
    },
  },
  {
    id: 'fr-lesson-2',
    unitId: 'fr-unit-1',
    languageCode: 'fr',
    order: 2,
    title: 'Numbers 1-10',
    description: 'Count from one to ten in French.',
    goal: 'Count to ten and ask "how many?".',
    xpReward: 10,
    imageUrl: 'https://picsum.photos/seed/fr-lesson-2/400/400',
    vocabulary: [
      { id: 'fr-l2-v1', term: 'Un', translation: 'One', phonetic: 'uhn' },
      { id: 'fr-l2-v2', term: 'Deux', translation: 'Two', phonetic: 'duh' },
      { id: 'fr-l2-v3', term: 'Trois', translation: 'Three', phonetic: 'twah' },
      { id: 'fr-l2-v4', term: 'Quatre', translation: 'Four', phonetic: 'KAH-truh' },
      { id: 'fr-l2-v5', term: 'Cinq', translation: 'Five', phonetic: 'sank' },
    ],
    phrases: [
      { id: 'fr-l2-p1', phrase: 'Quel âge as-tu?', translation: 'How old are you?', phonetic: 'kel ahzh ah tew' },
      { id: 'fr-l2-p2', phrase: "J'ai... ans", translation: 'I am... years old', phonetic: 'zhay ahn' },
    ],
    activities: [
      { id: 'fr-l2-a1', type: 'vocabulary', title: 'Vocabulary review', description: 'Practice numbers one to ten.' },
      { id: 'fr-l2-a2', type: 'chat', title: 'Chat practice', description: 'Text with your AI tutor using numbers.' },
      { id: 'fr-l2-a3', type: 'audio', title: 'Count out loud', description: 'Practice counting with your AI teacher.' },
    ],
    aiTeacherPrompt: {
      teacherName: 'Camille',
      spokenLanguage: 'English',
      teachingLanguage: 'fr',
      systemPrompt:
        'You are Camille, a friendly French teacher. Speak only in English and teach the student to count from un to dix in French, and how to ask and answer "Quel âge as-tu?". Keep sentences short, encourage the student to repeat numbers out loud, and gently correct pronunciation.',
    },
  },

  // Japanese
  {
    id: 'ja-lesson-1',
    unitId: 'ja-unit-1',
    languageCode: 'ja',
    order: 1,
    title: 'Greetings',
    description: 'Say hello and introduce yourself in Japanese.',
    goal: 'Greet someone and say your name.',
    xpReward: 10,
    imageUrl: 'https://picsum.photos/seed/ja-lesson-1/400/400',
    vocabulary: [
      { id: 'ja-l1-v1', term: 'こんにちは', translation: 'Hello', phonetic: 'kon-nee-chee-wah' },
      { id: 'ja-l1-v2', term: 'さようなら', translation: 'Goodbye', phonetic: 'sah-yoh-nah-rah' },
      { id: 'ja-l1-v3', term: 'はい', translation: 'Yes', phonetic: 'hai' },
      { id: 'ja-l1-v4', term: 'いいえ', translation: 'No', phonetic: 'ee-eh' },
      { id: 'ja-l1-v5', term: 'ありがとう', translation: 'Thank you', phonetic: 'ah-ree-gah-toh' },
    ],
    phrases: [
      { id: 'ja-l1-p1', phrase: 'お名前は何ですか？', translation: 'What is your name?', phonetic: 'oh-nah-mah-eh wah nahn-deh-soo-kah' },
      { id: 'ja-l1-p2', phrase: '私の名前は...です', translation: 'My name is...', phonetic: 'wah-tah-shee noh nah-mah-eh wah ... deh-soo' },
      { id: 'ja-l1-p3', phrase: 'よろしくお願いします', translation: 'Nice to meet you', phonetic: 'yoh-roh-shee-koo oh-neh-gai-shee-mahs' },
    ],
    activities: [
      { id: 'ja-l1-a1', type: 'video', title: 'Meet your teacher', description: 'Watch a short intro with your AI teacher.' },
      { id: 'ja-l1-a2', type: 'vocabulary', title: 'Vocabulary review', description: 'Practice greeting words.' },
      { id: 'ja-l1-a3', type: 'audio', title: 'Speak it out loud', description: 'Practice greetings with your AI teacher.' },
    ],
    aiTeacherPrompt: {
      teacherName: 'Yuki',
      spokenLanguage: 'English',
      teachingLanguage: 'ja',
      systemPrompt:
        'You are Yuki, a friendly Japanese teacher. Speak only in English and teach the student basic Japanese greetings: konnichiwa, sayounara, hai, iie, arigatou, and how to ask and answer "Onamae wa nan desu ka?". Keep sentences short, encourage the student to repeat words out loud, and gently correct pronunciation.',
    },
  },
  {
    id: 'ja-lesson-2',
    unitId: 'ja-unit-1',
    languageCode: 'ja',
    order: 2,
    title: 'Numbers 1-10',
    description: 'Count from one to ten in Japanese.',
    goal: 'Count to ten and ask "how many?".',
    xpReward: 10,
    imageUrl: 'https://picsum.photos/seed/ja-lesson-2/400/400',
    vocabulary: [
      { id: 'ja-l2-v1', term: '一 (ichi)', translation: 'One', phonetic: 'ee-chee' },
      { id: 'ja-l2-v2', term: '二 (ni)', translation: 'Two', phonetic: 'nee' },
      { id: 'ja-l2-v3', term: '三 (san)', translation: 'Three', phonetic: 'sahn' },
      { id: 'ja-l2-v4', term: '四 (yon)', translation: 'Four', phonetic: 'yohn' },
      { id: 'ja-l2-v5', term: '五 (go)', translation: 'Five', phonetic: 'goh' },
    ],
    phrases: [
      { id: 'ja-l2-p1', phrase: 'いくつですか？', translation: 'How many is it?', phonetic: 'ee-koo-tsoo deh-soo-kah' },
      { id: 'ja-l2-p2', phrase: '...つです', translation: 'It is...', phonetic: 'tsoo-deh-soo' },
    ],
    activities: [
      { id: 'ja-l2-a1', type: 'vocabulary', title: 'Vocabulary review', description: 'Practice numbers one to ten.' },
      { id: 'ja-l2-a2', type: 'chat', title: 'Chat practice', description: 'Text with your AI tutor using numbers.' },
      { id: 'ja-l2-a3', type: 'audio', title: 'Count out loud', description: 'Practice counting with your AI teacher.' },
    ],
    aiTeacherPrompt: {
      teacherName: 'Yuki',
      spokenLanguage: 'English',
      teachingLanguage: 'ja',
      systemPrompt:
        'You are Yuki, a friendly Japanese teacher. Speak only in English and teach the student to count from ichi to juu in Japanese, and how to ask and answer "Ikutsu desu ka?". Keep sentences short, encourage the student to repeat numbers out loud, and gently correct pronunciation.',
    },
  },
];

export function getLessonsByLanguage(code: LanguageCode): Lesson[] {
  return lessons
    .filter((lesson) => lesson.languageCode === code)
    .sort((a, b) => a.order - b.order);
}

export function getLessonsByUnit(unitId: string): Lesson[] {
  return lessons
    .filter((lesson) => lesson.unitId === unitId)
    .sort((a, b) => a.order - b.order);
}

export function getLessonById(id: string): Lesson | undefined {
  return lessons.find((lesson) => lesson.id === id);
}
