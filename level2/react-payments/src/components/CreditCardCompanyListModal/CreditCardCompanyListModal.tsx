import { useNavigate } from 'react-router-dom';

import * as S from './CreidtCardCompanyListModal.styles';
import BC카드 from '../../assets/images/BC카드.png';
import 국민카드 from '../../assets/images/국민카드.png';
import 롯데카드 from '../../assets/images/롯데카드.png';
import 신한카드 from '../../assets/images/신한카드.png';
import 우리카드 from '../../assets/images/우리카드.png';
import 카카오뱅크 from '../../assets/images/카카오뱅크.png';
import 하나카드 from '../../assets/images/하나카드.png';
import 현대카드 from '../../assets/images/현대카드.png';
import useCreditCardFormActions from '../../hooks/creditCardForm/useCreditCardFormActions';
import useModalAcitons from '../../hooks/modal/useModalAcitons';
import { CreditCardCompany } from '../../types';

const CreditCardCompanyListModal = () => {
  const navigate = useNavigate();
  const modalDispatch = useModalAcitons();
  const creditCardFormDispatch = useCreditCardFormActions();

  const handleClick = (cardName: CreditCardCompany) => {
    creditCardFormDispatch({
      type: 'SET_CREDIT_CARD_COMPANY',
      payload: cardName,
    });
    modalDispatch({ type: 'CLOSE_MODAL' });
    navigate(`/credit-card/create`);
  };

  interface CardIcon {
    name: CreditCardCompany;
    src: string;
  }

  const cardIcons = [
    { name: 'BC카드', src: BC카드 },
    { name: '신한카드', src: 신한카드 },
    { name: '카카오뱅크', src: 카카오뱅크 },
    { name: '현대카드', src: 현대카드 },
    { name: '우리카드', src: 우리카드 },
    { name: '롯데카드', src: 롯데카드 },
    { name: '하나카드', src: 하나카드 },
    { name: '국민카드', src: 국민카드 },
  ] satisfies CardIcon[];

  return (
    <S.Container>
      <S.IconWrapper>
        {cardIcons.map((cardIcon: CardIcon) => (
          <S.IconButton
            key={cardIcon.name}
            onClick={() => handleClick(cardIcon.name)}
            data-id={cardIcon.name}
          >
            <S.Icon src={cardIcon.src} alt={cardIcon.name} />
            <S.IconLabel>{cardIcon.name}</S.IconLabel>
          </S.IconButton>
        ))}
      </S.IconWrapper>
    </S.Container>
  );
};

export default CreditCardCompanyListModal;