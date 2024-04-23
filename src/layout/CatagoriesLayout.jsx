import React from "react";
import CatagoriesCard from "../components/catagoriescard/CatagoriesCard";
import { Row } from "react-bootstrap";

const CatagoriesLayout = () => {
  const data = [
    {
      title: "Electronics",
      image:
        "https://images.pexels.com/photos/792345/pexels-photo-792345.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      title: "Jewelery",
      image:
        "https://images.pexels.com/photos/248077/pexels-photo-248077.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      title: "Men's clothing",
      image:
        "https://media.istockphoto.com/id/1207027323/photo/trendy-clothes-in-a-store.jpg?s=1024x1024&w=is&k=20&c=Oj3TgnNMbjfjINFJP2lPdENLq93_iUuCmAEiGi90zfI=",
    },
    {
      title: "Women's clothing",
      image:
        "https://media.istockphoto.com/id/1152092333/photo/boutique-clothing-store.jpg?b=1&s=612x612&w=0&k=20&c=r3lrRhigCKaeDfwVhT7JbHMRPd2emp44najvSOfLRdg=",
    },
  ];
  return (
    <div className="container mt-2">
      <Row xs={2} md={2} lg={4}  className="g-3">
      {data.map((catagory, index) => (

        <CatagoriesCard
          key={index}
          title={catagory.title}
          image={catagory.image}
        />
      ))}
      </Row>
    </div>
  );
};

export default CatagoriesLayout;
