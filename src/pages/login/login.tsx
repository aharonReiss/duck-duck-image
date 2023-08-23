import React, { useEffect, useState } from 'react';
import './login.css';
import { useTranslation } from 'react-i18next';
import ButtonSubmit from '../../componennts/genericComponennts/ButtonSubmit/buttonSubmit';
import authService from '../../services/AuthService';
import { User } from '../../Dtos/User';
import { useNavigate } from 'react-router-dom';
import CustomInput from '../../componennts/genericComponennts/CustomInput/CustomInput';
import DuckDuckStorage from '../../utils/DuckDuckStorage';

function LoginPage() {
  const { t } = useTranslation()
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    console.log(process.env.PUBLIC_URL)
    console.log(process.env['REACT_APP_BACK_URL'])
  },[])

  const loginWithUsernameAndPassword =async () => {
    try{
      const res = await authService.loginWithUserNameAndPassword(userName,password);
      if(res){
        console.log(res.access_token)
        const user: User = {
          email: userName,
          token : res.access_token
        }
        DuckDuckStorage.saveUser(JSON.stringify(user));
        navigate('/homePage')
      }
    }
    catch(ex){
      alert('ההזדהות נכשלה!!')
    }
  }

  const onChangeUserName = (event:any) => {
    setUserName(event.target.value)
  }

  const onChangePassword = (event:any) => {
    setPassword(event.target.value)
  }

  return (
    <div className="container">
       <div className='right-side'>
        <img src='/duck-duck-image/img/duckImgLogin.svg' alt="" />
       </div>

       <div className='left-side'>
         <div className='fields-container'>
            <img src={'/duck-duck-image/img/headerLogin.svg'} alt="" />
            {/* <input type="email" placeholder={t('Login.PlaceHolderUserName')} onChange={(e) => onChangeUserName(e)}/> */}
            <CustomInput type={'email'} placeholder={t('Login.PlaceHolderUserName')} width={'100%'} onChangeInput={onChangeUserName}/>
            {/* <input type="password" placeholder={t('Login.PlaceHolderPassword')} onChange={(e) => onChangePassword(e)}/> */}
            <CustomInput type={'password'} placeholder={t('Login.PlaceHolderPassword')} width={'100%'} onChangeInput={onChangePassword}/>
            <ButtonSubmit text={t('Login.ButtonSubmit')} func={loginWithUsernameAndPassword}/>
         </div>
       </div>
    </div>
  );
}

export default LoginPage;