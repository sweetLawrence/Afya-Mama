import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const useLoginForm = () => {
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });

  const formRef = useRef();
  const navigation = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      //   const response = await axios.post(
      //     "https://your-api-url.com/login",
      //     loginData
      //   );
      //   console.log("Response:", response.data);
      formRef.current.reset();

      setLoginData({
        username: "",
        password: "",
      });

      navigation("/dashboard");
      console.log(loginData);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoginData({
      ...loginData,
      [name]: value,
    });
  };

  return {
    loginData,
    handleInputChange,
    handleSubmit,
    formRef,
  };
};

export default useLoginForm;
