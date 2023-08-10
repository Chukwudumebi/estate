// PropertyForm.jsx
// A component that allows real estate owners to place their property for sale
import React, { useState } from "react";

function PropertyForm() {
    
    const [saleType, setSaleType] = useState("total");
    const [subdivisions, setSubdivisions] = useState(1);
    const [ownership, setOwnership] = useState("owner");
    const [rent, setRent] = useState(0);
    const [taxes, setTaxes] = useState(0);
    const [age, setAge] = useState(0);
    const [tenants, setTenants] = useState([]);
    const [price, setPrice] = useState(0);
    const [images, setImages] = useState([]);

    const handleSubmit = (e) => {  
        e.preventDefault();
        // eslint-disable-next-line no-console
        console.log("Form submitted");
      };
    
      const handleAddTenant = () => {
        console.log("Tenant added");
      };
    
      const handleAddImage = () => {
        console.log("Image added");
      };
  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <span className="block text-sm font-medium text-gray-700">Sale Type</span>
        <div className="mt-2">
          <label>
            <input
              type="radio"
              name="saleType"
              value="total"
              checked={saleType === "total"}
              onChange={(e) => setSaleType(e.target.value)}
              className="mr-2"
            />
            Total
          </label>
          <label className="ml-4">
            <input
              type="radio"
              name="saleType"
              value="partial"
              checked={saleType === "partial"}
              onChange={(e) => setSaleType(e.target.value)}
              className="mr-2"
            />
            Partial
          </label>
        </div>
      </div>


      <button type="submit" className="px-4 py-2 bg-green-500 text-white rounded">
        Submit
      </button>
    </form>
  );
}

export default PropertyForm;
