import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./libs/router/router";

function App() {
    return (
        <>
            <RouterProvider router={router}></RouterProvider>
        </>
    );
}

export default App;
