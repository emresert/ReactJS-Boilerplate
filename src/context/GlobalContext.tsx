import React, { Dispatch, useReducer } from 'react';
import { Actions, initialState, IState, reducer } from '../reducers/GlobalReducer';

interface IContextProps {
  globalState: IState;
  dispatch: Dispatch<Actions>;
}
export const GlobalContext = React.createContext({} as IContextProps);

export const GlobalContextProvider = (props: any) => {
  const [globalState, dispatch] = useReducer(reducer, initialState);
  const value = { globalState, dispatch };
  return (
    <GlobalContext.Provider value={value}>
      {props.children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
