type getProps = {
  name? : string
}

const greed = (props: getProps) => {
  
  return (
    <div>
      Hello {props.name}
    </div>
  )
}

export default greed
