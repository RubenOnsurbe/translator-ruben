import { SUPORTED_LANGUAGES } from '../constants';
import { FromLanguage, Language } from '../types';

const apiKey = '7c8b4730-cf7c-40a6-85b4-c48108b4ff6a:fx';
const apiUrl = 'https://api.deepl.com/v2';

const client = new Depl({
    apiKey: apiKey,
    apiUrl: apiUrl
});

export async function translate({ fromLanguage, toLanguage, text }: { fromLanguage: FromLanguage, toLanguage: Language, text: string }) {

    try {
        const response = await client.translate({
            text: text,
            source_lang: fromLanguage,
            target_lang: toLanguage
        });

        return response.translation;
    } catch (error) {
        console.error('Error translating text:', error);
        throw error;
    }
}
