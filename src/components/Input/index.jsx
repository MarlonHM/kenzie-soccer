import { ContainerInput, InputArea, LabelInput, MessageErro } from "./style";

const Input = ({
  label,
  type = "text",
  placeholder,
  value,
  erro,
  messageErro,
  register,
  rest,
  name,
  onchange,
}) => {
  return (
    <ContainerInput>
      <LabelInput erro={erro}>{label}</LabelInput>
      <InputArea
        type={type}
        placeholder={placeholder}
        defaultValue={value}
        erro={erro}
        {...register(name)}
        onChange={onchange}
        {...rest}
      />
      {messageErro && <MessageErro>{messageErro}</MessageErro>}
    </ContainerInput>
  );
};

export default Input;
