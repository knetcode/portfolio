import React, { useEffect, useState } from "react"
import { RootStateOrAny, useSelector } from "react-redux"
import { AppShell, Navbar, Header, ScrollArea, useMantineTheme } from "@mantine/core"
import { useViewportSize } from "@mantine/hooks"
import Image from "next/image"
import Link from "next/link"
import ColorSchemeToggle from "../ColorSchemeToggle"

type Props = {
	children?: JSX.Element | JSX.Element[]
} & typeof defaultProps

const defaultProps = {
	children: <>Empty</>,
}

const PageLayout = ({ children }: Props) => {
	const theme = useMantineTheme()
	const { width } = useViewportSize()

	const isNavOpen = useSelector((state: RootStateOrAny) => state.app.isNavOpen)

	const [navToLoad, setNavToLoad] = useState(isNavOpen)

	useEffect(() => {
		if (typeof window !== "undefined" && localStorage.getItem("isNavOpen")) {
			setNavToLoad(localStorage.getItem("isNavOpen"))
		} else {
			setNavToLoad(isNavOpen)
		}
	}, [isNavOpen])

	return (
		<>
			<AppShell
				padding="md"
				navbar={
					<Navbar p="xs" width={navToLoad === true ? { sm: 200, lg: 200, base: 50 } : { base: 50 }}>
						<Navbar.Section mt="xs">{/* Header with logo */}</Navbar.Section>

						<Navbar.Section grow component={ScrollArea} mx="-xs" px="xs">
							<Link href="/projects/placeholder1">
								<a className="link">Project Placholder 1</a>
							</Link>
							<Link href="/projects/placeholder2">
								<a className="link">Project Placholder 2</a>
							</Link>
							<Link href="/projects/placeholder3">
								<a className="link">Project Placholder 3</a>
							</Link>
							<Link href="/projects/placeholder4">
								<a className="link">Project Placholder 4</a>
							</Link>
							<Link href="/projects/placeholder5">
								<a className="link">Project Placholder 5</a>
							</Link>
						</Navbar.Section>

						<Navbar.Section>
							<div className="nav-footer">
								{(width > 1200 || width < 768) && (
									<a className="profile-picture" href="mailto:kyle@knetcode.com" rel="noreferrer">
										<Image src="/profile_picture.jpg" layout="responsive" objectFit="cover" height={60} width={60} />
									</a>
								)}
								{width > 768 && (
									<div className="links">
										<a className="link" href="mailto:kyle@knetcode.com" rel="noreferrer">
											kyle@knetcode.com
										</a>
										<a className="link" href="tel:+27720809500" rel="noreferrer">
											072 080 9500
										</a>
										<a className="link" href="https://github.com/knetcode" rel="noreferrer" target="_blank">
											github.com/knetcode
										</a>
									</div>
								)}
							</div>
						</Navbar.Section>
					</Navbar>
				}
				header={
					<Header height={60} p="xs">
						<div className="header-container">
							<div className="badge-container">
								<h1>Portfolio</h1>
								<p className="badge">KE</p>
							</div>
							<ColorSchemeToggle />
						</div>
					</Header>
				}
				styles={() => ({
					main: {
						backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.colors.gray[0],
						color: theme.colorScheme === "light" ? theme.colors.dark[8] : theme.colors.gray[0],
					},
				})}
			>
				<div>{children}</div>
			</AppShell>
			<style jsx>{`
				.header-container {
					height: 100%;
					width: 100%;
					display: flex;
					flex-direction: row;
					justify-content: space-between;
					align-items: center;
					color: ${theme.primaryColor};
				}
				.badge-container {
					display: flex;
					flex-direction: row;
					justify-content: center;
					align-items: center;
				}
				.badge {
					padding: 10px;
					background-color: ${theme.primaryColor};
					border-radius: 50%;
					color: white;
					font-weight: bold;
					width: 40px;
					height: 40px;
					margin: 0 10px;
				}
				.profile-picture {
					border-radius: 50%;
					overflow: hidden;
					min-width: 30px;
					max-width: 60px;
					min-height: 30px;
					max-height: 60px;
				}

				.nav-footer {
					border-top: 1px solid ${theme.colors.muted[4]};
					padding: 20px 0 10px;
					display: flex;
					flex-direction: row;
					justify-content: flex-start;
					align-items: center;
				}
				.links {
					font-size: 14px;
					margin-left: 10px;
					display: flex;
					flex-direction: column;
					justify-content: flex-start;
					align-items: flex-start;
					gap: 2px;
				}
			`}</style>
		</>
	)
}

PageLayout.defaultProps = defaultProps

export default PageLayout
