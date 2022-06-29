import * as S from './styles'

const Radio = ({
  label
}) => {
  
  return (
    <S.Wrapper>
      <S.Input type="radio" />
      <S.Label>{label}</S.Label>
    </S.Wrapper>
  )
}

export default Radio