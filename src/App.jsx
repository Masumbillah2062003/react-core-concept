import './App.css'
import Masum from './Component/Masum'
import Propertics from './Component/Propertics'

function App() {

  const product = [
    {id: 1, productName: "Mobail", price: 20000},
    {id: 2, productName: "laptop", price: 60000},
    {id: 3, productName: "Hard Disk", price: 4000},
    {id: 4, productName: "SSD", price: 5000}
  ]

  return (
    <>
      {/* part : 1 */}
      <Masum></Masum>

      {/*part : 2 -  Props */}

      {
        product.map( products => {
          return(
            <Propertics name={products}></Propertics>
          )
        })
      }
    </>
  )
}

export default App
