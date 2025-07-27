import React, { useId } from 'react'

const Input = React.forwardRef(function Input({
    label,
    type = 'text',
    className = '',
    ...props
},ref){
    const Id = useId()
    return (
        <div className='w-full'>
            {label && <label htmlFor={Id} className='text-sm text-zinc-300 mb-1'>{label}</label>}
            <input type={type} className={`py-3 px-1 rounded-lg text-black w-full ${className}`} ref={ref} {...props} id={Id}/>
        </div>
    )
})

export default Input