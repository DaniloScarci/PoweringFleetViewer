import { useState } from "react";
import NewFleetModal from "../components/FleetPage/NewFleetModal";
import FleetList from "../components/FleetPage/FleetList";
import fleet from "../../fleetMock.json";
import FleetViewModal from "../components/FleetPage/FleetViewModal";
import { FleetType } from "../models";
import DeleteFleetModal from "../components/FleetPage/DeleteFleetModal";

const FleetPage = () => {
  const [newFleetForm, setNewFleetForm] = useState<boolean>(false);
  const [selectedFleet, setSelectedFleet] = useState<FleetType | null>(null);
  const [deleteFleet, setDeleteFleet] = useState<FleetType | null>(null);

  return (
    <>
      <NewFleetModal
        newFleetForm={newFleetForm}
        setNewFleetForm={setNewFleetForm}
      />
      <FleetViewModal
        selectedFleet={selectedFleet}
        setSelectedFleet={setSelectedFleet}
      />
      <DeleteFleetModal
        deleteFleet={deleteFleet}
        setDeleteFleet={setDeleteFleet}
      />
      <FleetList
        data={fleet}
        setSelectedFleet={setSelectedFleet}
        setNewFleetForm={setNewFleetForm}
        setDeleteFleet={setDeleteFleet}
      />
    </>
  );
};

export default FleetPage;
