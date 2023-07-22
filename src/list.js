const List = props => {
  const {each} = props
  const {userInput} = each
  console.log(each)
  return (
    <li>
      <p>
        {userInput} : {userInput.length}
      </p>
    </li>
  )
}

export default List
