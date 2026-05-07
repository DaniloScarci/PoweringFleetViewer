import { Dialog, DialogActions, DialogContent } from "@mui/material";
import {
  Dispatch,
  SetStateAction,
  useState,
  useMemo,
  ChangeEvent,
} from "react";
import {
  CustomDialogTitle,
  NewFleetInfoContainer,
  CustomTextInput,
  SaveButton,
} from "./style";
type NewVehicleModalProps = {
  newFleetForm: boolean;
  setNewFleetForm: Dispatch<SetStateAction<boolean>>;
};

const NewFleetModal = ({
  newFleetForm,
  setNewFleetForm,
}: NewVehicleModalProps) => {
  const [address, setAddress] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [zipCode, setZipCode] = useState<string>("");

  const canProceed: boolean = useMemo(
    () => address !== "" && city !== "" && zipCode !== "",
    [address, city, zipCode],
  );

  /**
   * Qui in realtà, bisognerebbe fare una chiamata asincrona wrappata in un try-catch e valutarne
   * l'eventuale risposta, utilizzando uno stato dedicato per l'errore e mostrare, ad esempio,
   * una toast notification, per ora, ci limitiamo a chiudere il dialog, inutile anche farne uno spread
   * nell'array di provenienza, perchè comunque è un mock proveniente da un JSON che non è salvato in uno stato
   */
  const onClickSaveHandler = () => {
    // try {
    // } catch (error) {
    // }
  };

  return (
    <Dialog
      sx={{
        "& .MuiDialog-paper ": {
          maxWidth: "450px",
          maxHeight: "calc(90% - 12px)",
        },
      }}
      open={newFleetForm}
      fullWidth
      onClose={() => setNewFleetForm(!newFleetForm)}
      slotProps={{
        backdrop: {
          sx: {
            backgroundColor: "rgba(0, 0, 0, 0.75)",
          },
        },
      }}
    >
      <CustomDialogTitle>Inserisci nuova flotta</CustomDialogTitle>
      <DialogContent>
        <NewFleetInfoContainer>
          <CustomTextInput
            placeholder="Indirizzo.."
            value={address}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setAddress(e.target.value)
            }
          />
          <CustomTextInput
            placeholder="Città.."
            value={city}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setCity(e.target.value)
            }
          />
          <CustomTextInput
            placeholder="CAP.."
            value={zipCode}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setZipCode(e.target.value)
            }
          />
        </NewFleetInfoContainer>
      </DialogContent>
      <DialogActions
        sx={{
          justifyContent: "end",
        }}
      >
        <SaveButton $disabled={!canProceed} onClick={onClickSaveHandler}>
          Inserisci
        </SaveButton>
      </DialogActions>
    </Dialog>
  );
};

export default NewFleetModal;
