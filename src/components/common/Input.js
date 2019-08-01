import React from 'react'

const Input = ({ name, placeholder, onChange, onSubmit, value }) => {
    return <input name={name}
        value={value}
        placeholder={placeholder}
        onChange={(event) => onChange(event)}
        onSubmit={onSubmit} />
}

export { Input }