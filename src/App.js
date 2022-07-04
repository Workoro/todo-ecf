import Nav from './pages/Navigation'
import { createContext, useState, useEffect } from 'react'
import { ThemeButton } from './styled/styled'

export const MonContexte = createContext()
function App() {
    // ======================
    //       Theme
    // ======================
    const [theme, setTheme] = useState(true)
    useEffect(() => {
        if (theme) {
            document.body.style.backgroundColor = 'white'
            document.body.style.color = 'black'
        } else {
            document.body.style.backgroundColor = 'black'
            document.body.style.color = 'white'
        }
    }, [theme])

    return (
        <div className="App">
            <ThemeButton onClick={() => setTheme(!theme)}>
                Change theme
            </ThemeButton>
            <MonContexte.Provider value={{ theme: theme }}>
                <Nav />
            </MonContexte.Provider>
        </div>
    )
}

export default App
