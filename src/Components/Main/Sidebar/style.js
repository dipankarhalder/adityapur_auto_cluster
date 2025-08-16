import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import {
  backgroundColor,
  textColor,
  borderStyleColor,
  fontFamily,
} from "../../../styles/mixins";

export const AppSideBar = styled.div`
  display: flex;
  flex-direction: column;
  width: 270px;
  height: 100vh;
  padding: 10px 20px 16px;
  overflow-y: auto;
  position: fixed;
  top: 0px;
  ${backgroundColor("white")};
  background-image: url("/sidebar.jpg");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: bottom;
  border-right: 1px solid ${({ theme }) => theme.colors.tableborder};
`;

export const AppSidebarInside = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  & > span {
    display: flex;
    width: 100%;
    justify-content: center;
    margin-bottom: 30px;

    & > img {
      width: 100%;
    }
  }

  .app_profile_logged_user {
    display: flex;
    flex-direction: row;
    margin-bottom: 14px;
    padding: 10px 12px;
    border-radius: 8px;
    align-items: center;
    justify-content: space-between;
    background: ${({ theme }) => theme.colors.white};
    border: 1px solid ${({ theme }) => theme.colors.tableborder};

    .app_avt_wrapper {
      display: flex;
      flex-direction: row;

      & > span {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        overflow: hidden;
        margin-right: 10px;

        & > img {
          width: 40px;
          height: 40px;
        }
      }
      .app_avatar_info {
        display: flex;
        flex-direction: column;

        h6 {
          font-size: 15px;
          font-weight: 00;
          color: ${({ theme }) => theme.colors.black};
        }

        & > span {
          font-size: 12px;
          font-weight: 600;
          color: ${({ theme }) => theme.colors.gray};
        }
      }
    }

    .app_logout {
      width: 20px;
      height: 20px;
      transform: rotate(90deg);
      color: ${({ theme }) => theme.colors.error};

      & > span {
        width: 20px;
        height: 20px;

        & > svg {
          width: 20px;
          height: 20px;
        }
      }
    }
  }
`;

export const AddNewCandidate = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 3
  color: 0px;

  & > a {
    gap: 8px;
    width: auto;
    display: flex;
    align-items: center;
    padding: 11px 20px 11px 14px;
    border-radius: 6px;
    margin-bottom: 30px;
    margin-top: 10px;
    justify-content: center;
    background: ${({ theme }) => theme.colors.btnbg};
    box-shadow: 0px 1px 1px 0px #25292e1a, 0px 3px 6px 0px #25292e1f;

    & > span {
      display: flex;
      width: 18px;
      height: 18px;
      color: ${({ theme }) => theme.colors.white};

      & > svg {
        width: 18px;
        height: 18px;
      }
    }

    & > p {
      height: 18px;
      line-height: 18px;
      font-size: 14px;
      font-weight: 600;
      color: ${({ theme }) => theme.colors.white};
    }
  }
`;

export const AppSidebarLinkCover = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const SidebarItem = styled.div`
  width: 100%;
  margin-bottom: 24px;
`;

export const SidebarTitle = styled.h4`
  font-size: 11px;
  font-weight: 700;
  margin-bottom: 4px;
  text-transform: uppercase;
  ${textColor("blue")};
  ${fontFamily};
`;

export const SidebarList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
`;

export const SidebarListItem = styled.li`
  margin: 0;
  position: relative;
  ${borderStyleColor(1, "transparent")};

  ${({ $active }) =>
    $active &&
    css`
      ${backgroundColor("navbg")};
      border-radius: 4px;

      &:after {
        content: "";
        position: absolute;
        top: 10%;
        left: -7px;
        width: 3px;
        height: 80%;
        border-radius: 5px;
        ${backgroundColor("blue")};
      }

      a > p {
        ${textColor("black")};
        font-weight: 600;
      }
    `}
`;

export const SidebarLinkStyled = styled(Link)`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 5px 8px;
  text-decoration: none;
  border-radius: 4px;
  ${textColor("text")};
  ${fontFamily};

  & > span {
    width: 17px;
    height: 17px;
    ${textColor("navText")};

    & > svg {
      width: 17px;
      height: 17px;
    }
  }

  p {
    margin: 0;
    font-size: 14px;
    line-height: 18px;
    font-weight: 600;
    ${textColor("navText")};
    ${fontFamily};
  }
`;
