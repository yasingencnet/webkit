import PageList from '@/database/PageList.json';

export const metadata = {
  title: PageList["contact"].title,
  description: PageList["contact"].description,
}

export default function Contact() {
  return (
      <div>
        <h1>{PageList["contact"].title}</h1>
        <p>{PageList["contact"].description}</p>
      </div>
  )
}
