import React from 'react';
import { StepOne } from './StepOne';
import { StepTwo } from './StepTwo';
import { StepThree } from './StepThree';
import { StepFour } from './StepFour';
import MultiStep from 'react-multistep';



const steps = [
    {name: 'StepOne', component: <StepOne/>},
    {name: 'StepTwo', component: <StepTwo/>},
    {name: 'StepThree', component: <StepThree/>},
    {name: 'StepFour', component: <StepFour/>}
  ];



export { steps
 


}