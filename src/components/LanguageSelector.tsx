import { Form } from "react-bootstrap";
import { SUPORTED_LANGUAGES } from "../constants";
import { FromLanguage, type Language } from "../types.d";

type LanguageSelectorProps =
    | { type: 'from', value: FromLanguage, onChange: (language: FromLanguage) => void }
    | { type: 'to', value: Language, onChange: (language: Language) => void };

export const LanguageSelector = ({ onChange, value }: LanguageSelectorProps) => {
    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        onChange(event.target.value as Language);
    }

    return (
        <Form.Select aria-label="Selecciona el idioma" onChange={handleChange} value={value} >
            {
                Object.entries(SUPORTED_LANGUAGES).map(([key, value]) => (
                    <option key={key} value={key}>
                        {value}
                    </option>
                ))
            }
        </Form.Select>
    )
};