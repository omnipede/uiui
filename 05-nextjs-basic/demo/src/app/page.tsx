'use client'

import Link from "next/link";
import {useRouter} from "next/navigation";
import {useEffect} from "react";


export default function Page() {
    const router = useRouter() // client only

    // Call routing handler
    useEffect(() => {
        fetch('/api').then(res => {
            return res.json()
        }).then(data => {
            console.log(data)
        })
    })

    return (
      <div>
        <h1>Hello, Next.js</h1>
        <Link href={'/dashboard/settings'}> using Link component </Link>
        <button type={'button'} onClick={() => router.push('/dashboard/settings')}>using useRouter hook. </button>
      </div>
    );
}
