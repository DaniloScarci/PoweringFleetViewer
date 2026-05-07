import { DialogTitle } from "@mui/material";
import styled from "styled-components";

export const FilterContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 70% 25% 5%;
  align-items: center;
  gap: 10px;
`;

export const FleetFilterSearch = styled.input`
  font-family: "Segoe UI", Roboto, sans-serif;
  padding: 10px;
  border-radius: 12px;
  border: 0.8px solid #ddd;
  outline: none;
`;

export const FleetFilter = styled.select`
  font-family: "Segoe UI", Roboto, sans-serif;
  padding: 10px;
  border-radius: 12px;
  border: 0.8px solid #ddd;
  outline: none;
`;

export const FleetListContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const FleetListItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  min-height: 430px;
  max-height: 430px;
  overflow-y: auto;
`;

export const FleetItemContainer = styled.div`
  display: grid;
  grid-template-columns: 70% 30%;
  gap: 10px;
  padding: 10px;
  background-color: #ddd;
  border-radius: 12px;
`;

export const FleetInfoContainer = styled.div`
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: repeat(2, 1fr);
`;

export const CTAContainer = styled.div`
  justify-content: flex-end;
  padding: 0 4px;
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
`;

export const ArrowContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const CustomArrowElement = styled.div<{ $disabled?: boolean }>`
  font-family: "Sue Ellen Francisco", cursive;
  letter-spacing: 0.15em;
  font-size: 2rem;
  font-weight: bold;
  cursor: ${({ $disabled }) => ($disabled ? "not-allowed" : "pointer")};
  color: ${({ $disabled }) => ($disabled ? "gray" : "black")};
`;

export const CustomDialogTitle = styled(DialogTitle)`
  &.MuiTypography-root {
    font-family: "Sue Ellen Francisco", cursive;
    letter-spacing: 0.15em;
    font-size: 1.5rem;
  }
`;

export const NewFleetInfoContainer = styled.div`
    width: 80%
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

export const CustomTextInput = styled.input`
  font-family: "Segoe UI", Roboto, sans-serif;
  padding: 10px;
  border-radius: 12px;
  border: 0.8px solid #ddd;
  outline: none;
`;

export const CustomSelectInput = styled.select`
  font-family: "Segoe UI", Roboto, sans-serif;
  padding: 10px;
  border-radius: 12px;
  border: 0.8px solid #ddd;
  outline: none;
`;

export const SaveButton = styled.div<{ $disabled?: boolean }>`
  padding: 8px;
  color: ${({ $disabled }) => ($disabled ? "#ddd" : "white")};
  font-family: "Sue Ellen Francisco", cursive;
  background-color: ${({ $disabled }) => ($disabled ? "gray" : "green")};
  cursor: ${({ $disabled }) => ($disabled ? "not-allowed" : "pointer")};
  border-radius: 12px;
`;

export const FleetViewInfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
`;

export const FleetViewInfoTitle = styled.div`
  font-family: "Sue Ellen Francisco", cursive;
`;

export const FleetViewInfoValue = styled.div``;
