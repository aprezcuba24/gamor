import { memo } from "react"
import {LoginWrapper, LoginForm} from '../../styles/login';
import { Button } from '../../styles/login';

const Login = () => {
  return (
    <LoginWrapper>
      <LoginForm>
        <form action="#">
          <input placeholder="email" />
          <input type="password" />
          <Button>Entrar</Button>
        </form>
      </LoginForm>
    </LoginWrapper>
  )
}

export default memo(Login)
