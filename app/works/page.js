import PageList from '@/database/PageList.json';

export const metadata = {
  title: PageList["works"].title,
  description: PageList["works"].description,
}

export default function Contact() {
  return (
      <div>
        <h1>{PageList["works"].title}</h1>
        <p>{PageList["works"].description}</p>
      </div>
  )
}
