export interface IState {
    isAuth: boolean;
}

export const initialState: IState = {
    isAuth: true,
};

interface ILogout {
    type: 'LOGOUT_SUCCESS';
}

interface ILogin {
    payload: any;
    type: 'LOGIN_SUCCESS' | 'IS_AUTH_SUCCESS';
}

export type Actions = ILogin | ILogout

export const reducer = (globalState: IState, action: Actions) => {
    switch (action.type) {
      case 'LOGIN_SUCCESS':
        return { ...globalState, isAuth: true};

      case 'LOGOUT_SUCCESS':
        return { ...globalState, isAuth: false };

      case 'IS_AUTH_SUCCESS':
        return { ...globalState, isAuth: true, userToken: action.payload };

      default:
        return { ...globalState };
    }
  };