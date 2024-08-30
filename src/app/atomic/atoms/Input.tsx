
type InputProps = {
    placeholder: string,
    classname: string
    type: string
    onChange: (event: React.ChangeEvent<HTMLInputElement>)=> void
}

function Input({placeholder, classname, type, onChange}: InputProps){
    return(
        <input
                    type={type}
                    id="inputField"
                    name="inputField"
                    placeholder={placeholder}
                    className={classname}
                    onChange = {onChange}
                />
    );
}

export default Input;