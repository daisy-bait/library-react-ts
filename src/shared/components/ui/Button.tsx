import type { ButtonProperties } from "../../interfaces/ButtonProperties";

export default function Button(props: ButtonProperties) {
  return (
    <>
    <button className={props.class} type={props.type} onClick={props.parentMethod}>{props.text}</button>
    </>
  );
}