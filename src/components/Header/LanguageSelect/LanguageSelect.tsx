import React from 'react';
import Select, {  StylesConfig } from 'react-select';
import ValueType from "react-select"
type LanguageOption = {
    value: string;
    label: string;
};


const customStyles: StylesConfig<LanguageOption, false> = {
    control: (provided) => ({
        ...provided,
        borderRadius: '10px',
        minHeight: '50px',
        boxShadow: 'none',
        borderColor: '#d8d8d8',
        backgroundColor: 'transparent',
        '&:hover': {
            borderColor: '#d8d8d8',
        },
        width:"150px",
        zIndex:"12"
    }),
    option: (provided, state) => ({
        ...provided,
        color: state.isSelected ? '#ffffff' : '#666666',
        backgroundColor: state.isSelected ? '#0f101b' : '#ffffff',
        zIndex:"12",
        '&:hover': {
            backgroundColor: state.isSelected ? '#16172a' : '#f7f7f7',
        },
    }),
    // объект стилей для выбранной опции
    singleValue: (provided, state) => ({
        ...provided,
        color: '#ffffff', // устанавливаем белый цвет текста
        // @ts-ignore
        backgroundColor: state?.isSelected ? '#0f101b' : 'transparent', // устанавливаем фон только при выборе
        borderRadius: '10px',
        paddingLeft: '10px',
        zIndex:"12"
    }),
    menu: (provided) => ({
        ...provided,
        borderRadius: '10px',
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
        borderColor: '#d8d8d8',
        zIndex:"12"
    }),
};
interface IProps {
    selectedLanguage:string | undefined,
    setSelectedLanguage: (value: string | undefined) => void,
    languageOptions:LanguageOption[]
}

const LanguageSelect = ({selectedLanguage, setSelectedLanguage, languageOptions}:IProps) => {

    // @ts-ignore
    const handleLanguageChange = (selectedOption: ValueType<LanguageOption, false>) => {
        console.log(languageOptions)
        if (selectedOption) {
            const value = (selectedOption as LanguageOption).label;
            setSelectedLanguage(value.toLowerCase());
            localStorage.setItem("selectedLanguage", value.toLowerCase());
        } else {
            setSelectedLanguage(undefined);
            localStorage.removeItem("selectedLanguage");
        }
    };

    React.useEffect(() => {
        const storedLanguage = localStorage.getItem("selectedLanguage");
        if (storedLanguage) {
            setSelectedLanguage(storedLanguage);
        }
    }, []);

    console.log(selectedLanguage)
    return (
        <Select
            value={languageOptions.find((option) => option.value.toLowerCase() === selectedLanguage?.toLowerCase())}
            defaultValue={languageOptions[0]}
            options={languageOptions}
            onChange={handleLanguageChange}
            styles={customStyles}
            placeholder="Выберите язык"
            isClearable={true}
            // @ts-ignore
            theme={(theme) => ({
                ...theme,
                borderRadius: '10px',
                zIndex:"12",
                colors: {
                    ...theme.colors,
                    primary25: '#d8d8d8',
                    primary: '#007aff',
                },
            })}
        />
    );
};

export default LanguageSelect;
