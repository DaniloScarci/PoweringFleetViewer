import type { Dispatch, SetStateAction } from "react";
import { FilterContainer, FleetFilter, PlateFilter } from "./style";
import { Add } from "@mui/icons-material";

type VehiclesFilterProps = {
  fleets: string[];
  selectedFleet: string;
  setSelectedFleet: Dispatch<SetStateAction<string>>;
  vehicleFilter: string;
  setVehicleFilter: Dispatch<SetStateAction<string>>;
  setNewVehicleForm: Dispatch<SetStateAction<boolean>>;
};

const VehiclesFilter = ({
  fleets,
  selectedFleet,
  setSelectedFleet,
  vehicleFilter,
  setVehicleFilter,
  setNewVehicleForm,
}: VehiclesFilterProps) => {
  return (
    <FilterContainer>
      <PlateFilter
        type="text"
        value={vehicleFilter}
        onChange={(e) => setVehicleFilter(e.target.value)}
        placeholder="Inserisci targa..."
      />
      <FleetFilter
        value={selectedFleet}
        onChange={(e) => setSelectedFleet(e.target.value)}
        name="Fleet"
        id="Fleet"
      >
        {fleets.map((fleet: string) => (
          <option value={fleet}>{fleet}</option>
        ))}
      </FleetFilter>
      <Add
        style={{
          cursor: "pointer",
          color: "green",
        }}
        onClick={() => setNewVehicleForm((oldVehicleForm) => !oldVehicleForm)}
      />
    </FilterContainer>
  );
};

export default VehiclesFilter;
