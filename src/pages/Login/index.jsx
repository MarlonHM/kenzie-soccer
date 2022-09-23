import * as yup from 'yup';
import {useForm} from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import { AreaBack, BackGroundDiv, CardDiv, FormLogin } from "./style";
import Button from "../../components/Button";
import { useContext } from 'react';
import { UserContext } from '../../providers/User';
import { Link, useHistory } from "react-router-dom";
import { IoMdArrowRoundBack } from 'react-icons/io';

const Login = () => {
    const history = useHistory()
    const {login} = useContext(UserContext)

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
            <AreaBack>
                <Link to='/'> <IoMdArrowRoundBack color='black' size={46}/> </Link>
            </AreaBack>
            <CardDiv>
                <h3>Entrar em Campo</h3>
                <FormLogin onSubmit={handleSubmit(singIn)}>
                    <input name="email" type='email' placeholder="Email" {...register('email')} />
                    <span>{errors.email?.message}</span>

                    <input name="password" type='password' placeholder="Senha" {...register('password')}/>
                    <span>{errors.password?.message}</span>
                    
                    <Button primary titleButton='Enviar'/>
                </FormLogin>
            </CardDiv>
        </BackGroundDiv>
    )
}

export default Login;