import { Form } from 'react-bootstrap';
import React from 'react';

interface TextAreaProps {
    loading?: boolean;
    type: string;
    value: string;
    onChange: (value: string) => void;
}

const commonStyle: React.CSSProperties = {
    border: 0,
    height: '200px',
    resize: 'none' as 'none',
};

export const TextArea = ({ loading, type, value, onChange }: TextAreaProps) => {
    const style: React.CSSProperties = type === "from"
        ? commonStyle
        : { ...commonStyle, backgroundColor: '#f6f6f6' };

    const getPlaceholder = (type: string, value: string, loading?: boolean) => {
        if (type === 'from') return 'Texto a traducir';
        if (type === 'to') {
            if (loading) {
                return 'Traduciendo...';
            } if (!loading) {
                return 'Traducción';
            }
        }
    }

    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        onChange(event.target.value);
    }

    return (
        <Form.Control
            as="textarea"
            disabled={type === "to"}
            autoFocus={type === "from"}
            style={style}
            placeholder={getPlaceholder(type, value, loading)}
            value={value}
            onChange={handleChange}
        />
    );
}
