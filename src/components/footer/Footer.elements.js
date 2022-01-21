import styled from "styled-components";

export const FooterWrapper = styled.div`
  background-color: #101522;
  background: url("/images/footer/wave.svg");
  padding: 10rem 0 2rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  margin-top: 4rem;

  p {
    font-size: 16px;
  }
`;

export const FooterLeft = styled.div``;

export const FotterTitle = styled.h2`
  font-size: 26px;
`;

export const FooterInfo = styled.div`
  margin-top: 1.8rem;
`;
export const InfoTitle = styled.h3`
  margin: 1rem 0;
  font-size: 20px;
`;

export const Address = styled.p`
  padding-left: 1rem;
`;

export const PhoneInfo = styled.div`
  padding-left: 1rem;
`;

export const Phone = styled.p``;

export const FooterRight = styled.div``;

export const SiteLinks = styled.div`
  margin-bottom: 1.8rem;
`;

export const SocialLinks = styled.ul`
  display: flex;
  padding: 0;
`;

export const SocialLinkItem = styled.li`
  display: inline-block;
  margin: 0 0.4rem;
  padding: 0.6rem;
  transition: 0.5s ease-out;
  a {
    text-decoration: none;
    color: #fff;
    transition: 0.5s ease-out;
    :hover {
      color: #0d6efd;
    }
  }
  :hover {
    background: rgba(255, 255, 255, 0.1);
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1),
      inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.2);
    border-radius: 10px;
  }
`;

export const FooterSubscription = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-bottom: 24px;
  padding: 24px;
  color: #fff;
`;

export const FooterSubHeading = styled.p`
  margin-bottom: 24px;
  font-size: 24px;
`;

export const FooterSubText = styled.p`
  margin-bottom: 24px;
  font-size: 20px;
`;

export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 820px) {
    flex-direction: column;
    width: 80%;
  }
`;

export const FormInput = styled.input`
  padding: 10px 20px;
  border-radius: 2px;
  margin-right: 10px;
  outline: none;
  border: none;
  font-size: 16px;
  border: 1px solid #fff;

  &::placeholder {
    color: #242424;
  }

  @media screen and (max-width: 820px) {
    width: 100%;
    margin: 0 0 16px 0;
  }
`;
