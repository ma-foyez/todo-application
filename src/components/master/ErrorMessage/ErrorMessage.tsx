import React from 'react';

interface IProps{
    errorText: string
}

const ErrorMessage = ({ errorText } : IProps) => {
    return (
        <p className="error_message">
            {errorText}
        </p>
    );
};
export default ErrorMessage;