import PageList from '@/database/PageList.json';

export const metadata = {
  title: PageList["about"].title,
  description: PageList["about"].description,
}

export default function Contact() {
  return (
      <div>
        <h1>{PageList["about"].title}</h1>
        <p>{PageList["about"].description}</p>
      </div>
  )
}
