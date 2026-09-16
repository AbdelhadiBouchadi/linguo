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
  // Korean
  {
    id: 'ko-lesson-1',
    unitId: 'ko-unit-1',
    languageCode: 'ko',
    order: 1,
    title: 'Greetings',
    description: 'Say hello and introduce yourself in Korean.',
    goal: 'Greet someone and say your name.',
    xpReward: 10,
    imageUrl: 'https://picsum.photos/seed/ko-lesson-1/400/400',
    vocabulary: [
      { id: 'ko-l1-v1', term: '안녕하세요', translation: 'Hello', phonetic: 'annyeonghaseyo' },
      { id: 'ko-l1-v2', term: '안녕히 가세요', translation: 'Goodbye', phonetic: 'annyeonghi gaseyo' },
      { id: 'ko-l1-v3', term: '네', translation: 'Yes', phonetic: 'ne' },
      { id: 'ko-l1-v4', term: '아니요', translation: 'No', phonetic: 'aniyo' },
      { id: 'ko-l1-v5', term: '감사합니다', translation: 'Thank you', phonetic: 'gamsahamnida' },
    ],
    phrases: [
      { id: 'ko-l1-p1', phrase: '이름이 뭐예요?', translation: 'What is your name?', phonetic: 'ireumi mwoyeyo' },
      { id: 'ko-l1-p2', phrase: '제 이름은...이에요', translation: 'My name is...', phonetic: 'je ireumeun...ieyo' },
      { id: 'ko-l1-p3', phrase: '만나서 반갑습니다', translation: 'Nice to meet you', phonetic: 'mannaseo bangapseumnida' },
    ],
    activities: [
      { id: 'ko-l1-a1', type: 'video', title: 'Meet your teacher', description: 'Watch a short intro with your AI teacher.' },
      { id: 'ko-l1-a2', type: 'vocabulary', title: 'Vocabulary review', description: 'Practice greeting words.' },
      { id: 'ko-l1-a3', type: 'audio', title: 'Speak it out loud', description: 'Practice greetings with your AI teacher.' },
    ],
    aiTeacherPrompt: {
      teacherName: 'Minji',
      spokenLanguage: 'English',
      teachingLanguage: 'ko',
      systemPrompt:
        'You are Minji, a friendly Korean teacher. Speak only in English and teach the student basic Korean greetings: annyeonghaseyo, annyeonghi gaseyo, ne, aniyo, gamsahamnida, and how to ask and answer "Ireumi mwoyeyo?". Keep sentences short, encourage the student to repeat words out loud, and gently correct pronunciation.',
    },
  },
  {
    id: 'ko-lesson-2',
    unitId: 'ko-unit-1',
    languageCode: 'ko',
    order: 2,
    title: 'Numbers 1-10',
    description: 'Count from one to ten in Korean.',
    goal: 'Count to ten and ask "how many?".',
    xpReward: 10,
    imageUrl: 'https://picsum.photos/seed/ko-lesson-2/400/400',
    vocabulary: [
      { id: 'ko-l2-v1', term: '하나', translation: 'One', phonetic: 'hana' },
      { id: 'ko-l2-v2', term: '둘', translation: 'Two', phonetic: 'dul' },
      { id: 'ko-l2-v3', term: '셋', translation: 'Three', phonetic: 'set' },
      { id: 'ko-l2-v4', term: '넷', translation: 'Four', phonetic: 'net' },
      { id: 'ko-l2-v5', term: '다섯', translation: 'Five', phonetic: 'daseot' },
    ],
    phrases: [
      { id: 'ko-l2-p1', phrase: '몇 살이에요?', translation: 'How old are you?', phonetic: 'myeot sarieyo' },
      { id: 'ko-l2-p2', phrase: '저는...살이에요', translation: 'I am... years old', phonetic: 'jeoneun...sarieyo' },
    ],
    activities: [
      { id: 'ko-l2-a1', type: 'vocabulary', title: 'Vocabulary review', description: 'Practice numbers one to ten.' },
      { id: 'ko-l2-a2', type: 'chat', title: 'Chat practice', description: 'Text with your AI tutor using numbers.' },
      { id: 'ko-l2-a3', type: 'audio', title: 'Count out loud', description: 'Practice counting with your AI teacher.' },
    ],
    aiTeacherPrompt: {
      teacherName: 'Minji',
      spokenLanguage: 'English',
      teachingLanguage: 'ko',
      systemPrompt:
        'You are Minji, a friendly Korean teacher. Speak only in English and teach the student to count from hana to yeol in Korean, and how to ask and answer "Myeot sarieyo?". Keep sentences short, encourage the student to repeat numbers out loud, and gently correct pronunciation.',
    },
  },
  {
    id: 'ko-lesson-3',
    unitId: 'ko-unit-1',
    languageCode: 'ko',
    order: 3,
    title: 'Daily Life',
    description: 'Talk about your daily routine in Korean.',
    goal: 'Describe simple daily activities.',
    xpReward: 10,
    imageUrl: 'https://picsum.photos/seed/ko-lesson-3/400/400',
    vocabulary: [
      { id: 'ko-l3-v1', term: '아침', translation: 'Morning', phonetic: 'achim' },
      { id: 'ko-l3-v2', term: '점심', translation: 'Lunch', phonetic: 'jeomsim' },
      { id: 'ko-l3-v3', term: '저녁', translation: 'Evening', phonetic: 'jeonyeok' },
      { id: 'ko-l3-v4', term: '학교', translation: 'School', phonetic: 'hakgyo' },
      { id: 'ko-l3-v5', term: '일하다', translation: 'To work', phonetic: 'ilhada' },
    ],
    phrases: [
      { id: 'ko-l3-p1', phrase: '오늘 뭐 해요?', translation: 'What are you doing today?', phonetic: 'oneul mwo haeyo' },
      { id: 'ko-l3-p2', phrase: '저는 일해요', translation: 'I am working', phonetic: 'jeoneun ilhaeyo' },
    ],
    activities: [
      { id: 'ko-l3-a1', type: 'vocabulary', title: 'Vocabulary review', description: 'Practice daily routine words.' },
      { id: 'ko-l3-a2', type: 'chat', title: 'Chat practice', description: 'Text with your AI tutor about your day.' },
      { id: 'ko-l3-a3', type: 'audio', title: 'Speak it out loud', description: 'Practice daily routine phrases.' },
    ],
    aiTeacherPrompt: {
      teacherName: 'Minji',
      spokenLanguage: 'English',
      teachingLanguage: 'ko',
      systemPrompt:
        'You are Minji, a friendly Korean teacher. Speak only in English and teach the student daily-life vocabulary: achim, jeomsim, jeonyeok, hakgyo, ilhada, and how to ask and answer "Oneul mwo haeyo?". Keep sentences short, encourage the student to repeat words out loud, and gently correct pronunciation.',
    },
  },
  {
    id: 'ko-lesson-4',
    unitId: 'ko-unit-1',
    languageCode: 'ko',
    order: 4,
    title: 'At the Café',
    description: 'Order a drink and chat at a café in Korean.',
    goal: 'Order a drink and ask the price.',
    xpReward: 10,
    imageUrl: 'https://picsum.photos/seed/ko-lesson-4/400/400',
    vocabulary: [
      { id: 'ko-l4-v1', term: '커피', translation: 'Coffee', phonetic: 'keopi' },
      { id: 'ko-l4-v2', term: '차', translation: 'Tea', phonetic: 'cha' },
      { id: 'ko-l4-v3', term: '메뉴', translation: 'Menu', phonetic: 'menyu' },
      { id: 'ko-l4-v4', term: '얼마예요', translation: 'How much is it', phonetic: 'eolmayeyo' },
      { id: 'ko-l4-v5', term: '맛있어요', translation: 'Delicious', phonetic: 'masisseoyo' },
    ],
    phrases: [
      { id: 'ko-l4-p1', phrase: '커피 주세요', translation: 'Coffee, please', phonetic: 'keopi juseyo' },
      { id: 'ko-l4-p2', phrase: '얼마예요?', translation: 'How much is it?', phonetic: 'eolmayeyo' },
    ],
    activities: [
      { id: 'ko-l4-a1', type: 'video', title: 'Order at a café', description: 'Watch your AI teacher order a coffee.' },
      { id: 'ko-l4-a2', type: 'vocabulary', title: 'Vocabulary review', description: 'Practice café words.' },
      { id: 'ko-l4-a3', type: 'audio', title: 'Speak it out loud', description: 'Practice ordering with your AI teacher.' },
    ],
    aiTeacherPrompt: {
      teacherName: 'Minji',
      spokenLanguage: 'English',
      teachingLanguage: 'ko',
      systemPrompt:
        'You are Minji, a friendly Korean teacher. Speak only in English and teach the student café vocabulary: keopi, cha, menyu, eolmayeyo, masisseoyo, and how to order with "Keopi juseyo" and ask "Eolmayeyo?". Keep sentences short, encourage the student to repeat words out loud, and gently correct pronunciation.',
    },
  },
  {
    id: 'ko-lesson-5',
    unitId: 'ko-unit-1',
    languageCode: 'ko',
    order: 5,
    title: 'Family & Friends',
    description: 'Talk about your family and friends in Korean.',
    goal: 'Describe your family and introduce a friend.',
    xpReward: 10,
    imageUrl: 'https://picsum.photos/seed/ko-lesson-5/400/400',
    vocabulary: [
      { id: 'ko-l5-v1', term: '가족', translation: 'Family', phonetic: 'gajok' },
      { id: 'ko-l5-v2', term: '친구', translation: 'Friend', phonetic: 'chingu' },
      { id: 'ko-l5-v3', term: '엄마', translation: 'Mom', phonetic: 'eomma' },
      { id: 'ko-l5-v4', term: '아빠', translation: 'Dad', phonetic: 'appa' },
      { id: 'ko-l5-v5', term: '형제', translation: 'Siblings', phonetic: 'hyeongje' },
    ],
    phrases: [
      { id: 'ko-l5-p1', phrase: '가족이 몇 명이에요?', translation: 'How many people are in your family?', phonetic: 'gajogi myeot myeongieyo' },
      { id: 'ko-l5-p2', phrase: '저는...가 있어요', translation: 'I have...', phonetic: 'jeoneun...ga isseoyo' },
    ],
    activities: [
      { id: 'ko-l5-a1', type: 'vocabulary', title: 'Vocabulary review', description: 'Practice family words.' },
      { id: 'ko-l5-a2', type: 'chat', title: 'Chat practice', description: 'Text with your AI tutor about your family.' },
      { id: 'ko-l5-a3', type: 'audio', title: 'Speak it out loud', description: 'Practice family phrases.' },
    ],
    aiTeacherPrompt: {
      teacherName: 'Minji',
      spokenLanguage: 'English',
      teachingLanguage: 'ko',
      systemPrompt:
        'You are Minji, a friendly Korean teacher. Speak only in English and teach the student family vocabulary: gajok, chingu, eomma, appa, hyeongje, and how to ask and answer "Gajogi myeot myeongieyo?". Keep sentences short, encourage the student to repeat words out loud, and gently correct pronunciation.',
    },
  },

  // German
  {
    id: 'de-lesson-1',
    unitId: 'de-unit-1',
    languageCode: 'de',
    order: 1,
    title: 'Greetings',
    description: 'Say hello and introduce yourself in German.',
    goal: 'Greet someone and say your name.',
    xpReward: 10,
    imageUrl: 'https://picsum.photos/seed/de-lesson-1/400/400',
    vocabulary: [
      { id: 'de-l1-v1', term: 'Hallo', translation: 'Hello', phonetic: 'HAH-loh' },
      { id: 'de-l1-v2', term: 'Tschüss', translation: 'Goodbye', phonetic: 'chews' },
      { id: 'de-l1-v3', term: 'Ja', translation: 'Yes', phonetic: 'yah' },
      { id: 'de-l1-v4', term: 'Nein', translation: 'No', phonetic: 'nine' },
      { id: 'de-l1-v5', term: 'Danke', translation: 'Thank you', phonetic: 'DAHN-kuh' },
    ],
    phrases: [
      { id: 'de-l1-p1', phrase: 'Wie heißt du?', translation: 'What is your name?', phonetic: 'vee hyste doo' },
      { id: 'de-l1-p2', phrase: 'Ich heiße...', translation: 'My name is...', phonetic: 'ikh HY-suh' },
      { id: 'de-l1-p3', phrase: 'Freut mich', translation: 'Nice to meet you', phonetic: 'froyt mikh' },
    ],
    activities: [
      { id: 'de-l1-a1', type: 'video', title: 'Meet your teacher', description: 'Watch a short intro with your AI teacher.' },
      { id: 'de-l1-a2', type: 'vocabulary', title: 'Vocabulary review', description: 'Practice greeting words.' },
      { id: 'de-l1-a3', type: 'audio', title: 'Speak it out loud', description: 'Practice greetings with your AI teacher.' },
    ],
    aiTeacherPrompt: {
      teacherName: 'Lukas',
      spokenLanguage: 'English',
      teachingLanguage: 'de',
      systemPrompt:
        'You are Lukas, a friendly German teacher. Speak only in English and teach the student basic German greetings: Hallo, Tschüss, Ja, Nein, Danke, and how to ask and answer "Wie heißt du?". Keep sentences short, encourage the student to repeat words out loud, and gently correct pronunciation.',
    },
  },
  {
    id: 'de-lesson-2',
    unitId: 'de-unit-1',
    languageCode: 'de',
    order: 2,
    title: 'Numbers 1-10',
    description: 'Count from one to ten in German.',
    goal: 'Count to ten and ask "how many?".',
    xpReward: 10,
    imageUrl: 'https://picsum.photos/seed/de-lesson-2/400/400',
    vocabulary: [
      { id: 'de-l2-v1', term: 'eins', translation: 'One', phonetic: 'eyens' },
      { id: 'de-l2-v2', term: 'zwei', translation: 'Two', phonetic: 'tsvy' },
      { id: 'de-l2-v3', term: 'drei', translation: 'Three', phonetic: 'dry' },
      { id: 'de-l2-v4', term: 'vier', translation: 'Four', phonetic: 'feer' },
      { id: 'de-l2-v5', term: 'fünf', translation: 'Five', phonetic: 'fewnf' },
    ],
    phrases: [
      { id: 'de-l2-p1', phrase: 'Wie alt bist du?', translation: 'How old are you?', phonetic: 'vee ahlt bist doo' },
      { id: 'de-l2-p2', phrase: 'Ich bin... Jahre alt', translation: 'I am... years old', phonetic: 'ikh bin YAH-ruh ahlt' },
    ],
    activities: [
      { id: 'de-l2-a1', type: 'vocabulary', title: 'Vocabulary review', description: 'Practice numbers one to ten.' },
      { id: 'de-l2-a2', type: 'chat', title: 'Chat practice', description: 'Text with your AI tutor using numbers.' },
      { id: 'de-l2-a3', type: 'audio', title: 'Count out loud', description: 'Practice counting with your AI teacher.' },
    ],
    aiTeacherPrompt: {
      teacherName: 'Lukas',
      spokenLanguage: 'English',
      teachingLanguage: 'de',
      systemPrompt:
        'You are Lukas, a friendly German teacher. Speak only in English and teach the student to count from eins to zehn in German, and how to ask and answer "Wie alt bist du?". Keep sentences short, encourage the student to repeat numbers out loud, and gently correct pronunciation.',
    },
  },
  {
    id: 'de-lesson-3',
    unitId: 'de-unit-1',
    languageCode: 'de',
    order: 3,
    title: 'Daily Life',
    description: 'Talk about your daily routine in German.',
    goal: 'Describe simple daily activities.',
    xpReward: 10,
    imageUrl: 'https://picsum.photos/seed/de-lesson-3/400/400',
    vocabulary: [
      { id: 'de-l3-v1', term: 'der Morgen', translation: 'Morning', phonetic: 'dair MOR-gen' },
      { id: 'de-l3-v2', term: 'das Mittagessen', translation: 'Lunch', phonetic: 'dahs MIT-tahk-essen' },
      { id: 'de-l3-v3', term: 'der Abend', translation: 'Evening', phonetic: 'dair AH-bent' },
      { id: 'de-l3-v4', term: 'die Schule', translation: 'School', phonetic: 'dee SHOO-luh' },
      { id: 'de-l3-v5', term: 'arbeiten', translation: 'To work', phonetic: 'AR-by-ten' },
    ],
    phrases: [
      { id: 'de-l3-p1', phrase: 'Was machst du heute?', translation: 'What are you doing today?', phonetic: 'vahs mahkhst doo HOY-tuh' },
      { id: 'de-l3-p2', phrase: 'Ich arbeite', translation: 'I am working', phonetic: 'ikh AR-by-tuh' },
    ],
    activities: [
      { id: 'de-l3-a1', type: 'vocabulary', title: 'Vocabulary review', description: 'Practice daily routine words.' },
      { id: 'de-l3-a2', type: 'chat', title: 'Chat practice', description: 'Text with your AI tutor about your day.' },
      { id: 'de-l3-a3', type: 'audio', title: 'Speak it out loud', description: 'Practice daily routine phrases.' },
    ],
    aiTeacherPrompt: {
      teacherName: 'Lukas',
      spokenLanguage: 'English',
      teachingLanguage: 'de',
      systemPrompt:
        'You are Lukas, a friendly German teacher. Speak only in English and teach the student daily-life vocabulary: der Morgen, das Mittagessen, der Abend, die Schule, arbeiten, and how to ask and answer "Was machst du heute?". Keep sentences short, encourage the student to repeat words out loud, and gently correct pronunciation.',
    },
  },
  {
    id: 'de-lesson-4',
    unitId: 'de-unit-1',
    languageCode: 'de',
    order: 4,
    title: 'At the Café',
    description: 'Order a drink and chat at a café in German.',
    goal: 'Order a drink and ask the price.',
    xpReward: 10,
    imageUrl: 'https://picsum.photos/seed/de-lesson-4/400/400',
    vocabulary: [
      { id: 'de-l4-v1', term: 'der Kaffee', translation: 'Coffee', phonetic: 'dair KAH-fay' },
      { id: 'de-l4-v2', term: 'der Tee', translation: 'Tea', phonetic: 'dair tay' },
      { id: 'de-l4-v3', term: 'die Speisekarte', translation: 'Menu', phonetic: 'dee SHPY-zuh-kar-tuh' },
      { id: 'de-l4-v4', term: 'Wie viel kostet das?', translation: 'How much does it cost?', phonetic: 'vee feel KOS-tet dahs' },
      { id: 'de-l4-v5', term: 'lecker', translation: 'Delicious', phonetic: 'LEK-uh' },
    ],
    phrases: [
      { id: 'de-l4-p1', phrase: 'Einen Kaffee, bitte', translation: 'A coffee, please', phonetic: 'EYE-nen KAH-fay BIT-tuh' },
      { id: 'de-l4-p2', phrase: 'Wie viel kostet das?', translation: 'How much is it?', phonetic: 'vee feel KOS-tet dahs' },
    ],
    activities: [
      { id: 'de-l4-a1', type: 'video', title: 'Order at a café', description: 'Watch your AI teacher order a coffee.' },
      { id: 'de-l4-a2', type: 'vocabulary', title: 'Vocabulary review', description: 'Practice café words.' },
      { id: 'de-l4-a3', type: 'audio', title: 'Speak it out loud', description: 'Practice ordering with your AI teacher.' },
    ],
    aiTeacherPrompt: {
      teacherName: 'Lukas',
      spokenLanguage: 'English',
      teachingLanguage: 'de',
      systemPrompt:
        'You are Lukas, a friendly German teacher. Speak only in English and teach the student café vocabulary: der Kaffee, der Tee, die Speisekarte, Wie viel kostet das?, lecker, and how to order with "Einen Kaffee, bitte". Keep sentences short, encourage the student to repeat words out loud, and gently correct pronunciation.',
    },
  },
  {
    id: 'de-lesson-5',
    unitId: 'de-unit-1',
    languageCode: 'de',
    order: 5,
    title: 'Family & Friends',
    description: 'Talk about your family and friends in German.',
    goal: 'Describe your family and introduce a friend.',
    xpReward: 10,
    imageUrl: 'https://picsum.photos/seed/de-lesson-5/400/400',
    vocabulary: [
      { id: 'de-l5-v1', term: 'die Familie', translation: 'Family', phonetic: 'dee fah-MEE-lyuh' },
      { id: 'de-l5-v2', term: 'der Freund', translation: 'Friend', phonetic: 'dair froynt' },
      { id: 'de-l5-v3', term: 'die Mutter', translation: 'Mother', phonetic: 'dee MOOT-uh' },
      { id: 'de-l5-v4', term: 'der Vater', translation: 'Father', phonetic: 'dair FAH-tuh' },
      { id: 'de-l5-v5', term: 'die Geschwister', translation: 'Siblings', phonetic: 'dee guh-SHVIS-tuh' },
    ],
    phrases: [
      { id: 'de-l5-p1', phrase: 'Wie groß ist deine Familie?', translation: 'How big is your family?', phonetic: 'vee grohs ist DY-nuh fah-MEE-lyuh' },
      { id: 'de-l5-p2', phrase: 'Ich habe...', translation: 'I have...', phonetic: 'ikh HAH-buh' },
    ],
    activities: [
      { id: 'de-l5-a1', type: 'vocabulary', title: 'Vocabulary review', description: 'Practice family words.' },
      { id: 'de-l5-a2', type: 'chat', title: 'Chat practice', description: 'Text with your AI tutor about your family.' },
      { id: 'de-l5-a3', type: 'audio', title: 'Speak it out loud', description: 'Practice family phrases.' },
    ],
    aiTeacherPrompt: {
      teacherName: 'Lukas',
      spokenLanguage: 'English',
      teachingLanguage: 'de',
      systemPrompt:
        'You are Lukas, a friendly German teacher. Speak only in English and teach the student family vocabulary: die Familie, der Freund, die Mutter, der Vater, die Geschwister, and how to ask and answer "Wie groß ist deine Familie?". Keep sentences short, encourage the student to repeat words out loud, and gently correct pronunciation.',
    },
  },

  // Chinese
  {
    id: 'zh-lesson-1',
    unitId: 'zh-unit-1',
    languageCode: 'zh',
    order: 1,
    title: 'Greetings',
    description: 'Say hello and introduce yourself in Chinese.',
    goal: 'Greet someone and say your name.',
    xpReward: 10,
    imageUrl: 'https://picsum.photos/seed/zh-lesson-1/400/400',
    vocabulary: [
      { id: 'zh-l1-v1', term: '你好', translation: 'Hello', phonetic: 'nǐ hǎo' },
      { id: 'zh-l1-v2', term: '再见', translation: 'Goodbye', phonetic: 'zài jiàn' },
      { id: 'zh-l1-v3', term: '是', translation: 'Yes', phonetic: 'shì' },
      { id: 'zh-l1-v4', term: '不是', translation: 'No', phonetic: 'bù shì' },
      { id: 'zh-l1-v5', term: '谢谢', translation: 'Thank you', phonetic: 'xiè xiè' },
    ],
    phrases: [
      { id: 'zh-l1-p1', phrase: '你叫什么名字？', translation: 'What is your name?', phonetic: 'nǐ jiào shénme míngzì' },
      { id: 'zh-l1-p2', phrase: '我叫...', translation: 'My name is...', phonetic: 'wǒ jiào' },
      { id: 'zh-l1-p3', phrase: '很高兴认识你', translation: 'Nice to meet you', phonetic: 'hěn gāoxìng rènshi nǐ' },
    ],
    activities: [
      { id: 'zh-l1-a1', type: 'video', title: 'Meet your teacher', description: 'Watch a short intro with your AI teacher.' },
      { id: 'zh-l1-a2', type: 'vocabulary', title: 'Vocabulary review', description: 'Practice greeting words.' },
      { id: 'zh-l1-a3', type: 'audio', title: 'Speak it out loud', description: 'Practice greetings with your AI teacher.' },
    ],
    aiTeacherPrompt: {
      teacherName: 'Wei',
      spokenLanguage: 'English',
      teachingLanguage: 'zh',
      systemPrompt:
        'You are Wei, a friendly Chinese teacher. Speak only in English and teach the student basic Mandarin greetings: nǐ hǎo, zài jiàn, shì, bù shì, xiè xiè, and how to ask and answer "Nǐ jiào shénme míngzì?". Keep sentences short, encourage the student to repeat words out loud, and gently correct pronunciation.',
    },
  },
  {
    id: 'zh-lesson-2',
    unitId: 'zh-unit-1',
    languageCode: 'zh',
    order: 2,
    title: 'Numbers 1-10',
    description: 'Count from one to ten in Chinese.',
    goal: 'Count to ten and ask "how many?".',
    xpReward: 10,
    imageUrl: 'https://picsum.photos/seed/zh-lesson-2/400/400',
    vocabulary: [
      { id: 'zh-l2-v1', term: '一', translation: 'One', phonetic: 'yī' },
      { id: 'zh-l2-v2', term: '二', translation: 'Two', phonetic: 'èr' },
      { id: 'zh-l2-v3', term: '三', translation: 'Three', phonetic: 'sān' },
      { id: 'zh-l2-v4', term: '四', translation: 'Four', phonetic: 'sì' },
      { id: 'zh-l2-v5', term: '五', translation: 'Five', phonetic: 'wǔ' },
    ],
    phrases: [
      { id: 'zh-l2-p1', phrase: '你多大了？', translation: 'How old are you?', phonetic: 'nǐ duō dà le' },
      { id: 'zh-l2-p2', phrase: '我...岁', translation: 'I am... years old', phonetic: 'wǒ...suì' },
    ],
    activities: [
      { id: 'zh-l2-a1', type: 'vocabulary', title: 'Vocabulary review', description: 'Practice numbers one to ten.' },
      { id: 'zh-l2-a2', type: 'chat', title: 'Chat practice', description: 'Text with your AI tutor using numbers.' },
      { id: 'zh-l2-a3', type: 'audio', title: 'Count out loud', description: 'Practice counting with your AI teacher.' },
    ],
    aiTeacherPrompt: {
      teacherName: 'Wei',
      spokenLanguage: 'English',
      teachingLanguage: 'zh',
      systemPrompt:
        'You are Wei, a friendly Chinese teacher. Speak only in English and teach the student to count from yī to shí in Mandarin, and how to ask and answer "Nǐ duō dà le?". Keep sentences short, encourage the student to repeat numbers out loud, and gently correct pronunciation.',
    },
  },
  {
    id: 'zh-lesson-3',
    unitId: 'zh-unit-1',
    languageCode: 'zh',
    order: 3,
    title: 'Daily Life',
    description: 'Talk about your daily routine in Chinese.',
    goal: 'Describe simple daily activities.',
    xpReward: 10,
    imageUrl: 'https://picsum.photos/seed/zh-lesson-3/400/400',
    vocabulary: [
      { id: 'zh-l3-v1', term: '早上', translation: 'Morning', phonetic: 'zǎoshang' },
      { id: 'zh-l3-v2', term: '午饭', translation: 'Lunch', phonetic: 'wǔfàn' },
      { id: 'zh-l3-v3', term: '晚上', translation: 'Evening', phonetic: 'wǎnshang' },
      { id: 'zh-l3-v4', term: '学校', translation: 'School', phonetic: 'xuéxiào' },
      { id: 'zh-l3-v5', term: '工作', translation: 'To work', phonetic: 'gōngzuò' },
    ],
    phrases: [
      { id: 'zh-l3-p1', phrase: '你今天做什么？', translation: 'What are you doing today?', phonetic: 'nǐ jīntiān zuò shénme' },
      { id: 'zh-l3-p2', phrase: '我在工作', translation: 'I am working', phonetic: 'wǒ zài gōngzuò' },
    ],
    activities: [
      { id: 'zh-l3-a1', type: 'vocabulary', title: 'Vocabulary review', description: 'Practice daily routine words.' },
      { id: 'zh-l3-a2', type: 'chat', title: 'Chat practice', description: 'Text with your AI tutor about your day.' },
      { id: 'zh-l3-a3', type: 'audio', title: 'Speak it out loud', description: 'Practice daily routine phrases.' },
    ],
    aiTeacherPrompt: {
      teacherName: 'Wei',
      spokenLanguage: 'English',
      teachingLanguage: 'zh',
      systemPrompt:
        'You are Wei, a friendly Chinese teacher. Speak only in English and teach the student daily-life vocabulary: zǎoshang, wǔfàn, wǎnshang, xuéxiào, gōngzuò, and how to ask and answer "Nǐ jīntiān zuò shénme?". Keep sentences short, encourage the student to repeat words out loud, and gently correct pronunciation.',
    },
  },
  {
    id: 'zh-lesson-4',
    unitId: 'zh-unit-1',
    languageCode: 'zh',
    order: 4,
    title: 'At the Café',
    description: 'Order a drink and chat at a café in Chinese.',
    goal: 'Order a drink and ask the price.',
    xpReward: 10,
    imageUrl: 'https://picsum.photos/seed/zh-lesson-4/400/400',
    vocabulary: [
      { id: 'zh-l4-v1', term: '咖啡', translation: 'Coffee', phonetic: 'kāfēi' },
      { id: 'zh-l4-v2', term: '茶', translation: 'Tea', phonetic: 'chá' },
      { id: 'zh-l4-v3', term: '菜单', translation: 'Menu', phonetic: 'càidān' },
      { id: 'zh-l4-v4', term: '多少钱', translation: 'How much', phonetic: 'duōshǎo qián' },
      { id: 'zh-l4-v5', term: '好喝', translation: 'Delicious (drinks)', phonetic: 'hǎohē' },
    ],
    phrases: [
      { id: 'zh-l4-p1', phrase: '请给我一杯咖啡', translation: 'A coffee, please', phonetic: 'qǐng gěi wǒ yì bēi kāfēi' },
      { id: 'zh-l4-p2', phrase: '多少钱？', translation: 'How much is it?', phonetic: 'duōshǎo qián' },
    ],
    activities: [
      { id: 'zh-l4-a1', type: 'video', title: 'Order at a café', description: 'Watch your AI teacher order a coffee.' },
      { id: 'zh-l4-a2', type: 'vocabulary', title: 'Vocabulary review', description: 'Practice café words.' },
      { id: 'zh-l4-a3', type: 'audio', title: 'Speak it out loud', description: 'Practice ordering with your AI teacher.' },
    ],
    aiTeacherPrompt: {
      teacherName: 'Wei',
      spokenLanguage: 'English',
      teachingLanguage: 'zh',
      systemPrompt:
        'You are Wei, a friendly Chinese teacher. Speak only in English and teach the student café vocabulary: kāfēi, chá, càidān, duōshǎo qián, hǎohē, and how to order with "Qǐng gěi wǒ yì bēi kāfēi". Keep sentences short, encourage the student to repeat words out loud, and gently correct pronunciation.',
    },
  },
  {
    id: 'zh-lesson-5',
    unitId: 'zh-unit-1',
    languageCode: 'zh',
    order: 5,
    title: 'Family & Friends',
    description: 'Talk about your family and friends in Chinese.',
    goal: 'Describe your family and introduce a friend.',
    xpReward: 10,
    imageUrl: 'https://picsum.photos/seed/zh-lesson-5/400/400',
    vocabulary: [
      { id: 'zh-l5-v1', term: '家人', translation: 'Family', phonetic: 'jiārén' },
      { id: 'zh-l5-v2', term: '朋友', translation: 'Friend', phonetic: 'péngyou' },
      { id: 'zh-l5-v3', term: '妈妈', translation: 'Mom', phonetic: 'māma' },
      { id: 'zh-l5-v4', term: '爸爸', translation: 'Dad', phonetic: 'bàba' },
      { id: 'zh-l5-v5', term: '兄弟姐妹', translation: 'Siblings', phonetic: 'xiōngdì jiěmèi' },
    ],
    phrases: [
      { id: 'zh-l5-p1', phrase: '你家有几口人？', translation: 'How many people are in your family?', phonetic: 'nǐ jiā yǒu jǐ kǒu rén' },
      { id: 'zh-l5-p2', phrase: '我有...', translation: 'I have...', phonetic: 'wǒ yǒu' },
    ],
    activities: [
      { id: 'zh-l5-a1', type: 'vocabulary', title: 'Vocabulary review', description: 'Practice family words.' },
      { id: 'zh-l5-a2', type: 'chat', title: 'Chat practice', description: 'Text with your AI tutor about your family.' },
      { id: 'zh-l5-a3', type: 'audio', title: 'Speak it out loud', description: 'Practice family phrases.' },
    ],
    aiTeacherPrompt: {
      teacherName: 'Wei',
      spokenLanguage: 'English',
      teachingLanguage: 'zh',
      systemPrompt:
        'You are Wei, a friendly Chinese teacher. Speak only in English and teach the student family vocabulary: jiārén, péngyou, māma, bàba, xiōngdì jiěmèi, and how to ask and answer "Nǐ jiā yǒu jǐ kǒu rén?". Keep sentences short, encourage the student to repeat words out loud, and gently correct pronunciation.',
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
