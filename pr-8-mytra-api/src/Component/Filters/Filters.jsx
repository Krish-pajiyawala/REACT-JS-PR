// Filters.jsx
import React, { useState } from "react";
import { Form, Card, Row, Col, Button } from "react-bootstrap";
import "./Filters.css";

const Filters = ({ category, filters, setFilters }) => {
  const getBrandOptions = () => {
    switch (category) {
      case "men":
        return ["Louis Philippe", "Allen Solly", "Park Avenue", "Peter England"];
      case "women":
        return ["Zara", "H&M", "Forever 21"];
      case "kids":
        return ["Gap Kids", "Carter's", "Mini Club"];
      default:
        return [];
    }
  };

  const categories = () => {
    switch (category) {
      case "men":
        return ["Jeans", "T-Shirt", "Kurta"];
      case "women":
        return ["Top", "Leggings", "Saree"];
      case "kids":
        return ["Shirt", "Shorts", "Frock"];
      default:
        return [];
    }
  };

  const [brandSearch, setBrandSearch] = useState("");

  const filteredBrands = getBrandOptions().filter((b) =>
    b.toLowerCase().includes(brandSearch.toLowerCase())
  );

  const discountOptions = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90];

  const clearAll = () => {
    setFilters({
      category: [],
      brand: [],
      discount: null,
      price: 20000,
    });
  };

  return (
    <Card className=" p-3 shadow-sm w-100" >
      <Row>
        <Col md={12}>
          <div className="d-flex justify-content-between align-items-center">
            <h5 className="fw-bold mb-3">FILTERS</h5>

            <Button variant="white" style={{ cursor: "pointer", color: "#ff3f6c" }} onClick={clearAll} >
              CLEAR ALL
            </Button>
          </div>
        </Col>

        <Col md={12}>
          <div className="mb-4">
            <h6 className="fw-bold text-uppercase">CATEGORIES</h6>

            {categories().map((c, index) => (
              <Form.Check key={index} type="checkbox" className="my-2 custom-checkbox" label={c} checked={filters.category.includes(c)}
                onChange={() => setFilters({
                  ...filters,
                  category: filters.category.includes(c)
                    ? filters.category.filter((x) => x !== c)
                    : [...filters.category, c],
                })
                } />
            ))}
          </div>
        </Col>

        <Col md={12}>
          <div className="mb-4">
            <h6 className="fw-bold text-uppercase">BRAND</h6>

            <div style={{ maxHeight: "180px", overflowY: "auto" }}>
              {filteredBrands.map((brand, i) => (
                <Form.Check key={i} type="checkbox" className="my-2 custom-checkbox" label={brand} checked={filters.brand.includes(brand)}
                  onChange={() => setFilters({
                    ...filters,
                    brand: filters.brand.includes(brand)
                      ? filters.brand.filter((x) => x !== brand)
                      : [...filters.brand, brand],
                  })} />
              ))}
            </div>
          </div>
        </Col>

        <Col md={12}>
          <div className="mb-4">
            <h6 className="fw-bold text-uppercase">PRICE</h6>

            <Form.Range
              className="custom-range" min={0} max={20000} step={100} value={filters.price}
              onChange={(e) => setFilters({
                ...filters,
                price: Number(e.target.value),
              })} />

            <div className="d-flex justify-content-between mt-2">
              <span>₹0</span>
              <span>₹{filters.price}</span>
            </div>
          </div>
        </Col>

        <Col md={12}>
          <div className="mb-4">
            <h6 className="fw-bold text-uppercase">DISCOUNT RANGE</h6>

            {discountOptions.map((d, idx) => (
              <Form.Check key={idx} type="radio" name="discount" className="my-1 custom-checkbox" label={`${d}% and above`} checked={filters.discount === d}
                onChange={() => setFilters({
                  ...filters,
                  discount: d,
                })} />
            ))}
          </div>
        </Col>
      </Row>
    </Card>
  );
};

export default Filters;
