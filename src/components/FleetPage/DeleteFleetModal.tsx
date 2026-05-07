import { Dialog, DialogActions } from "@mui/material";
import { Dispatch, SetStateAction } from "react";
import { FleetType } from "../../models";
import { CustomDialogTitle, SaveButton } from "../VehiclePage/style";

type DeleteFleetModalProps = {
  deleteFleet: FleetType | null;
  setDeleteFleet: Dispatch<SetStateAction<FleetType | null>>;
};

const DeleteFleetModal = ({
  deleteFleet,
  setDeleteFleet,
}: DeleteFleetModalProps) => {
  // Await di qualsiasi operazione nei confronti di un service layer, per ora chiudiamo semplicemente la modale
  const onClickDeleteFleetHandler = async () => {
    try {
    } catch (error) {
    } finally {
      setDeleteFleet(null);
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
      open={!!deleteFleet}
      fullWidth
      onClose={() => setDeleteFleet(null)}
      slotProps={{
        backdrop: {
          sx: {
            backgroundColor: "rgba(0, 0, 0, 0.75)",
          },
        },
      }}
    >
      <CustomDialogTitle>
        Sei sicuro di voler eliminare la flotta {deleteFleet?.City},{" "}
        {deleteFleet?.Address}, {deleteFleet?.ZipCode}?
      </CustomDialogTitle>
      <DialogActions
        sx={{
          justifyContent: "end",
        }}
      >
        <SaveButton onClick={onClickDeleteFleetHandler}>Conferma</SaveButton>
      </DialogActions>
    </Dialog>
  );
};

export default DeleteFleetModal;
