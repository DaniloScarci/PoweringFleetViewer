import { RemoveRedEye, X } from "@mui/icons-material";
import type { VehicleType } from "../../models";
import {
  CTAContainer,
  VehicleInfoContainer,
  VehicleItemContainer,
} from "./style";
import { Dispatch, SetStateAction } from "react";

type VehicleItemProps = {
  vehicle: VehicleType;
  setSelectedVehicle: Dispatch<SetStateAction<VehicleType | null>>;
  setDeleteVehicle: Dispatch<SetStateAction<VehicleType | null>>;
};

const VehicleItem = ({
  vehicle,
  setSelectedVehicle,
  setDeleteVehicle,
}: VehicleItemProps) => {
  return (
    <VehicleItemContainer>
      <VehicleInfoContainer>
        <div>ID: {vehicle?.ID}</div>
        <div>Targa: {vehicle?.Plate}</div>
        <div>Costruttore: {vehicle?.Maker}</div>
        <div>Targa: {vehicle?.Model}</div>
      </VehicleInfoContainer>
      <CTAContainer>
        <RemoveRedEye
          sx={{
            backgroundColor: "white",
            cursor: "pointer",
            padding: "6px",
            borderRadius: "8px",
          }}
          onClick={() => setSelectedVehicle(vehicle)}
        />
        <X
          sx={{
            backgroundColor: "white",
            cursor: "pointer",
            padding: "6px",
            borderRadius: "8px",
            color: "red",
          }}
          onClick={() => setDeleteVehicle(vehicle)}
        />
      </CTAContainer>
    </VehicleItemContainer>
  );
};

export default VehicleItem;
