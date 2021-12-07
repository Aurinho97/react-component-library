import React from 'react';
import { render } from '@testing-library/react';

import Button from "./Button";

describe('Button', () => {
    test('Renders Primary Button component', () => {
        render(<Button variant="primary" label="Primary" />)
    });

    test('Renders Secondary Button component', () => {
        render(<Button variant="secondary" label="Secondary" />)
    });
});
