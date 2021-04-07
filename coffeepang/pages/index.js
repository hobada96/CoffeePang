import Link from 'next/link';

export default function Home() {
    return (
        <>
            <h1>목록</h1>
            <Link href={"/newsstand"}>
                <a>판매 목록</a>
            </Link>
            <br/>
            <Link href={"/newsstand/CoffeeRegistration"}>
                <a>판매 등록</a>
            </Link>
        </>
    )
}
