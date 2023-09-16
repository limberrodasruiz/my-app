import React from "react";
import {screen, render} from '@testing-library/react'

import { ProductPage } from "./";
//1.- crear un test que falle (RED)
//2.- lo minimo necesario para que el test pase (GREEN)
//3.-REFACTORS(celan code, code smells)

// eslint-disable-next-line testing-library/no-render-in-setup
beforeEach(() => render(<ProductPage/>))

describe('ProductPage', () => {
it('must display a title', () =>{
    
    // eslint-disable-next-line testing-library/prefer-presence-queries
    expect(screen.queryByText(/product page/i)).toBeInTheDocument();
});

it("must display the product name CARRITO", () =>{
    
    // eslint-disable-next-line testing-library/prefer-presence-queries
    expect(screen.queryByText(/carrito/i)).toBeInTheDocument();
});

});
