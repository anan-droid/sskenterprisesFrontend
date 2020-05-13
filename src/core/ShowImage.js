import React, { useState } from "react";
import { API } from "../config";
const ShowImage = ({ item, url }) => {
    console.log(item,url);
   return( <div className="product-img">
        <img
            src={`${API}/${url}/photo/${item._id}`}
            alt={item.name}
        />
    </div>)
   
};

export default ShowImage;