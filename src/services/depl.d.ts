// depl.d.ts
declare module 'depl' {
    interface DeplConfig {
        apiKey: string;
        apiUrl: string;
    }

    class Depl {
        constructor(config: DeplConfig);
        translate(params: { text: string; source_lang: string; target_lang: string }): Promise<{ translation: string }>;
    }

    export = Depl;
}
