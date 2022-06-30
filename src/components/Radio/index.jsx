import * as S from './styles'

const Radio = ({
  label,
  labelFor,
  value,
  name,
  labelColor,
  onCheck
}) => {
  
  const onChange = () => {
    !!onCheck && onCheck(value)
  }

  return (
    <S.Wrapper>
      <S.Input 
        type="radio"
        id={labelFor}
        value={value}
        name={name}
        onChange={onChange}
      />
      {!!label &&
        <S.Label htmlFor={labelFor} labelColor={labelColor}>{label}</S.Label>
      }
    </S.Wrapper>
  )
}

export default Radio
