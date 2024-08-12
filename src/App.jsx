import { useEffect } from "react";
import { useState } from "react";
import Phones from "./Components/Phones";

function App() {
  const [phones, setPhones] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const url = "http://localhost:3000/phones";

  const loadingMsg = (
    <h2 className="text-5xl absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
      Loading..........
    </h2>
  );

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setPhones(data);
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      {isLoading && loadingMsg}
      {!isLoading && <Phones phones={phones} />}
    </>
  );
}

export default App;
