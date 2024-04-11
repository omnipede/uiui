'use server'

import {cookies} from "next/headers";
import {create} from "@/app/dashboard/settings/action";

export default async function Page() {
    // Call server action!
    await create();

    const cookieStore = cookies()
    return (
        <>
            <h1>Hello, settings</h1>
            {/*쿠키 로딩 방법*/}
            {
                cookieStore.getAll().map(cookie => {
                    return (<div key={cookie.name}>
                        <p>Name: {cookie.name}</p>
                        <p>Value: {cookie.value}</p>
                    </div>)
                })
            }
            {/*환경 변수 로딩 방법*/}
            {
                <p>DB HOST: {process.env.DB_HOST}</p>
            }
        </>
    );
}