import create from 'zustand';

/********** Selectors ***********/

/********** GETTERS Selectors ***********/
export const loggedInUserNameSelector = state => state.loggedInUserName;

/********** SETTERS Selectors ***********/
export const setLoggedInUserNameSelector = state => state.setLoggedInUserName;



/********** Middlewares ***********/
const log = config => (set, get, api) => config(args => {
    // console.log("  applying", args)
    set(args)
    // console.log("  new state", get())
}, get, api)



/********** Store ***********/
export const useAppStore = create(log(set => ({

    loggedInUserName: "Vineeth",
    setLoggedInUserName: (loggedInUserName) => set(state => ({ loggedInUserName })),

})));