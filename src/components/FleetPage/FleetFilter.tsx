import type { Dispatch, SetStateAction } from "react";
import { FilterContainer, FleetFilterSearch } from "./style";
import { Add } from "@mui/icons-material";

type FleetFilterProps = {
  fleetFilter: string;
  setFleetFilter: Dispatch<SetStateAction<string>>;
  setNewFleetForm: Dispatch<SetStateAction<boolean>>;
};

const FleetFilter = ({
  setNewFleetForm,
  fleetFilter,
  setFleetFilter,
}: FleetFilterProps) => {
  return (
    <FilterContainer
      style={{
        gridTemplateColumns: "95% 5%",
      }}
    >
      <FleetFilterSearch
        type="text"
        value={fleetFilter}
        onChange={(e) => setFleetFilter(e.target.value)}
        placeholder="Inserisci città, CAP o  ..."
      />
      <Add
        style={{
          cursor: "pointer",
          color: "green",
        }}
        onClick={() => setNewFleetForm((oldFleetForm) => !oldFleetForm)}
      />
    </FilterContainer>
  );
};

export default FleetFilter;
