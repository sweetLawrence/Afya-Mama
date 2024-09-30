

const LabCard = ({upper, value}) => {
  return (
    <div className='lab_card'>
        <div className="upper">{upper}</div>
        <div className="value">{value}</div>
    </div>
  )
}

export default LabCard