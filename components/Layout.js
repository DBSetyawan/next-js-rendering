import Head from "next/head";
import React from "react"
import Link from "next/link"
import { Nav, PageBody } from "../style"
import { Global, css } from "@emotion/react"

export function Layout({ children }) {
	return (
		<main className="layout">
			<Global
				styles={css`
					body {
						margin: 0;
						padding: 0;
						font-family: sans-serif;
					}
					a {
						text-decoration: none;
					}
					`}
			/>
			<Head>
				<title>Live | Input data karyawan</title>
			</Head>
				<Nav>
					<Link href="/" passHref>
						<a>Dashboard</a>
					</Link>
					<Link href="/pageTwo">
						<a>Development Next.JS</a>
					</Link>
				</Nav>
			<PageBody>{children}</PageBody>
		</main>
	);
}
