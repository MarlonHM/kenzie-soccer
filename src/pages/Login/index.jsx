import * as yup from 'yup';
import {useForm} from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import { BackGroundDiv, CardDiv, FormLogin } from "./style";
import Button from "../../components/Button";
import { useContext } from 'react';
import { UserContext } from '../../providers/User';
import { useHistory } from "react-router-dom";
import Input from '../../components/Input';

const Login = () => {
const {login} = useContext(UserContext);
    const history = useHistory();

    const schema = yup.object().shape({
        email: yup.string().email('Email invalido').required('Campo obrigatório: Email'),
        password: yup.string().min(6, 'Senha mínima: 6 carateres').required('Campo obrigatório: Senha')
    })

    const {register, handleSubmit, formState:{errors}} = useForm({resolver: yupResolver(schema)});

    const singIn = (data) => {
        login(data)
        return history.push('/dashboard')
    }

    return(
        <BackGroundDiv>
            <CardDiv>
                <h3>Entrar em Campo</h3>
                <FormLogin onSubmit={handleSubmit(singIn)}>
                    <Input label='Email:' name="email" type='email' placeholder="Email" register={register} erro={errors?.email} messageErro={errors.email?.message} />
                    <Input label='Senha:' name="password" type='password' placeholder="Senha" register={register} erro={errors?.password} messageErro={errors.password?.message} />
                    
                    <Button primary titleButton='Enviar'/>
                </FormLogin>
            </CardDiv>
        </BackGroundDiv>
    )
}

export default Login;