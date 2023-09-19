import React from 'react';
import { NativeBaseProvider } from 'native-base';

import Calculator from './calculadoraApp/Calculator.js';

export default function App() {

  return (
    <NativeBaseProvider>
      <Calculator/>
    </NativeBaseProvider>
  )
}
