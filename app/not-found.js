import FancyButton from "@/components/UI/Elements/Button/Button";

export default function NotFound() {
  return (
      <div className={'notFound'}>
            <h1 className={'notFoundTitle'}>Oops!</h1>
            <h2 className={'notFoundTitle'}>The page you requested cannot be found.</h2>
            <p>The URL may be misspelled or the page you&apos;re looking for doesn&apos;t exist anymore like Mausoleum at Halicarnassus...</p>
            <FancyButton theme='button-1' link='/'>Return Home</FancyButton>
      </div>
  )
}