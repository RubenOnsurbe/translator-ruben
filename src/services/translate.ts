import { FromLanguage, Language } from '../types';

const authKey = '7c8b4730-cf7c-40a6-85b4-c48108b4ff6a:fx';
const apiUrl = 'https://api-free.deepl.com/v2/translate';

export async function translate({ fromLanguage, toLanguage, text }: { fromLanguage: FromLanguage, toLanguage: Language, text: string }): Promise<string> {
    const sourceLang = fromLanguage === 'auto' ? '' : fromLanguage;
    const params = new URLSearchParams({
        auth_key: authKey,
        text,
        target_lang: toLanguage,
    });

    if (sourceLang) {
        params.append('source_lang', sourceLang);
    }

    try {
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: params.toString(),
        });

        if (!response.ok) {
            throw new Error(`Error translating text: ${response.statusText}`);
        }

        const data = await response.json();
        return data.translations[0].text;
    } catch (error) {
        console.error('Error translating text:', error);
        throw error;
    }
}
