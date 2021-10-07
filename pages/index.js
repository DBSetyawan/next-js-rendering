import { Header, Layout, Modal, Pagination, Table } from "@/components";
import { signIn, useSession } from 'next-auth/client'
import Loading from "../components/Loading";

export default function Page() {
	const [session, loading] = useSession()
	
	
	if (loading) {
		return <Loading loading={loading} />  
	}

	return (
		<>
		{!session && (
			<>
			  <Layout>
					<Header />
				</Layout>
			</>
		)}
		{session && (
			<Layout>
				<Header />
				<Table />
				<Pagination />
				<Modal />
			</Layout>
			)
		}
		</>
	)
  }