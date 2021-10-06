import { Header, Layout, Modal, Pagination, Table } from "@/components";
import { signIn, signOut, useSession } from 'next-auth/client'

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
					<p> anda belum masuk, login terlebih dahulu</p>
						<Header />
				<button onClick={signIn}>Sign in</button>

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