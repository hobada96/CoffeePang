import firebase from "firebase";
import {createStore} from "redux";
import {coffeeReducer, wrapper} from "../coffeeRedux"
import {Provider} from "react-redux";
const store = createStore(coffeeReducer);

function MyApp({Component, pageProps}) {
    return (
        <>
            <Provider store={store}>
                <Component {...pageProps} />
            </Provider>
        </>
    )
}

export default wrapper.withRedux(MyApp)
