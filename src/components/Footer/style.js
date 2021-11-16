import styled from 'styled-components';

export const BottomBar = styled.div`
    width: 100%;
    background-color: var(--tertiary);
    position: fixed;
    bottom: 0;
    height: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: end;
    padding: 20px;
    z-index: 3;
`;

export const Payment = styled.div`
    display: inline-flex;
    gap: 10px;
    margin: 20px;
    img{
        height: 20px;
    }
`;

export const SocialMedia = styled.div``;

export const SiteDetails = styled.div`
    font-size: 12px;
    color: var(--text);
    
`;
