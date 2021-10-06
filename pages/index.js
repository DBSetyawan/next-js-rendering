import { Header, Layout, Modal, Pagination, Table } from "@/components";
import { signIn, useSession } from 'next-auth/client'

export default function Page() {
	const [session, loading] = useSession()
  
	if (loading) {
	  return <p>Loading...</p>
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