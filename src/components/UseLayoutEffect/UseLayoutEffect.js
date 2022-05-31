import { useEffect, useLayoutEffect, useRef, React } from "react";

export const UseLayoutEffect = () => {
  const inputRef = useRef(null);

  useLayoutEffect(() => {
    console.log(inputRef.current.value);
  }, []);

  useEffect(() => {
    inputRef.current.value = "Hello";
  }, []);

  return (
    <div className="App">
      <input ref={inputRef} value="Pedro" style={{ width: 400, height: 60 }} />
    </div>
  );
};
