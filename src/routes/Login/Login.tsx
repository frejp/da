import React, { useContext} from 'react';
import { Form, Formik } from 'formik';
import * as yup from 'yup';
import { useHistory } from 'react-router-dom';

import { FormErrorMessage, FormikInput, PrimaryButton, SmallHeading } from '../../components';
import { BoxWrapper, SpacingY } from './styled';
import { BaseLayout } from '../../components/BaseLayout';
import { login, LoginSuccessObjectType, LoginFailedObjectType, setToken } from '../../Api';
import { AppContext } from '../../App.router';

interface FormData {
  username: string
  password: string
}

const formInitialValues: FormData= {
  username: '',
  password: '',
}

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .required('please provide an username'),
  password: yup
    .string()
    .required('No password provided.')
});

export const Login: React.FC= () => {
  const history = useHistory();
  const { state, dispatch } = useContext(AppContext);

  const handleSubmit = async ({ username, password }: FormData) => {
    const fetchResponse = (await login(username, password)) as LoginSuccessObjectType & LoginFailedObjectType;
    if (fetchResponse.isLoggedIn) {
      dispatch({ type: 'SET_AUTHENTICATION', payload: { isLoggedIn: true, token: '', loginFailedMessage: null } });
      setToken(fetchResponse.token)
      history.push(`/properties`);
    } else {
      dispatch({
        type: 'SET_AUTHENTICATION',
        payload: { isLoggedIn: false, token: 'ads', loginFailedMessage: fetchResponse.errorDescription },
      });
    }
  };

  return (
    <BaseLayout>
      <SpacingY />
      <SmallHeading>LOGIN</SmallHeading>
      <Formik initialValues={formInitialValues} onSubmit={handleSubmit} validationSchema={validationSchema}>
        <Form>
          <BoxWrapper>
            <FormikInput name="username" placeholder="USERNAME" type="text" />
            <FormikInput name="password" placeholder="ENTER PASSWORD" type="password" />
            <PrimaryButton type="submit">LOGIN</PrimaryButton>
            {state.loginFailedMessage && (
              <FormErrorMessage color='red' textAlign="center">
                {state.loginFailedMessage}
              </FormErrorMessage>
            )}
          </BoxWrapper>
        </Form>
      </Formik>
    </BaseLayout>
  );
};
