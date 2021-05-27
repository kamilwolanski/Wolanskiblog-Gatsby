import { useEffect, useState } from 'react';
import emailService from '../api/emailService';
import validateInfo from '../helpers/validateInfo';

export const initialStateOfValues = { name: '', email: '', subject: '', message: '' };

export const useContact = () => {
  const [values, setValues] = useState(initialStateOfValues);
  const [errors, setErrors] = useState(initialStateOfValues);
  const [eventOfSendEmail, setEventOfSendEmail] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.currentTarget;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const sendEmail = async (e) => {
    setEventOfSendEmail(e);
    e.preventDefault();
    console.log(e);
    setErrors(validateInfo(values));
    setIsSubmitting(true);
  };

  useEffect(() => {
    async function fetchData() {
      if (Object.values(errors).every((x) => x === null || x === '') && isSubmitting) {
        setIsSubmitted(await emailService.sendEmail(eventOfSendEmail).then((response) => response));
        setValues(initialStateOfValues);
        setIsSubmitting(false);
      } else {
        return;
      }
    }
    if (isSubmitting) {
      fetchData();
    }
  }, [errors, isSubmitting, eventOfSendEmail]);

  return { values, handleChange, sendEmail, setIsSubmitted, isSubmitting, errors, isSubmitted };
};
