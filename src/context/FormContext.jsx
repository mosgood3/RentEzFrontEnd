import React, {createContext, useState } from 'react';

const FormContext = createContext();

export const FormProvider = ({  children }) => {

    const [formData, setFormData] = useState ({
        name : '',
        email : '',
        password : '',
        plan : '',
        billingaddress: '',
        namecard : '',
        cardnumber : '',
        expdate : '',
        cvv : ''
    });

    const [currentStep, setCurrentStep] = useState(1);
    const nextStep = () => setCurrentStep((prev) => prev + 1);
    const prevStep = () => setCurrentStep((prev) => prev - 1);

    return (
        <FormContext.Provider value ={{formData, setFormData, currentStep, nextStep, prevStep}}>
            {children}
        </FormContext.Provider>
    );

};

export default FormContext;
