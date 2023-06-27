import React from 'react';
import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { nanoid } from 'nanoid';
import {
  FormContainer,
  Label,
  Input,
  ErrorValue,
  Button,
} from './ContactForm.styled';

const schema = yup.object().shape({
  name: yup.string().required(),
  number: yup.string().min(7).required(),
});

const initialValues = {
  id: '',
  name: '',
  number: '',
};

export const ContactForm = ({ onSubmit }) => {
  const handleSubmit = (values, { resetForm }) => {
    const contact = {
      id: 'id-' + nanoid(),
      name: values.name,
      number: values.number,
    };
    onSubmit(contact);
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
          <Input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            placeholder="Rosie Simpson"
          />
          <ErrorMessage name="name" component={ErrorValue} />
        </Label>
        <Label htmlFor="">
          Number
          <Input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[\-.\s]?\(?\d{1,3}?\)?[\-.\s]?\d{1,4}[\-.\s]?\d{1,4}[\-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            placeholder="000-00-00"
          />
          <ErrorMessage name="number" component={ErrorValue} />
        </Label>
        <Button type="submit">Add contact</Button>
      </FormContainer>
    </Formik>
  );
};
