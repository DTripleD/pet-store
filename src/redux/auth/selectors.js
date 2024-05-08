export const selectAuthToken = (state) => state.auth.authToken;

export const selectUser = (state) => state.auth.user;

export const selectActivation = (state) => state.auth.isActivationSent;
