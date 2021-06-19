interface Props {
  nome: string;
  type?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<Props> = (props) => {
  return (
    <div className="input-group">
      <label htmlFor="{props.nome}">{props.nome}</label>
      <input
        id={props.nome}
        type={props.type?? "text"}
        placeholder={props.nome}
        onChange={props.onChange?? (e => {})}
        required
      />
    </div>
  );
};

export default Input;
