import * as yup from 'yup';
import {useForm} from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import { BackGroundDiv, CardDiv, FormLogin } from "./style";
import Button from "../../components/Button";
import { useContext } from 'react';
import { UserContext } from '../../providers/User';
import { useHistory } from "react-router-dom";
import Input from '../../components/Input';

const SignUp = () => {
const {signUp} = useContext(UserContext);
    const history = useHistory();

    const schema = yup.object().shape({
        name: yup.string().required('Campo obrigatório: Nome'),
        email: yup.string().email('Email invalido').required('Campo obrigatório: Email'),
        password: yup.string().min(6, 'Senha mínima: 6 carateres').required('Campo obrigatório: Senha'),
        conf_password: yup.string().oneOf([yup.ref('password'), null], "As senhas devem ser identicas").required('Campo obrigatório: Confirmar senha'),
        totalScore: yup.number().default(0),
        totalPhase: yup.number().default(0),
        groups: yup.array().default([])
    })

    const {register, handleSubmit, formState:{errors}} = useForm({resolver: yupResolver(schema)});

    const registering = (data) => {
        delete(data.conf_password)
        signUp(data)
        history.push('/login')
    }

    return(
        <BackGroundDiv>
            <CardDiv>
                <h3>Fazer parte do time</h3>
                <FormLogin onSubmit={handleSubmit(registering)}>
                    <Input label='Nome:' name="name" type='text' placeholder="Neymar Jr" register={register} erro={errors?.name} messageErro={errors.name?.message} />
                    <Input label='Email:' name="email" type='email' placeholder="Email" register={register} erro={errors?.email} messageErro={errors.email?.message} />
                    <Input label='Senha:' name="password" type='password' placeholder="Senha" register={register} erro={errors?.password} messageErro={errors.password?.message} />
                    <Input label='Confirmar senha:' name="conf_password" type='password' placeholder="Confirmar senha" register={register} erro={errors?.conf_password} messageErro={errors.conf_password?.message} />
                    
                    <Button primary titleButton='Cadastrar'/>
                </FormLogin>
            </CardDiv>
        </BackGroundDiv>
    )
}

export default SignUp;