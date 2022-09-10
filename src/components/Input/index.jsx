import {ContainerInput, InputArea, LabelInput, MessageErro} from "./style";

const Input = ({label, type='text', placeholder, erro, messageErro, register, name}) => {
    return (
      <ContainerInput>
        <LabelInput erro={erro}>{label}</LabelInput>
        <InputArea type={type} placeholder={placeholder} erro={erro} {...register('test')}/>
        {messageErro && <MessageErro>{messageErro}</MessageErro>}
      </ContainerInput>
    );
  };
  
  export default Input;