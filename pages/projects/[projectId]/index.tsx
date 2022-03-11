import React from "react"
import { useRouter } from "next/router"
import PageLayout from "../../../components/utils/PageLayout"

const Projects = () => {
	const router = useRouter()
	return (
		<PageLayout>
			<h1>Project {router.query.projectId}</h1>
		</PageLayout>
	)
}

export default Projects
