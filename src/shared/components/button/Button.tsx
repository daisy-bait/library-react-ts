import type { ButtonProperties } from "../../interfaces/ButtonProperties";

export default function Button(props: ButtonProperties) {
  return (
    <>
    <button style={props.style} className={props.class} type={props.type}>{props.text}</button>
    </>
  );
}