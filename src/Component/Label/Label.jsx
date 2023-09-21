import './style.css'
const Label = ({htmlFor,children,...rest}) => {
  return (
    <label htmlFor={htmlFor} {...rest} className="label-from">{children}</label>
  )
}

export default Label

