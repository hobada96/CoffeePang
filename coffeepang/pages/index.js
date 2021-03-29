import Link from 'next/link';

export default function Home() {
    return (
        <>
            <h1>Hello</h1>
            <Link href={"/newsstand"}>
                <a>이동</a>
            </Link>
        </>
    )
}
