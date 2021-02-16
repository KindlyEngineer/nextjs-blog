import Link from 'next/link'

export default function FirstPost() {
    return (
        <>
            <h1>Change for testing purposes</h1>
            <h2>
                <Link href="/">
                    <a>Back to the main page</a>
                </Link>
            </h2>
        </>
    )
}