import React, { useContext}  from "react";
import FormContext from "../../context/FormContext";
import Create from "./Create";
import Plan from "./Plan";
import Review from "./Review";

const MultiStepForm = () => {

    const { currentstep } = useContext(FormContext);

    return (
        <div>
            {currentstep} === 1 <Create />
            {currentstep} === 2 <Plan />
            {currentstep} === 3 <Review />

        </div>
    );
};

export default MultiStepForm;
