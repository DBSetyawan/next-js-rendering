import { Header, Layout, Modal, Pagination, Table } from "@/components";
import { signIn, useSession } from 'next-auth/client'
import { getSession } from 'next-auth/client'

export default function Page() {
	const [session, loading] = useSession()
	
	
	if (loading) {
		return <p> Please wait..</p>
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

//   export async function getServerSideProps(ctx) {
// 	const session = await getSession(ctx)
//   //   if no session found(user hasn’t logged in)
// 	  if (!session) {
// 		  return {
// 		  redirect: {
// 		  destination: '/', //redirect user to homepage
// 		  permanent: false,
// 		  }
// 	  }
// 	 }
// 	return {
// 	  props: {
// 		user: session.user,
// 	  },
// 	}
//   }