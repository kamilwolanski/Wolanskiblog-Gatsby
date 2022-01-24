import React from 'react';

const StepContext = React.createContext(() => {
    throw new Error('Used StepContext.Consumer without a Provider');
});
const { Provider, Consumer } = StepContext;

export default StepContext;
export { Provider, Consumer };