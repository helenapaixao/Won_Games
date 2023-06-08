import TextField from 'components/TextField'
import { FormWrapper, FormLink } from 'components/Form'
import Button from 'components/Button'
import * as S from './styles'
import { Email, Lock } from 'styled-icons/entypo'

const FormSignIn = () => (
  <FormWrapper>
    <form>
      <TextField
        name="email"
        placeholder="Email"
        type="email"
        icon={<Email />}
      />
      <TextField
        name="passaword"
        placeholder="Password"
        type="password"
        icon={<Lock />}
      />
      <S.ForgotPassword href="#">Forgot your password?</S.ForgotPassword>
      <Button size="large" fullWidth>
        Sign in now
      </Button>
      <FormLink>
        Don't have an account? <a>Sign up</a>
      </FormLink>
    </form>
  </FormWrapper>
)

export default FormSignIn
