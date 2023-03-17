import { memo, useState, useCallback, ChangeEvent } from "react"
import {LoginWrapper, LoginForm} from '../../styles/login';
import { Button } from '../../styles/login';
import { useSecurityContext } from '../../context/SecurityContext';

const initialValue = {
  email: '',
  password: ''
}

type ChangeValue = ChangeEvent<HTMLTextAreaElement | HTMLInputElement>

const Login = () => {
  const [state, setState] = useState(initialValue)
  const { onLogin } = useSecurityContext();
  const handleChange = useCallback(
    ({ target: { name, value }}: ChangeValue) => setState(prev => ({...prev, [name]: value})),
    []
  );
  const handleSubmit = useCallback(() => {
    const { email, password } = state;
    onLogin(email, password)
  }, [state, onLogin])

  return (
    <LoginWrapper>
      <LoginForm>
        <input onChange={handleChange} name="email" placeholder="email" />
        <input onChange={handleChange} name="password" type="password" />
        <Button onClick={handleSubmit}>Entrar</Button>
      </LoginForm>
    </LoginWrapper>
  )
}

export default memo(Login)
