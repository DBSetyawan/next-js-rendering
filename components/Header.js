import { useDispatch } from "react-redux";
import { PersonAddSVG } from "@/icons";
import { setModalOpen } from "@/store";
import { signIn, signOut, useSession } from 'next-auth/client'

export function Header() {
	const dispatch = useDispatch();
	const [session, loading] = useSession()

	return (
		<header className="header">
		{session && (
			<>
				Signed in as {session.user.email} <br />
				<button onClick={signOut}>Sign out</button>
			</>
		  )}
			<h1 className="header__h1">
				Input data <span>Karyawan</span>
			</h1>
			<button
				className="btn btn__primary btn__icon"
				onClick={() => {
					dispatch(setModalOpen(true));
				}}
			>
				<PersonAddSVG /> <span>Add new</span>
			</button>
		</header>
	);
}
