import { Drawer } from "@mui/material";
import styled from "styled-components";

export const CustomDrawer = styled(Drawer)`
  & .MuiPaper-root {
    padding: 15px;
    width: 10%;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
`;

export const CustomDrawerContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const LinkList = styled.div`
  margin-top: 15%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const CustomLink = styled.div<{ $selected?: boolean }>`
  padding: 5px;
  font-family: "Sue Ellen Francisco", cursive;
  letter-spacing: 0.15em;
  font-size: 1.5rem;
  background: ${({$selected}: {$selected?: boolean}) => $selected ? "#ddd" : "#fff"};
  color: ${({$selected}: {$selected?: boolean}) => $selected ? "purple" : "black"};
  border-radius: 12px;
  cursor: ${({$selected}: {$selected?: boolean}) => $selected ? "" : "pointer"};
`;
