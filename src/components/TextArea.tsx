import { Form } from 'react-bootstrap';


interface TextAreaProps {
    loading?: boolean;
    type: string;
    placeholder: string;
    value: string;
    onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export const TextArea = ({ loading, type, placeholder, value, onChange }: TextAreaProps) => {
    return (
        <Form.Control as="textarea" autoFocus={type === "from"} style={{ height: '150px' }} placeholder={placeholder} />
    )
}
