import { useLocation, Link } from "react-router-dom";
import { sidebarLink } from "../../../RouteLinks";
import { paths } from "../../../Constant";
import {
  AppSideBar,
  AppSidebarInside,
  AppSidebarLinkCover,
  AddNewCandidate,
  SidebarItem,
  SidebarTitle,
  SidebarList,
  SidebarListItem,
  SidebarLinkStyled,
} from "./style";
import { Plus, Logout } from "../../../Shared/Icons";
import fulllogo from "/fullogo.png";

const normalizePath = (path) =>
  path?.startsWith("/") ? path : `/apps/${path}`;
const isDashboardPath = (path) =>
  path === "/apps" || path === "apps" || path === "/apps/";
const isLinkActive = (currentPath, linkPath) =>
  currentPath === linkPath || currentPath.startsWith(linkPath + "/");

export const Sidebar = () => {
  const { pathname } = useLocation();

  return (
    <AppSideBar>
      <AppSidebarInside>
        <span className="app_logo">
          <img src={fulllogo} alt="Arunodaya University" />
        </span>
        <AddNewCandidate>
          <Link to={paths.ADMISSION}>
            <Plus />
            <p>New Admission</p>
          </Link>
        </AddNewCandidate>
        <AppSidebarLinkCover>
          {sidebarLink.map((item) => {
            const sectionIsActive = item.children?.some(({ path }) => {
              if (!path) return false;

              const normalizedPath = normalizePath(path);
              return isDashboardPath(normalizedPath)
                ? pathname === "/apps"
                : isLinkActive(pathname, normalizedPath);
            });

            return (
              <SidebarItem key={item.id} $expanded={sectionIsActive}>
                <SidebarTitle>{item.title}</SidebarTitle>
                <SidebarList>
                  {item.children?.map(({ id, path, title, icon: Icon }) => {
                    if (!path) return null;

                    const linkPath = normalizePath(path);
                    const active = isDashboardPath(linkPath)
                      ? pathname === "/apps"
                      : isLinkActive(pathname, linkPath);

                    return (
                      <SidebarListItem key={id} $active={active}>
                        <SidebarLinkStyled to={linkPath}>
                          {Icon && <Icon />} <p>{title}</p>
                        </SidebarLinkStyled>
                      </SidebarListItem>
                    );
                  })}
                </SidebarList>
              </SidebarItem>
            );
          })}
        </AppSidebarLinkCover>
        <div className="app_profile_logged_user">
          <div className="app_avt_wrapper">
            <span>
              <img src="/avt.png" alt="profile" />
            </span>
            <div className="app_avatar_info">
              <h6>Himadri C</h6>
              <span>Admin</span>
            </div>
          </div>
          <div className="app_logout">
            <Logout />
          </div>
        </div>
      </AppSidebarInside>
    </AppSideBar>
  );
};
