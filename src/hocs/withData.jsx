import React, {useEffect, useState} from "react";
import axios from "axios";
import Loader from "components/Loader/Loader";

const withData = (WrapComponent) => {
  return (props) => {
    const [data, setData] = useState([]);
    useEffect(() => {
      axios({
        url: props.dataSource,
        method: "GET",
      })
        .then((response) => {
          setData(response.data.content.slice(0, 10));
        })
        .catch((error) => {
          console.log(error);
        });
    }, []);

    if (data.length < 1) return <Loader />;

    return <WrapComponent data={data} {...props}/>
  };
};

export default withData;