interface Props {
  text: string;
  show: boolean;
};

const Alert : React.FC<Props> = ({text, show}) => {
  return (
    <div className={"alert " + (show? "" : "hidden")}>
      <span>{text}</span>
    </div>
  );
};

export default Alert;
