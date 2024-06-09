import { Form } from 'react-bootstrap';


interface TextAreaProps {
    loading?: boolean;
    type: string;
    value: string;
    onChange: (value: string) => void;
}
const commonStyle = {
    border: 0,
    height: '200px',
    resize: 'none',
}


export const TextArea = ({ loading, type, value, onChange }: TextAreaProps) => {
    const style = type === "from" ? commonStyle : { ...commonStyle, backgroundColor: '#f5f5f5' }

    const getPlaceholder = ({ type, loading }: { type: string, loading?: boolean }) => {
        if (type === 'from') return 'Texto a traducir';
        if (loading === true) return 'Traduciendo...';
        if (type === 'to' && loading === false) return 'Texto traducido';
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
            placeholder={getPlaceholder({ type, loading })}
            value={value}
            onChange={handleChange}
        />
    )
}

