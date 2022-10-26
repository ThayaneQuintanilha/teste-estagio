import React, { useContext } from 'react';
import MyContext from '../context/myContext';

function SaveData() {
  const { save } = useContext(MyContext);
  console.log(save);

  // useEffect(() => {
  //   console.log(save);
  // }, [save]);
  return (
    <div>
      SaveData

    </div>
  );
}

export default SaveData;
