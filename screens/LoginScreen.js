import { useContext, useState } from 'react';

import AuthContent from '../components/Auth/AuthContent';
import LoadingOverlay from '../components/ui/LoadingOverlay';
import { loginUser } from '../Utils/Auth';
import { Alert } from 'react-native';
import { AuthContext } from '../store/context/auth-context';

function LoginScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const AuthCxt= useContext(AuthContext)

  async function loginHandler({ email, password }) {
    setIsAuthenticating(true);
    try{

      const token  = await loginUser(email, password);
      AuthCxt.authenticate(token)
    }
    catch(error){
      Alert.alert('invalid Attemps','please check the credential')
      setIsAuthenticating(false);
    }
  }

  if (isAuthenticating) {
    return <LoadingOverlay message="Logging you in..." />;
  }

  return <AuthContent isLogin onAuthenticate={loginHandler} />;
}

export default LoginScreen;