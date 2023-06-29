import React from 'react';
import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import {
  FormContainer,
  Label,
  Input,
  ErrorValue,
  Button,
} from './ContactForm.styled';

const schema = yup.object().shape({
  name: yup
    .string()
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    )
    .required(),
  number: yup
    .string()
    .min(7)
    .matches(
      /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
    )
    .required(),
});

const initialValues = {
  name: '',
  number: '',
};

export const ContactForm = ({ onSubmit }) => {
  const handleSubmit = (values, { resetForm }) => {
    onSubmit({ ...values });
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <FormContainer autoComplete="off">
        <Label htmlFor="">
          Name
          <Input type="text" name="name" placeholder="Rosie Simpson" />
          <ErrorMessage name="name" component={ErrorValue} />
        </Label>
        <Label htmlFor="">
          Number
          <Input type="tel" name="number" placeholder="000-00-00" />
          <ErrorMessage name="number" component={ErrorValue} />
        </Label>
        <Button type="submit">Add contact</Button>
      </FormContainer>
    </Formik>
  );
};
