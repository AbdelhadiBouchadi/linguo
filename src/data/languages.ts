import type { Language, LanguageCode } from '@/types/learning';

export const languages: Language[] = [
  {
    code: 'es',
    name: 'Spanish',
    nativeName: 'Español',
    flagEmoji: 'https://flagcdn.com/w320/es.png',
    learnersLabel: '28.4M learners',
    description: 'Learn the language spoken across Spain and Latin America.',
    greeting: 'Hola',
  },
  {
    code: 'fr',
    name: 'French',
    nativeName: 'Français',
    flagEmoji: 'https://flagcdn.com/w320/fr.png',
    learnersLabel: '19.4M learners',
    description: 'Learn the language of France, Belgium, and West Africa.',
    greeting: 'Salut',
  },
  {
    code: 'ja',
    name: 'Japanese',
    nativeName: '日本語',
    flagEmoji: 'https://flagcdn.com/w320/jp.png',
    learnersLabel: '12.7M learners',
    description: 'Learn hiragana, katakana, and everyday Japanese phrases.',
    greeting: 'Konnichiwa',
  },
  {
    code: 'ko',
    name: 'Korean',
    nativeName: '한국어',
    flagEmoji: 'https://flagcdn.com/w320/kr.png',
    learnersLabel: '9.3M learners',
    description: 'Learn hangul and conversational Korean.',
    greeting: 'Annyeong',
  },
  {
    code: 'de',
    name: 'German',
    nativeName: 'Deutsch',
    flagEmoji: 'https://flagcdn.com/w320/de.png',
    learnersLabel: '8.1M learners',
    description:
      'Learn the language spoken across Germany, Austria, and Switzerland.',
    greeting: 'Hallo',
  },
  {
    code: 'zh',
    name: 'Chinese',
    nativeName: '中文',
    flagEmoji: 'https://flagcdn.com/w320/cn.png',
    learnersLabel: '7.4M learners',
    description: 'Learn Mandarin Chinese, from pinyin to everyday phrases.',
    greeting: 'Nǐ hǎo',
  },
];

export function getLanguageByCode(code: LanguageCode): Language | undefined {
  return languages.find((language) => language.code === code);
}
