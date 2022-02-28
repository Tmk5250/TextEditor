import React from 'react';
import { useState } from 'react';
import NoteContext from './noteContext';

const NoteState = (props) => {
    const st={
        "name":"Tejas"
    }
    const [first, setfirst] = useState(st);
  return (
      <NoteContext.Provider value={first}>
          {props.children}
      </NoteContext.Provider>
  );
};

export default NoteState;