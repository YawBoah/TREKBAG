import Counter from "./Counter"
import Logo from "./Logo"


function Header({totalNumberOfItems}) {
  return (
    <header>
      <Logo/>
      <Counter totalNumberOfItems={totalNumberOfItems}/>
    </header>
  )
}

export default Header