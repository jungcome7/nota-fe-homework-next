import { atom } from 'jotai';

export const selectedChatIdAtom = atom<string | null>(null);

export const selectedChatModelIdAtom = atom<string | null>(null);

export const inputValueAtom = atom<string>('');
