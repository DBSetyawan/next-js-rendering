import { useDispatch } from "react-redux";
import { PersonAddSVG } from "@/icons";
import { setModalOpen } from "@/store";
import { signIn, signOut, useSession } from 'next-auth/client'

export function Header() {
	const dispatch = useDispatch();
	const [session, loading] = useSession()

	return (
		<header className="header">
		{ !session &&(
			<>
				Masuk terlebih dahulu, untuk informasi lebih lanjut!
				<button className="btn btn__primary btn__icon"
				onClick={signIn}>Masuk</button>
			</>
		)}
		{session && (
			<>
				Username anda : {session.user.email} <br />
				<button className="btn btn__danger btn__icon" onClick={signOut}>Sign out</button>
				<h1 className="header__h1">
					Input data <span>Karyawan</span>
				</h1>
				<button
					className="btn btn__primary btn__icon"
					onClick={() => {
						dispatch(setModalOpen(true));
					}}
				>
				<PersonAddSVG /> <span>Tambah baru</span>
			</button>
			</>
		  )}
		
		</header>
	);
}
