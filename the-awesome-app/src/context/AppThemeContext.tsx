import React, {useState, type JSX} from "react";

export type ThemeState = {
    mode: string,
    changeMode: (mode: string) => void 
}
export const initialState: ThemeState = {
    mode: 'dark',
    changeMode: (mode: string) => {}
}

// create context/store
export const AppThemeContext = React.createContext(initialState)

type AppThemeProviderProps = {
    children: JSX.Element
}
export function AppThemeProvider(props: AppThemeProviderProps){

    const [mode, setMode] = useState(initialState.mode)

    return (
        <AppThemeContext.Provider value={{mode, changeMode: setMode}}>
            {props.children}
        </AppThemeContext.Provider>
    )
}