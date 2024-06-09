declare module 'depl' {
    interface DeplConfig {
        apiKey: string;
        apiUrl: string;
    }

    class Depl {
        constructor(config: DeplConfig);
        translate({ text, source_lang, target_lang }: { text: string; source_lang: string; target_lang: string }): Promise<{ translation: string }>;
    }

    export = Depl;
}
