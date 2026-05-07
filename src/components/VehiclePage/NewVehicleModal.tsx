import { Dialog, DialogActions, DialogContent } from "@mui/material";
import {
  CustomDialogTitle,
  CustomSelectInput,
  CustomTextInput,
  NewVehicleInfoContainer,
  SaveButton,
} from "./style";
import { VehicleMakers, VehicleModels } from "../../models";
import { SetStateAction, useState, useMemo, Dispatch } from "react";

type NewVehicleModalProps = {
  newVehicleForm: boolean;
  setNewVehicleForm: Dispatch<SetStateAction<boolean>>;
};

const NewVehicleModal = ({
  newVehicleForm,
  setNewVehicleForm,
}: NewVehicleModalProps) => {
  const [plate, setPlate] = useState<string>("");
  const [maker, setMaker] = useState<keyof typeof VehicleMakers>(
    Object.values(VehicleMakers)[0],
  );
  const [model, setModel] = useState<keyof typeof VehicleModels>(
    Object.values(VehicleModels)[0],
  );

  // Questo booleano rappresenta
  const canProceed: boolean = useMemo(
    () => plate !== "" && maker !== undefined && model !== undefined,
    [plate, maker, model],
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
      open={newVehicleForm}
      fullWidth
      onClose={() => setNewVehicleForm(!newVehicleForm)}
      slotProps={{
        backdrop: {
          sx: {
            backgroundColor: "rgba(0, 0, 0, 0.75)",
          },
        },
      }}
    >
      <CustomDialogTitle>Inserisci nuovo veicolo</CustomDialogTitle>
      <DialogContent>
        <NewVehicleInfoContainer>
          <CustomTextInput
            placeholder="Targa.."
            value={plate}
            onChange={(e) => setPlate(e.target.value)}
          />
          <CustomSelectInput
            value={maker}
            onChange={(e) =>
              setMaker(e.target.value as keyof typeof VehicleMakers)
            }
            name="Maker"
            id="Maker"
          >
            {Object.keys(VehicleMakers).map((maker: string) => (
              <option value={maker}>{maker}</option>
            ))}
          </CustomSelectInput>
          <CustomSelectInput
            value={model}
            onChange={(e) =>
              setModel(e.target.value as keyof typeof VehicleModels)
            }
            name="Model"
            id="Model"
          >
            {Object.keys(VehicleModels).map((maker: string) => (
              <option value={maker}>{maker}</option>
            ))}
          </CustomSelectInput>
        </NewVehicleInfoContainer>
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

export default NewVehicleModal;
