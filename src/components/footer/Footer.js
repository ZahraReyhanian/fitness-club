import React, { useEffect, useState } from "react";
import {
  FooterWrapper,
  FooterLeft,
  FooterRight,
  FotterTitle,
  FooterInfo,
  InfoTitle,
  Address,
  Phone,
  PhoneInfo,
  SiteLinks,
  SocialLinks,
  SocialLinkItem,
} from "./Footer.elements";
import { Row, Col, Container } from "react-bootstrap";
import { Call, Instagram, LocationOn, Telegram } from "@material-ui/icons";
import { footerData } from "../data/footerDate";
import MenuButton from "../buttons/MenuButton";
import { getCallUs } from "../../api/api_home";

const Footer = () => {
  const [info, setInfo] = useState({});

  useEffect(() => {
    getCallUs((isOk, data) => {
      if (!isOk) return alert(data.message);
      else {
        console.log(data.data.callUs);
        setInfo(data.data.callUs);
      }
    });
  }, []);
  return (
    <FooterWrapper>
      <Container>
        <Row>
          <Col md={6} sm={12}>
            <FooterLeft>
              <FotterTitle>Energy Health Club</FotterTitle>
              <FooterInfo>
                <InfoTitle>Address</InfoTitle>
                <Address>
                  <LocationOn />
                  {info.address}
                </Address>
                <InfoTitle>Tell</InfoTitle>
                <PhoneInfo>
                  <Phone>
                    <Call />
                    {info.phone1}
                  </Phone>
                  <Phone>
                    <Call />
                    {info.phone2}
                  </Phone>
                </PhoneInfo>
              </FooterInfo>
            </FooterLeft>
          </Col>
          <Col md={6} sm={12}>
            <FooterRight>
              <FotterTitle>Important Links</FotterTitle>
              <FooterInfo>
                <SiteLinks>
                  {footerData.map((item) => (
                    <MenuButton item={item} />
                  ))}
                </SiteLinks>
                <SocialLinks>
                  <SocialLinkItem>
                    <a target="_blank" href={"https://te.me/" + info.telegram}>
                      <Telegram />
                    </a>
                  </SocialLinkItem>
                  <SocialLinkItem>
                    <a
                      target="_blank"
                      href={"https://instagram.com/" + info.instagram}
                    >
                      <Instagram />
                    </a>
                  </SocialLinkItem>
                </SocialLinks>
              </FooterInfo>
            </FooterRight>
          </Col>
        </Row>
        {/* <FooterSubscription>
        <FooterSubHeading>
          Hi there . I'm Zahra. I'm ready to help you. Just I want you to start
          and continue and have a great time with us!
        </FooterSubHeading>
        <FooterSubText>You can subscribe us at any time.</FooterSubText>
        <Form>
          <FormInput name="email" type="email" placeholder="Your Email" />
          <Button fontBig>Subscribe</Button>
        </Form>
      </FooterSubscription> */}
        {/* <FooterLinksContainer>
        <FooterLinksWrapper>
          <FooterLinksItems>
            <FooterLinkTitle>About Us</FooterLinkTitle>
            <FooterLink to="/">How it works</FooterLink>
            <FooterLink to="/">Testimonials</FooterLink>
            <FooterLink to="/">Carees</FooterLink>
            <FooterLink to="/">Terms of Services</FooterLink>
          </FooterLinksItems>
          <FooterLinksItems>
            <FooterLinkTitle>Contact Us</FooterLinkTitle>
            <FooterLink to="/">How it works</FooterLink>
            <FooterLink to="/">Testimonials</FooterLink>
            <FooterLink to="/">Carees</FooterLink>
            <FooterLink to="/">Terms of Services</FooterLink>
          </FooterLinksItems>
          <FooterLinksItems>
            <FooterLinkTitle>Video</FooterLinkTitle>
            <FooterLink to="/">How it works</FooterLink>
            <FooterLink to="/">Testimonials</FooterLink>
            <FooterLink to="/">Carees</FooterLink>
            <FooterLink to="/">Terms of Services</FooterLink>
          </FooterLinksItems>
          <FooterLinksItems>
            <FooterLinkTitle>Social Media</FooterLinkTitle>
            <FooterLink to="/">How it works</FooterLink>
            <FooterLink to="/">Testimonials</FooterLink>
            <FooterLink to="/">Carees</FooterLink>
            <FooterLink to="/">Terms of Services</FooterLink>
          </FooterLinksItems>
        </FooterLinksWrapper>
      </FooterLinksContainer> */}
      </Container>
    </FooterWrapper>
  );
};

export default Footer;
