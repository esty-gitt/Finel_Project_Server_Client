
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import '../css/registerCss.css';
import { Message } from 'primereact/message';

import React, { useEffect, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { useDispatch } from 'react-redux';

import { Password } from 'primereact/password';
import { Checkbox } from 'primereact/checkbox';
import { Dialog } from 'primereact/dialog';
import { Divider } from 'primereact/divider';
import { classNames } from 'primereact/utils';

import { useLoginMutation } from '../slices/users/userApiSlice';
import { useNavigate } from 'react-router-dom';
import { setToken } from '../slices/users/userSlice';
const Login= () => {   
    const dispatch= useDispatch(); // לא חובה
    const navigate = useNavigate(); 
    const handleClick = () => {
        navigate('/register');
    }
    const [showMessage, setShowMessage] = useState(false);
    const [formData, setFormData] = useState({});
const [loginn, { isLoading ,isError,eror,isSuccess,data}] = useLoginMutation();

    const defaultValues = {
       
        userName:'',
        password:'',
       
    }



    const { control, formState: { errors }, handleSubmit, reset } = useForm({ defaultValues });

    const onSubmit = async (data) => {
        setFormData(data);
        try {
          await loginn(data).unwrap();
      // עדכון ה־token במצב
          
        } catch (err) {
            console.error('Failed to login:', err);
            setShowMessage(false);
        }
    };
    useEffect(() => {
       
        
         if(isSuccess) {
           { 
            console.log('Login successful:', data.accessToken);
            const tt=data.accessToken
            dispatch(setToken({token:tt})); // עדכון ה־token במצב
            setShowMessage(true);
            reset();
            navigate('/layout');} // נווט לדף הבית או דף אחר}
         }
    },[isSuccess])
    const getFormErrorMessage = (name) => {
        return errors[name] && <small className="p-error">{errors[name].message}</small>
    };

    const dialogFooter = <div className="flex justify-content-center"><Button label="OK" className="p-button-text" autoFocus onClick={() => setShowMessage(false)} /></div>;
    const passwordHeader = <h6>Pick a password</h6>;
    const passwordFooter = (
        <React.Fragment>
            <Divider />
            <p className="mt-2">Suggestions</p>
            <ul className="pl-2 ml-2 mt-0" style={{ lineHeight: '1.5' }}>
                <li>At least one lowercase</li>
                <li>At least one uppercase</li>
                <li>At least one numeric</li>
                <li>Minimum 8 characters</li>
            </ul>
        </React.Fragment>
    );

    return (
        <div className="form-demo">
          <alert >{isError&&<Message text="Incorrect data" />}</alert>
            <Dialog  visible={showMessage} onHide={() => setShowMessage(false)} position="top" footer={dialogFooter} showHeader={false} breakpoints={{ '960px': '80vw' }} style={{ width: '30vw' }}>
                <div className="flex justify-content-center flex-column pt-6 px-3">
                    <i className="pi pi-check-circle" style={{ fontSize: '5rem', color: 'var(--green-500)' }}></i>
                    <h5>login Successful!</h5>
                    <p style={{ lineHeight: 1.5, textIndent: '1rem' }}>
                        You are logged in under the username <b>{formData.userName}</b>
                    </p>
                </div>
            </Dialog>

            <div className="flex justify-content-center">
                <div className="card">
                    <h5 className="text-center">Register</h5>
                    <form onSubmit={handleSubmit(onSubmit)} className="p-fluid">
                        
                        <div className="field">
                            <span className="p-float-label">
                                <Controller name="userName" control={control} rules={{ required: 'UserName is required.' }} render={({ field, fieldState }) => (
                                    <InputText id={field.name} {...field}  />
                                )} />
                                <label htmlFor="userName" className={classNames({ 'p-error': errors.userName })}>UserName*</label>
                            </span>
                            {getFormErrorMessage('userName')}
                        </div>
                        
                  
                        <div className="field">
                            <span className="p-float-label">
                                <Controller name="password" control={control} rules={{ required: 'Password is required.' }} render={({ field, fieldState }) => (
                                    <Password id={field.name} {...field} toggleMask className={classNames({ 'p-invalid': fieldState.invalid })} header={passwordHeader} footer={passwordFooter} />
                                )} />
                                <label htmlFor="password" className={classNames({ 'p-error': errors.password })}>Password*</label>
                            </span>
                            {getFormErrorMessage('password')}
                        </div>
                        
                        
                        <Button  icon="pi pi-user-plus" type="submit" label="Sigh In" className="mt-2"/>
                        <div className="mt-2">
                     <Divider  className="hidden md:flex" >
                                             <b>OR</b>
                    </Divider>
                    <Divider  className="flex md:hidden" align="center">
                                             <b>OR</b>
                    </Divider>
                </div>
                        <Button  icon="pi pi-user"  label="Sigh Up" className="mt-2" onClick={handleClick} />
                    </form>
                </div>
            </div>
        </div>
    );}
export default Login;