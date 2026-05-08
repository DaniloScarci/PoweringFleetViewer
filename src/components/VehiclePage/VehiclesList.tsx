// La tabella dev'essere automaticamente filtrabile su base di flotta? Vediamo!
import { useMemo, useState, type Dispatch, type SetStateAction } from "react";
import { type VehicleType } from "../../models";
import VehicleItem from "./VehicleItem";
import {
  ArrowContainer,
  CustomArrowElement,
  VehiclesListContainer,
  VehiclesListItemContainer,
} from "./style";
import VehiclesFilter from "./VehiclesFilter";

type TableProps = {
  data: VehicleType[] | null;
  setNewVehicleForm: Dispatch<SetStateAction<boolean>>;
  setSelectedVehicle: Dispatch<SetStateAction<VehicleType | null>>;
  setDeleteVehicle: Dispatch<SetStateAction<VehicleType | null>>;
};

const fleetValues = [
  "Tutte",
  ...Array.from({ length: 3 }, (_, i) => `Fleet ${i}`),
];

// Qui inseriamo paginazione, e filtraggio
const VehiclesList = ({
  data,
  setNewVehicleForm,
  setSelectedVehicle,
  setDeleteVehicle,
}: TableProps) => {
  const [page, setPage] = useState<number>(1);
  const [selectedFleet, setSelectedFleet] = useState<string>("Tutte");
  const [vehicleFilter, setVehicleFilter] = useState<string>("");

  const ITEMS_PER_PAGE: number = 10;

  const filteredItems = useMemo(
    () =>
      data && data?.length > 0
        ? data?.filter((vehicle: VehicleType) =>
            vehicleFilter?.length >= 3
              ? vehicle?.Plate?.toLocaleLowerCase()?.includes(
                  vehicleFilter?.toLocaleLowerCase(),
                )
              : true,
          )
        : [],
    [vehicleFilter, data],
  );

  const shownItems: VehicleType[] = useMemo(
    () =>
      filteredItems && filteredItems?.length > 0
        ? filteredItems?.slice(
            (page - 1) * ITEMS_PER_PAGE,
            page * ITEMS_PER_PAGE,
          )
        : [],
    [filteredItems, page],
  );


  return (
    <VehiclesListContainer>
      <VehiclesFilter
        setNewVehicleForm={setNewVehicleForm}
        fleets={fleetValues}
        selectedFleet={selectedFleet}
        setSelectedFleet={setSelectedFleet}
        vehicleFilter={vehicleFilter}
        setVehicleFilter={setVehicleFilter}
      />
      <VehiclesListItemContainer>
        {shownItems?.map((vehicle: VehicleType) => (
          <VehicleItem
            vehicle={vehicle}
            setSelectedVehicle={setSelectedVehicle}
            setDeleteVehicle={setDeleteVehicle}
          />
        ))}
      </VehiclesListItemContainer>
      <ArrowContainer>
        <CustomArrowElement
          $disabled={page === 1}
          onClick={() => setPage((oldPage) => oldPage - 1)}
        >
          &larr;
        </CustomArrowElement>
        <CustomArrowElement
          $disabled={
            page ===
            (data && data?.length > 0
              ? Math.round(data.length / ITEMS_PER_PAGE)
              : 1)
          }
          onClick={() => setPage((oldPage) => oldPage + 1)}
        >
          ({page}/{Math.round((data?.length ?? 1) / ITEMS_PER_PAGE)}) &rarr;
        </CustomArrowElement>
      </ArrowContainer>
    </VehiclesListContainer>
  );
};

export default VehiclesList;
