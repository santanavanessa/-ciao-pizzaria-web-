import { MapPinLine, CurrencyDollar } from "phosphor-react";
import { TitleText } from "../../../../src/components/Typography";
import { SectionTitle } from "../SectionTitle";
import { CompleteOrderFormContainer, FormSectionContainer } from "./styles";
import { useTheme } from "styled-components";
import { AddressForm } from "./AddressForm";
import { PaymentMethodOptions } from "./PaymentMethodOptions";

export function CompleteOrderForm() {

    const { colors } =useTheme();
    return (
        <CompleteOrderFormContainer>
            <TitleText size="xs" color="subtitle" className="complete-order-subtitle">
                Complete seu pedido
            </TitleText>
            <FormSectionContainer>
                <SectionTitle
                    title="Endereço de Entrega"
                    subtitle="Informe o endereço onde deseja receber seu pedido"
                    icon={<MapPinLine color={colors["brand-orange"]} size={22}/>}
                />
                <AddressForm/>
            </FormSectionContainer>
            <FormSectionContainer>
                <SectionTitle
                    title="Pagamento"
                    subtitle="O pagamento é feito na entrega. Escolha a forma que deseja pagar"
                    icon={<CurrencyDollar color={colors["brand-orange"]} size={22}/>}
                />

            <PaymentMethodOptions/>
         
            </FormSectionContainer>
        </CompleteOrderFormContainer>
    )
}