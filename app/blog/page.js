import PageList from '@/database/PageList.json';

export const metadata = {
  title: PageList["blog"].title,
  description: PageList["blog"].description,
}

export default function Contact() {
  return (
      <div>
        <h1>{PageList["blog"].title}</h1>
        <p>{PageList["blog"].description}</p>
      </div>
  )
}
