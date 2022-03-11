import React from "react"
import Document, { Html, Head, Main, NextScript } from "next/document"
import { nanoid } from "nanoid"

interface MyProps {
	nonce: string
}

class CustomDocument extends Document<MyProps> {
	static async getInitialProps(ctx) {
		const nonce: String = nanoid()
		const docProps = await ctx.defaultGetInitialProps(ctx, { nonce })

		let contentSecurityPolicy = ""
		if (process.env.NODE_ENV === "production") {
			contentSecurityPolicy += `connect-src 'self' 'unsafe-inline' https://maps.googleapis.com ;`
			contentSecurityPolicy += `default-src 'self' 'unsafe-inline';`
			contentSecurityPolicy += `form-action 'self';`
			contentSecurityPolicy += `font-src 'self' 'unsafe-inline' https://fonts.gstatic.com;`
			contentSecurityPolicy += `frame-src 'unsafe-inline';`
			contentSecurityPolicy += `img-src 'self' 'unsafe-inline' data: blob: https://maps.googleapis.com https://icon-library.com https://maps.gstatic.com ;`
			contentSecurityPolicy += `manifest-src 'unsafe-inline';`
			contentSecurityPolicy += `media-src 'unsafe-inline';`
			contentSecurityPolicy += `object-src 'unsafe-inline';`
			contentSecurityPolicy += `script-src 'self' 'unsafe-inline' 'unsafe-eval' https://maps.googleapis.com;`
			contentSecurityPolicy += `style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;`
			contentSecurityPolicy += `worker-src 'unsafe-inline';`
		} else {
			contentSecurityPolicy += `connect-src 'self' 'unsafe-inline' https://maps.googleapis.com ;`
			contentSecurityPolicy += `default-src 'self' 'unsafe-inline';`
			contentSecurityPolicy += `form-action 'self';`
			contentSecurityPolicy += `font-src 'self' 'unsafe-inline' https://fonts.gstatic.com;`
			contentSecurityPolicy += `frame-src 'unsafe-inline';`
			contentSecurityPolicy += `img-src 'self' 'unsafe-inline' data: blob: https://maps.googleapis.com https://icon-library.com https://maps.gstatic.com ;`
			contentSecurityPolicy += `manifest-src 'unsafe-inline';`
			contentSecurityPolicy += `media-src 'self' 'unsafe-inline';`
			contentSecurityPolicy += `object-src 'unsafe-inline' data: ;`
			contentSecurityPolicy += `script-src 'self' 'unsafe-inline' 'unsafe-eval' https://maps.googleapis.com;`
			contentSecurityPolicy += `style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;`
			contentSecurityPolicy += `worker-src 'unsafe-inline';`
		}

		ctx.res.setHeader("Content-Security-Policy", contentSecurityPolicy)
		return { ...docProps, nonce }
	}

	render() {
		return (
			<Html>
				<Head>
					<meta property="csp-nonce" content={this.props.nonce} />
					<meta charSet="UTF-8" />
					<link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
					<link rel="preconnect" href="https://fonts.googleapis.com" />
					<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
					<link
						href="https://fonts.googleapis.com/css2?family=Fira+Mono:wght@400;500&family=Nunito+Sans:wght@400;700&display=swap"
						rel="stylesheet"
					/>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}

export default CustomDocument
