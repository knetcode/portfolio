import React from "react"
import Link from "next/link"
import { useMantineTheme } from "@mantine/core"

const Home = () => {
	const theme = useMantineTheme()

	return (
		<>
			<div className="container">
				<main className="showcase">
					<div className="split">
						<h1>Welcome to my portfolio</h1>
					</div>
					<div className="split">
						<h1>Welcome to my portfolio</h1>
					</div>
				</main>
				<section className="section">
					<h2>This is where you can see all my stuff</h2>
					<Link href="/projects">
						<a>Projects</a>
					</Link>
				</section>
			</div>
			<style jsx>{`
				.container {
					width: 100%;
					height: 100%;
				}
				.showcase {
					background-color: ${theme.primaryColor};
					min-height: 70vh;
					color: white;
					display: grid;
					grid-template-columns: repeat(2, 1fr);
				}
				.split {
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: center;
				}
				.section {
					margin-top: -50px;
					background-color: white;
					border-top-left-radius: 50px;
					border-top-right-radius: 50px;
					padding: 50px 20px;
				}
			`}</style>
		</>
	)
}

export default Home
