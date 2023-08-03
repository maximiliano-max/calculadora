import React from 'react';
import '../estilo/btnClear.css';

const BtnClear = (props) => (
    <div className='btn-clear' onClick={props.manejarClear}>
        {props.children}
    </div>
)

export default BtnClear;