import firebase from "firebase";
import {createStore} from "redux";
import {coffeeReducer, wrapper} from "../coffeeRedux"
import {Provider} from "react-redux";
import fire from "../config/fire-config";
import {loadGetInitialProps} from "next/dist/next-server/lib/utils";
const store = createStore(coffeeReducer);
//ssr csr 이 부분 코드에서는 서버 웹 돌아가든 동작할 수 있게 코드를 짜줘야한다. api 쓰는것 reful server client 서버랑 독립적으로 되어있으면
// 여기서 페이지 내 API쓸 수 있다. fetch localhost 8080
// normalizeUrl 또는 딴거를 api호출했던 것을 전부를 redux에다가 저장한다. 데이터 있나 없나 확인 후

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
