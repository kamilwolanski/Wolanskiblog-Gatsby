import React from 'react';
import { Consumer } from './StepContext';

const withStep = ChildComponent => props => (
    <Consumer>
        {({ nextStep, prevStep, currentStep, handleChange }) => (
            <ChildComponent
                {...props}
                currentStep={currentStep}
                nextStep={nextStep}
                prevStep={prevStep}
                handleChange={handleChange}
            />
        )}
    </Consumer>
);

export default withStep;