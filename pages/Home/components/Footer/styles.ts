import styled from "styled-components";

export const FooterContainer = styled.footer`
     margin-top: auto;
    gap: 2rem;
    text-decoration: none;
    align-items: center;
    background-color: ${({ theme }) => theme.colors["brand-orange"]};
    padding: 4rem;
    justify-content: space-between;
    white-space: nowrap;

  

    


`;

export const FooterContent = styled.div`
       
        display: flex;
        justify-content: space-between;

    

        @media (max-width: 450px) {        
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 1rem;
       
    }

`;

export const AboutFooterContainer = styled.div`
    text-decoration: none;
    font-size: ${({ theme }) => theme.textSizes["text-regular-l"]};
    font-weight: bold;
    color: ${({ theme }) => theme.colors["base-white"]};
    align-items: center;

    @media (max-width: 850px) {        
        white-space: nowrap;
    }


`;


export const SocialMediaLinks = styled.ul`
    display: flex;
    gap: 1rem;
    list-style-type: none;
    //margin: 2rem 0;
    cursor: pointer;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding-inline-start: 0;

    li, a {
        color: ${({ theme }) => theme.colors["base-white"]};
        text-decoration: none;
        font-weight: bold;
        transition: 0.3s;
    }


    li:hover, a:hover {
        transform: scale(1.15);
    }

`;
