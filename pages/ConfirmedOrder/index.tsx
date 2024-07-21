import { useEffect } from 'react';

import { ConfirmedOrderContainer, OrderDetailsContainer } from "./styles";
import confirmedOrderIllustration from "../../src/assets/confirmed-order.svg";
import { InfoWithIcon } from '../../src/components/InfoWithIcon'; 
import { useTheme } from "styled-components";
import { MapPin, Clock, CurrencyDollar } from "phosphor-react";
import { useLocation, useNavigate } from "react-router-dom";
import { OrderData } from "../CompleteOrder";
import { paymentMethods } from "../CompleteOrder/components/CompleteOrderForm/PaymentMethodOptions";
import { RegularText, TitleText } from '../../src/components/Typography';

interface LocationType {
  state: OrderData;
}

export function ConfirmedOrderPage() {
  const { colors } = useTheme();
  const location = useLocation();
  const state = location.state as LocationType['state'];
  const navigate = useNavigate();

  useEffect(() => {
    if (!state) {
      navigate("/");
    }
  }, [state, navigate]);

  if (!state) return null;

  return (
    <ConfirmedOrderContainer className="container">
      <div>
        <TitleText size="l">Pedido confirmado!</TitleText>
        <RegularText size="l" color="subtitle">
          Agora é só aguardar que logo seu pedido chegará até você
        </RegularText>
      </div>

      <section>
        <OrderDetailsContainer>
          <InfoWithIcon
            icon={<MapPin weight="fill" />}
            iconBg={colors["brand-orange"]}
            text={
              <RegularText>
                Entrega em <strong>{state.street}</strong>, {state.number}
                <br />
                {state.district} - {state.city}, {state.uf}
              </RegularText>
            }
          />

          <InfoWithIcon
            icon={<Clock weight="fill" />}
            iconBg={colors["brand-orange"]}
            text={
              <RegularText>
                Previsão de entrega
                <br />
                <strong>20 min - 30 min</strong>
              </RegularText>
            }
          />

          <InfoWithIcon
            icon={<CurrencyDollar weight="fill" />}
            iconBg={colors["brand-orange"]}
            text={
              <RegularText>
                Pagamento na entrega
                <br />
                <strong>{paymentMethods[state.paymentMethod].label}</strong>
              </RegularText>
            }
          />
        </OrderDetailsContainer>
        <img src={confirmedOrderIllustration} alt="Ilustração de pedido confirmado" />
      </section>
    </ConfirmedOrderContainer>
  );
}
