// La tabella dev'essere automaticamente filtrabile su base di flotta? Vediamo!
import { useMemo, useState, type Dispatch, type SetStateAction } from "react";
import { FleetType } from "../../models";
import {
  ArrowContainer,
  CustomArrowElement,
  FleetListContainer,
  FleetListItemContainer,
} from "./style";
import FleetFilter from "./FleetFilter";
import FleetItem from "./FleetItem";

// Converti tutto per l'utilizzo della flotta

type FleetListProps = {
  data: FleetType[] | null;
  setNewFleetForm: Dispatch<SetStateAction<boolean>>;
  setSelectedFleet: Dispatch<SetStateAction<FleetType | null>>;
  setDeleteFleet: Dispatch<SetStateAction<FleetType | null>>;
};

// Qui inseriamo paginazione, e filtraggio
const FleetList = ({
  data,
  setNewFleetForm,
  setSelectedFleet,
  setDeleteFleet,
}: FleetListProps) => {
  const [page, setPage] = useState<number>(1);
  const [fleetFilter, setFleetFilter] = useState<string>("");

  const ITEMS_PER_PAGE: number = 10;

  const filteredItems = useMemo(
    () =>
      data && data?.length > 0
        ? data
            ?.filter((fleet: FleetType) =>
              fleetFilter?.length >= 3
                ? [
                    fleet?.City?.toLocaleLowerCase(),
                    fleet?.Address?.toLocaleLowerCase(),
                    fleet?.ZipCode?.toLocaleLowerCase(),
                  ].some((item) =>
                    item?.includes(fleetFilter?.toLocaleLowerCase()),
                  )
                : true,
            )
            ?.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE)
        : [],
    [fleetFilter, data],
  );

  const shownItems: FleetType[] = useMemo(
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
    <FleetListContainer>
      <FleetFilter
        fleetFilter={fleetFilter}
        setFleetFilter={setFleetFilter}
        setNewFleetForm={setNewFleetForm}
      />
      <FleetListItemContainer>
        {shownItems?.map((fleet: FleetType) => (
          <FleetItem
            fleet={fleet}
            setSelectedFleet={setSelectedFleet}
            setDeleteFleet={setDeleteFleet}
          />
        ))}
      </FleetListItemContainer>
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
    </FleetListContainer>
  );
};

export default FleetList;
