import { wrapper } from "@/store";
import { Provider } from 'next-auth/client'
import "@/styles/main.scss";

function App({ Component, pageProps }) {
	return (
		<Provider session={pageProps.session}>
		  <Component {...pageProps} />
		</Provider>
	)
}

export default wrapper.withRedux(App);
