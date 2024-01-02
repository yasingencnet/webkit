import PageList from '@/database/PageList.json';

export const metadata = {
  title: PageList["contact"].title,
  description: PageList["contact"].description,
}

export default function Contact() {
  return (
    <h1>Are you my contact page? tets</h1>
  )
}
