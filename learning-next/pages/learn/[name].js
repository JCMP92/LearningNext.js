import { useRouter } from 'next/router';
import topics from '../api/topics';

export default function Learn() {
  const router = useRouter();
  const { name } = router.query; //name is our parameter
  const topic = topics.find((topic) => topic.id === name);
  return <h1>Welcome, Are you ready to Learn {topic.id} ?</h1>;
}
