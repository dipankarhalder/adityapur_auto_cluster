import styled from "styled-components";
import { textColor } from "../../styles/mixins";

export const AppSignin = styled.div`
  width: 48%;
  height: 100vh;
  position: relative;
  background-color: #f8fbff;
  background-image: url("/leftbg.png");
  background-repeat: repeat-x;
  background-size: 75%;
  background-position: top center;
`;

export const AppInsideSignin = styled.div`
  width: 460px;
  display: flex;
  padding: 30px 54px;
  border-radius: 14px;
  flex-direction: column;
  align-items: center;
  position: absolute;
  height: auto;
  background: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 1px 1px 0px #25292e1a, 0px 3px 6px 0px #25292e1f;
  transform: translate(50%, -50%);
  top: 50%;
  right: 0px;

  & > span.app_logo {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 20px;

    & > img {
      width: 80px;
      height: auto;
    }
  }
`;

export const AppHeadingSignin = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;

  h1 {
    text-align: center;
    font-size: 18px;
    text-transform: uppercase;
    margin-bottom: 0px;
  }

  & > p {
    font-size: 14px;
    text-align: center;
    ${textColor("bodytext")};
  }
`;

export const AppFormSignin = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
`;

export const AppCheckField = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  & > a {
    font-size: 14px;
    font-weight: 600;
    text-decoration: underline;
    ${textColor("blue")};
  }
`;

export const AppBtnField = styled.div`
  margin: 26px 0 30px;
  display: flex;
  width: 100%;
  justify-content: center;
`;

export const AppLinkCover = styled.div`
  width: 100%;
  display: flex;
  gap: 10px;
  justify-content: center;

  & > p {
    font-size: 14px;
    font-weight: 500;
  }

  & > a {
    font-size: 14px;
    font-weight: 600;
    text-decoration: underline;
    ${textColor("blue")};
  }
`;

export const AppOtpField = styled.div`
  display: flex;
  gap: 10px;
  justify-content: flex-start;

  input {
    width: 44px;
    padding: 0px;
    text-align: center;
  }
`;

export const AppOtpErrorMessage = styled.span`
  font-size: 12px;
  font-weight: 500;
  margin-top: 0px;
  display: block;
  ${textColor("error")};
`;
