import { RemoveRedEye, X } from "@mui/icons-material";
import type { FleetType } from "../../models";
import { CTAContainer, FleetInfoContainer, FleetItemContainer } from "./style";
import { Dispatch, SetStateAction } from "react";

type FleetItemProps = {
  fleet: FleetType;
  setSelectedFleet: Dispatch<SetStateAction<FleetType | null>>;
  setDeleteFleet: Dispatch<SetStateAction<FleetType | null>>;
};

const FleetItem = ({
  fleet,
  setSelectedFleet,
  setDeleteFleet,
}: FleetItemProps) => {
  return (
    <FleetItemContainer>
      <FleetInfoContainer>
        <div>Address: {fleet?.Address}</div>
        <div>City: {fleet?.City}</div>
        <div>ZipCode: {fleet?.ZipCode}</div>
      </FleetInfoContainer>
      <CTAContainer>
        <RemoveRedEye
          sx={{
            backgroundColor: "white",
            cursor: "pointer",
            padding: "6px",
            borderRadius: "8px",
          }}
          onClick={() => setSelectedFleet(fleet)}
        />
        <X
          sx={{
            backgroundColor: "white",
            cursor: "pointer",
            padding: "6px",
            borderRadius: "8px",
            color: "red",
          }}
          onClick={() => setDeleteFleet(fleet)}
        />
      </CTAContainer>
    </FleetItemContainer>
  );
};

export default FleetItem;
