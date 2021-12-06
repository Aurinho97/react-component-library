import React from 'react';

import styles from './Button.module.scss';

type ButtonVariant = 'primary' | 'secondary';

export interface ButtonProps {
    label: string;
    variant: ButtonVariant;
}

const Button: React.FC<ButtonProps> = props => {
    const { label, variant } = props;

    return (
        <button className={`${styles.root} ${styles[variant]}`}>
            {label}
        </button>
    );
};

export default Button;
