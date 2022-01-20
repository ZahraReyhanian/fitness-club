import React from "react";
import Select from "@material-ui/core/Select";

const SelectEquipments = ({ handleChange, value }) => {
  const [loading, setLoading] = React.useState(true);
  const [items, setItems] = React.useState([
    { label: "Loading ...", value: "" },
  ]);

  React.useEffect(() => {
    let unmounted = false;
    async function getCharacters() {
      const response = await fetch(
        "http://localhost:8000/api/v1/admin/sportsEquipment?api_token=" +
          localStorage.getItem("x-auth-token")
      );
      const body = await response.json();
      if (!unmounted) {
        setItems(
          body.data.SP.docs.map((item) => ({
            label: item.equipmentName,
            value: item.id,
          }))
        );
      }
      setLoading(false);
    }
    getCharacters();
    return () => {
      unmounted = true;
    };
  }, []);

  return (
    <Select disabled={loading} value={value} onChange={handleChange}>
      {items.map(({ label, value }) => (
        <option key={value} value={value}>
          {label}
        </option>
      ))}
    </Select>
  );
};

export default SelectEquipments;
