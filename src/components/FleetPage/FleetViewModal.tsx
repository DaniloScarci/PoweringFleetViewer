import { Dialog, DialogContent } from "@mui/material";
import { Dispatch, SetStateAction } from "react";
import {
  CustomDialogTitle,
  FleetViewInfoContainer,
  FleetViewInfoTitle,
  FleetViewInfoValue,
} from "./style";
import { FleetKeys, FleetType } from "../../models";

type FleetViewModalProps = {
  selectedFleet: FleetType | null;
  setSelectedFleet: Dispatch<SetStateAction<FleetType | null>>;
};

const FleetViewModal = ({
  selectedFleet,
  setSelectedFleet,
}: FleetViewModalProps) => {
  return (
    <Dialog
      sx={{
        "& .MuiDialog-paper ": {
          maxWidth: "450px",
          maxHeight: "calc(90% - 12px)",
        },
      }}
      open={!!selectedFleet}
      fullWidth
      onClose={() => setSelectedFleet(null)}
      slotProps={{
        backdrop: {
          sx: {
            backgroundColor: "rgba(0, 0, 0, 0.75)",
          },
        },
      }}
    >
      <CustomDialogTitle>
        Informazioni flotta: {selectedFleet?.City} , {selectedFleet?.Address} ,{" "}
        {selectedFleet?.ZipCode}
      </CustomDialogTitle>
      <DialogContent>
        {Object.keys(FleetKeys).map((key: string) => (
          <FleetViewInfoContainer>
            <FleetViewInfoTitle>
              {FleetKeys[key as keyof typeof FleetKeys]}: 
            </FleetViewInfoTitle>
            {selectedFleet && (
              <FleetViewInfoValue>
                {(selectedFleet as any)?.[key]}
              </FleetViewInfoValue>
            )}
          </FleetViewInfoContainer>
        ))}
      </DialogContent>
    </Dialog>
  );
};

export default FleetViewModal;
