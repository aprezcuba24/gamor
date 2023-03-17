import { useRouter } from "next/router";
import { memo, useCallback, useState } from "react";
import { useSecurityContext } from "../../context/SecurityContext";
import { Button, Error, FormStyle, FormWrapper } from "../../styles/form";
import { ChangeValue } from "../types";

const initialValue = {
  email: '',
  password: '',
  repeatPassword: ''
}

const Register = () => {
  const [error, setError] = useState('')
  const [state, setState] = useState(initialValue)
  const { onRegister } = useSecurityContext();
  const router = useRouter()
  const handleChange = useCallback(
    ({ target: { name, value } }: ChangeValue) => setState(prev => ({ ...prev, [name]: value })),
    []
  );
  const handleSubmit = useCallback(() => {
    const { email, password, repeatPassword } = state;
    if (password !== repeatPassword) {
      return setError('Las contraseña no coinciden.')
    }
    onRegister(email, password)
    router.push('/login')
  }, [state, onRegister, router])

  return (
    <FormWrapper>
      <FormStyle>
        <input onChange={handleChange} name="email" placeholder="email" />
        <input onChange={handleChange} name="password" type="password" />
        {error && <Error>{error}</Error>}
        <input onChange={handleChange} name="repeatPassword" type="password" />
        <Button onClick={handleSubmit}>Entrar</Button>
      </FormStyle>
    </FormWrapper>
  )
};

export default memo(Register);
