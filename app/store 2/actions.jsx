// store/actions.jsx
export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const SET_SELECTED_RAFFLE = 'SET_SELECTED_RAFFLE';


export const login = (authToken, userData) => ({
  type: LOGIN,
  payload: { authToken, userData },
});

export const logout = () => ({
  type: LOGOUT,
});


export const setSelectedRaffle = (raffleId) => ({
  type: SET_SELECTED_RAFFLE,
  payload: raffleId,
});
