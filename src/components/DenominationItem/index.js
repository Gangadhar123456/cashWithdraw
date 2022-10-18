const DenominationItem = props => {
  const {denominationDetails, updatedBalance} = props
  const {value} = denominationDetails

  const onClickDenomination = () => {
    updatedBalance(value)
  }

  return (
    <li className="denomination-button">
      <button
        type="button"
        className="denomination-button"
        onClick={onClickDenomination}
      >
        {value}
      </button>
    </li>
  )
}
export default DenominationItem
