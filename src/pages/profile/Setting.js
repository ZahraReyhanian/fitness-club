import React from "react";
import styled from "styled-components";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import ProfileSetting from "./ProfileSetting";

const Setting = () => {
  return (
    <SettingWrapper>
      <ProfileSetting />
    </SettingWrapper>
  );
};

export default Setting;

const SettingWrapper = styled.div`
  margin-top: 1rem;
`;
