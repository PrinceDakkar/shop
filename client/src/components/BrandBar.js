import React, { useContext } from "react";
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import  Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";

const BrandBar = observer(() => {
  const { device } = useContext(Context);

  return (
      <Row xs="auto" className="mt-2">
          {device.brands.map(brand=>
            <Card
                style={{cursor: 'pointer'}}
                border={brand.id === device.selectedBrand.id ? 'danger' : 'light'}
                onClick={()=> device.setSelectedBrand(brand)}
                key={brand.id}
                className="p-3"
            
                >
                {brand.name}
            </Card>
            )}
      </Row>
  );
});

export default BrandBar;
