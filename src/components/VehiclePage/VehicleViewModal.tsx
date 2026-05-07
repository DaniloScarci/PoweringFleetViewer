import { Dialog, DialogContent } from "@mui/material";
import { VehicleKeys, VehicleType } from "../../models";
import { Dispatch, SetStateAction } from "react";
import { CustomDialogTitle } from "../FleetPage/style";
import {
  VehicleViewInfoContainer,
  VehicleViewInfoTitle,
  VehicleViewInfoValue,
} from "./style";

type VehicleViewModalProps = {
  selectedVehicle: VehicleType | null;
  setSelectedVehicle: Dispatch<SetStateAction<VehicleType | null>>;
};

const VehicleViewModal = ({
  selectedVehicle,
  setSelectedVehicle,
}: VehicleViewModalProps) => {
  return (
    <Dialog
      sx={{
        "& .MuiDialog-paper ": {
          maxWidth: "450px",
          maxHeight: "calc(90% - 12px)",
        },
      }}
      open={!!selectedVehicle}
      fullWidth
      onClose={() => setSelectedVehicle(null)}
      slotProps={{
        backdrop: {
          sx: {
            backgroundColor: "rgba(0, 0, 0, 0.75)",
          },
        },
      }}
    >
      <CustomDialogTitle>
        Informazioni veicolo: {selectedVehicle?.Plate}
      </CustomDialogTitle>
      <DialogContent>
        {Object.keys(VehicleKeys).map((key: string) => (
          <VehicleViewInfoContainer>
            <VehicleViewInfoTitle>
              {VehicleKeys[key as keyof typeof VehicleKeys]}:
            </VehicleViewInfoTitle>
            {selectedVehicle && (
              <VehicleViewInfoValue>
                {(selectedVehicle as any)?.[key]}
              </VehicleViewInfoValue>
            )}
          </VehicleViewInfoContainer>
        ))}
      </DialogContent>
    </Dialog>
  );
};

export default VehicleViewModal;
