import FancyButton from "@/components/UI/Elements/Button/Button";

export default function NotFound() {
  return (
      <div>
            <h2>Not Found</h2>
            <p>Could not find requested resource</p>
            <FancyButton theme='button-1' link='/'>Return Home</FancyButton>
      </div>
  )
}