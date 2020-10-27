import { useState } from 'react';

const useToggle = (initState = false) => {
  const [isOn, setToggleState] = useState(initState);

  const setToggle = () => {
    setToggleState(prevState => !prevState);
  }

  return [isOn, setToggle]
}

export default useToggle;
