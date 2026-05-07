import { MenuOpen } from "@mui/icons-material";
import { type Dispatch, type SetStateAction } from "react";
import {
  CustomDrawer,
  CustomDrawerContainer,
  CustomLink,
  LinkList,
} from "./style";
import { RoutePoints } from "../../models";
import { useLocation, useNavigate } from "react-router";

type MenuDrawerProps = {
  open: boolean;
  onClose: Dispatch<SetStateAction<boolean>>;
};

const MenuDrawer = ({ open, onClose }: MenuDrawerProps) => {
  const location = useLocation();
  const navigate = useNavigate()

  const path = location?.pathname;

  return (
    <CustomDrawer open={open} onClose={() => onClose(!open)}>
      <CustomDrawerContainer>
        <MenuOpen
          style={{
            alignSelf: "flex-end",
            cursor: "pointer",
          }}
          onClick={() => onClose(!open)}
        />
        <LinkList>
          {Object.keys(RoutePoints)
            ?.filter((key) => key !== "/")
            ?.map((route: string) => (
              <CustomLink $selected={route == path} onClick={() => route !== path && navigate(route)}>
                {RoutePoints[route as keyof typeof RoutePoints]}
              </CustomLink>
            ))}
        </LinkList>
      </CustomDrawerContainer>
    </CustomDrawer>
  );
};

export default MenuDrawer;
