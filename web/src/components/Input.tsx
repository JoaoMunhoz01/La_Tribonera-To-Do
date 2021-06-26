interface Props {
  nome: string;
  type?: string;
  onChange: (str: string) => void;
  autocomplete?: string;
}

const Input: React.FC<Props> = props => {
  return (
    <div className="input-group">
      <label htmlFor={props.nome}>{props.nome}</label>
      <input
        id={props.nome}
        type={props.type ?? "text"}
        placeholder={props.nome}
        onChange={e => props.onChange(e.target.value)}
        autoComplete={props.autocomplete ?? ""}
        required
      />
    </div>
  );
};

export default Input;
