const Filter = ({searchChars, change}) => {
    return (
        <div>find countries <input value={searchChars} onChange={change}></input></div>
    )
}

export default Filter