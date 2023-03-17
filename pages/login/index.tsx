import { memo, useState, useCallback } from "react"
import { FormWrapper, FormStyle, Error } from '../../styles/form';
import { Button } from '../../styles/form';
import { useSecurityContext } from '../../context/SecurityContext';
import Link from "next/link";
import { ChangeValue } from "../types";
import { useRouter } from "next/router";

const initialValue = {
  email: '',
  password: ''
}

const Login = () => {
  const [state, setState] = useState(initialValue)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const { onLogin } = useSecurityContext();
  const router = useRouter()
  const handleChange = useCallback(
    ({ target: { name, value } }: ChangeValue) => setState(prev => ({ ...prev, [name]: value })),
    []
  );
  const handleSubmit = useCallback(async () => {
    setError('')
    setLoading(true)
    const { email, password } = state;
    if (await onLogin(email, password)) {
      return router.push('/')
    }
    setLoading(false)
    setError('Usuario no encontrado');
  }, [state, onLogin, router])

  return (
    <FormWrapper>
      <FormStyle>
        {error && <Error>{error}</Error>}
        <input onChange={handleChange} name="email" placeholder="email" />
        <input onChange={handleChange} name="password" type="password" />
        <Button onClick={handleSubmit}>Entrar</Button>
        {loading && 'Loading...'}
        <Link href="/register">Register</Link>
      </FormStyle>
    </FormWrapper>
  )
}

export default memo(Login)
