import Counter from "./Counter"
import Logo from "./Logo"


function Header({numberOfItemsPacked,totalNumberOfItems}) {
  return (
    <header>
      <Logo/>
      <Counter numberOfItemsPacked={numberOfItemsPacked} totalNumberOfItems={totalNumberOfItems}/>
    </header>
  )
}

export default Header