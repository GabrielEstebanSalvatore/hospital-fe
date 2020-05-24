import React from 'react'

const Input = ({title,  currency, value, type, disabled,readOnly,placeholder,data, className="form-control"},onChange) => {

    return ( <div className='input'>
            <span>{title}</span>
            <div className='input__button '>
                <input 
                    type={type}
                    disabled = {disabled}
                    onChange={onChange}
                    value={value}
                    readOnly={readOnly}
                    placeholder={placeholder}
                    data={data}
                    className={className}
                    />
                {currency && <span>{currency}</span>}
            </div>
        </div>
    )
}

export default Input;