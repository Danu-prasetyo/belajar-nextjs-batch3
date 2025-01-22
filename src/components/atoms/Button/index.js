function Button(props) {
  return <button className={`h-10 px-6 rounded font-semibold ${props.buttonClassname}`}>{props.children}</button>;
}

export default Button;
