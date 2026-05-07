import { Dialog, DialogActions } from "@mui/material";
import { Dispatch, SetStateAction } from "react";
import { VehicleType } from "../../models";
import { CustomDialogTitle, SaveButton } from "../VehiclePage/style";

type DeleteVehicleModalProps = {
  deleteVehicle: VehicleType | null;
  setDeleteVehicle: Dispatch<SetStateAction<VehicleType | null>>;
};

const DeleteVehicleModal = ({
  deleteVehicle,
  setDeleteVehicle,
}: DeleteVehicleModalProps) => {
  // Await di qualsiasi operazione nei confronti di un service layer, per ora chiudiamo la modale
  const onClickDeleteVehicleHandler = async () => {
    try {
    } catch (error) {} 
    finally {
        setDeleteVehicle(null)
    }
  };

  return (
    <Dialog
      sx={{
        "& .MuiDialog-paper ": {
          maxWidth: "450px",
          maxHeight: "calc(90% - 12px)",
        },
      }}
      open={!!deleteVehicle}
      fullWidth
      onClose={() => setDeleteVehicle(null)}
      slotProps={{
        backdrop: {
          sx: {
            backgroundColor: "rgba(0, 0, 0, 0.75)",
          },
        },
      }}
    >
      <CustomDialogTitle>
        Sei sicuro di voler eliminare il veicolo {deleteVehicle?.Plate}?
      </CustomDialogTitle>
      <DialogActions
        sx={{
          justifyContent: "end",
        }}
      >
        <SaveButton onClick={onClickDeleteVehicleHandler}>Conferma</SaveButton>
      </DialogActions>
    </Dialog>
  );
};

export default DeleteVehicleModal;
