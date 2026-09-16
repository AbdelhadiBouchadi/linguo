import type { LanguageCode, Unit } from '@/types/learning';

export const units: Unit[] = [
  {
    id: 'es-unit-1',
    languageCode: 'es',
    order: 1,
    level: 'A1',
    title: 'Basics 1',
    description: 'Greetings, numbers, and everyday words.',
  },
  {
    id: 'fr-unit-1',
    languageCode: 'fr',
    order: 1,
    level: 'A1',
    title: 'Basics 1',
    description: 'Greetings, numbers, and everyday words.',
  },
  {
    id: 'ja-unit-1',
    languageCode: 'ja',
    order: 1,
    level: 'A1',
    title: 'Basics 1',
    description: 'Greetings, numbers, and everyday words.',
  },
];

export function getUnitsByLanguage(code: LanguageCode): Unit[] {
  return units
    .filter((unit) => unit.languageCode === code)
    .sort((a, b) => a.order - b.order);
}

export function getUnitById(id: string): Unit | undefined {
  return units.find((unit) => unit.id === id);
}
