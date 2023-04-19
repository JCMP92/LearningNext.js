import { useRouter } from 'next/router';

export default function Learn() {
  const router = useRouter();
  const { name } = router.query; //name is our parameter
  return <h1>Routed Learn NextJS</h1>;
}
