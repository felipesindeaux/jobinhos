import * as yup from 'yup'
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import api from '../../services/api'
import { toast } from 'react-toastify'
import Header from '../../components/Header'

const Login = () => {

    const formSchema = yup.object().shape({
        email: yup.string().email('E-mail inválido').required('Campo obrigatório'),
        password: yup.string().required('Campo obrigatório')
    })

    const { register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(formSchema)
    })

    const submitData = data => {

        api.post('/login', data)
        .then((response) => {
            const { token } = response.data
            localStorage.setItem("Jobinhos:token", JSON.stringify(token))
            //auth = true
            //history.push(/meuPerfil/:name)
            toast.success('Login realizado')
        })

        .catch((error) => {
            toast.error('Erro na autenticação')
        })
    }

    return (
        <>
        <Header />
        <div>
            <form onSubmit={handleSubmit(submitData)}>
                <img src='src/assets/lock.png' alt='lock'/>

                <label>E-mail</label>
                <input {...register ('email')} />
                {errors.email?.message}

                <label>Senha</label>
                <input {...register ('password')} />
                {errors.senha?.message}

                <span>Ainda não é parceiro? Registre aqui!</span>

                <button type='submit'>Entrar</button>

            </form>
            <div>Bem vindo de volta!</div>
        </div>
        </>
    )
}

export default Login