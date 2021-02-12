import Link from 'next/link'

export default function FirstPost() {
    return (
        <>
            <h1>Just Kidding, nothing important to see here :P</h1>
            <h2>
                <Link href="/">
                    <a>Back to the main page</a>
                </Link>
            </h2>
        </>
    )
}