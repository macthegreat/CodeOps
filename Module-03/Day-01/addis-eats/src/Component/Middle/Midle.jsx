import Sidebar from './Sidebar/Sidebar'
import Products from './Menu/Menu'
import  './Midle.css'

function Midle(){
    return (
        <div className='container-grid'>
            <Sidebar/>
            <Products/>
        </div>
    )
}

export default Midle