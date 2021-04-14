import admin from 'firebase-admin'
import {createStore} from "redux";
import {coffeeReducer, wrapper} from "../coffeeRedux"
import {Provider} from "react-redux";
const store = createStore(coffeeReducer);

function MyApp({Component, pageProps}) {
    const firebaseConfig = {
        apiKey: "AIzaSyDBdTiaW9RjQXf7x6FltzIOX1L11Ek3ZrE",
        authDomain: "coffeepang-a3a2f.firebaseapp.com",
        projectId: "coffeepang-a3a2f",
        storageBucket: "coffeepang-a3a2f.appspot.com",
        messagingSenderId: "893582678580",
        appId: "1:893582678580:web:0f3fb11505488b6dba8861",
        measurementId: "G-WYBKFZQRDS"
    }
    console.log(firebase);

    return (
        <>
            <Provider store={store}>
                <Component {...pageProps} />
            </Provider>
        </>
    )
}

export default wrapper.withRedux(MyApp)
