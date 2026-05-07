import VehiclesList from "../components/VehiclePage/VehiclesList";
import vehicles from "../../vehicleMock.json";
import { useState } from "react";
import NewVehicleModal from "../components/VehiclePage/NewVehicleModal";
import VehicleViewModal from "../components/VehiclePage/VehicleViewModal";
import { VehicleType } from "../models";
import DeleteVehicleModal from "../components/VehiclePage/DeleteVehicleModal";

const VehiclePage = () => {
  const [newVehicleForm, setNewVehicleForm] = useState<boolean>(false);
  const [selectedVehicle, setSelectedVehicle] = useState<VehicleType | null>(
    null,
  );
  const [deleteVehicle, setDeleteVehicle] = useState<VehicleType | null>(null);

  return (
    <>
      <NewVehicleModal
        newVehicleForm={newVehicleForm}
        setNewVehicleForm={setNewVehicleForm}
      />
      <VehicleViewModal
        selectedVehicle={selectedVehicle}
        setSelectedVehicle={setSelectedVehicle}
      />
      <DeleteVehicleModal
        deleteVehicle={deleteVehicle}
        setDeleteVehicle={setDeleteVehicle}
      />
      <VehiclesList
        data={vehicles}
        setSelectedVehicle={setSelectedVehicle}
        setDeleteVehicle={setDeleteVehicle}
        setNewVehicleForm={setNewVehicleForm}
      />
    </>
  );
};

export default VehiclePage;
