import axios from "axios";
import { useEffect } from "react";
import { redirect, useParams } from "react-router-dom";

const ActivatePage = () => {
  const { uid, token } = useParams();

  const activateUser = async (userId, userToken) => {
    try {
      //   axios.defaults.headers.common["Authorization"] = userToken;

      const res = await axios
        .post("http://127.0.0.1:8000/api/v1/auth/users/activation/", {
          uid: userId,
          token: userToken,
        })
        .then(() => redirect("/"));

      return res;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    activateUser(uid, token);
  }, [token, uid]);

  return <div>ActivatePage</div>;
};

export default ActivatePage;
