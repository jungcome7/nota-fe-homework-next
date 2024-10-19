import { atom } from 'jotai';

export const selectedChatIdAtom = atom<string | null>(null);

export const selectedChatModelNameAtom = atom<string | null>(null);

export const inputValueAtom = atom<string>('');
