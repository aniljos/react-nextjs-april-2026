import {fireEvent, render, screen} from '@testing-library/react';
import Counter from './Counter';
import { describe, expect, it, } from 'vitest';

describe("Counter tests", () => {

    it("render counter", async () => {

        render(<Counter initCount={5}/>);
        const element  =await screen.findByText(/Count: 5/); 
        expect(element).toBeInTheDocument();

        const button = screen.getByText("++");
        fireEvent.click(button);
        const updatedElement  =await screen.findByText(/Count: 6/); 
        expect(updatedElement).toBeInTheDocument();

    })
})