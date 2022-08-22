const Filter = ({searchChars, change}) => {
    return (
        <div>filter shown with <input value={searchChars} onChange={change}></input></div>
    )
}

export default Filter