import React from 'react';
import Select from 'react-select';
import s from './style.module.scss';

const customStyles = {
    option: (provided, state) => ({
        ...provided,
        color: state.isSelected ? 'white' : '#4b4165',
        backgroundColor: state.isSelected ? '#4871cc' : state.isFocused && '#eaeffe',
        padding: 10,
        textAlign: 'center',
        fontFamily: 'Champagne',
        fontWeight: 'bold',
        fontSize: 17
    }),
    container: (provided) => ({
        ...provided,
        textAlign: 'center'
    }),
    singleValue: () => ({
        fontFamily: 'Champagne',
        fontWeight: 'bold',
        fontSize: 17,
        color: '#4b4165',
        margin: 'auto',
        paddingLeft: 50
    }),
    placeholder: () => ({
        fontFamily: 'Champagne',
        fontWeight: 'bold',
        fontSize: 17,
        color: 'grey',
        margin: 'auto',
        paddingLeft: 55
    })
};

function ModalSelect({ items, error, value, setFieldValue }) {
    return (
        <>
            <Select
                name="origin"
                options={items}
                styles={customStyles}
                placeholder="Origin"
                onChange={(option) => setFieldValue('origin', option.value)}
                value={items.find((option) => option.value === value)}
            />
            {error && <div className={s.errorText}>{error}</div>}
        </>
    );
}

export default ModalSelect;
