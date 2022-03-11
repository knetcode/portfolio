export default async (req: any, res: any) => {
	try {
		res.json({ success: true }).status(200)
	} catch (error) {
		res.json({ success: false }).status(500)
	}
}
