import s from './Input.module.scss';

interface InputProps {
  placeholder: string;
  type: string;
  name: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({ placeholder, type, name, onChange }) => (
  <input
    className={s.input}
    placeholder={placeholder}
    type={type}
    name={name}
    onChange={onChange}
  />
);

export default Input;