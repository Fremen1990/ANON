import React from "react";
import { API } from "../config";
// import { API_EXTERNAL } from "../config";

const ShowImage = ({ item, url }) => (
    <div className="article-image ">
        <img
            src={`${API}/${url}/photo/${item._id}`}
            alt={item.name}
            style={{ maxHeight: "100%", maxWidth: "100%" }
      }
            className="w-100"
        />
    </div>
);

export default ShowImage;
