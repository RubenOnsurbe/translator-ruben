import { type SUPORTED_LANGUAGES, type AUTO_LANGUAGE } from './constants';

export type Language = keyof typeof SUPORTED_LANGUAGES;
export type AutoLanguage = typeof AUTO_LANGUAGE;
export type FromLanguage = Language | AutoLanguage;
export type ToLanguage = Language;

export interface State {
    fromLanguage: string;
    toLanguage: string;
    fromText: string;
    result: string;
    loading: boolean;
};

export type Action =
    | { type: 'INTERCHANGE_LANGUAGES' }
    | { type: 'SET_FROM_LANGUAGE', payload: string }
    | { type: 'SET_TO_LANGUAGE', payload: string }
    | { type: 'SET_FROM_TEXT', payload: string }
    | { type: 'SET_RESULT', payload: string }
