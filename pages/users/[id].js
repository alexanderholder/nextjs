import { useRouter } from 'next/router'

export default function Page({ user }) {
    const router = useRouter()
    const { id } = router.query

    return (<>
        <h1>Hello {id}</h1>
        <img src={user.image} />
    </>)
    
}

export async function getServerSideProps({ params }) {
    const req = await fetch(`http://localhost:3000/${params.id}.json`);
    const data = await req.json();

    return {
        props: { user: data },
    }
}
