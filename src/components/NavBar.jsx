import ButtonComponent from './ButtonComponent'
import BrandComponent from './BrandComponent'
import CartWidget from './CartWidgetComponent'
import './NavBar.css'

export default function NavBar() {
    return (
        <header>
            <div className='BrandComponent'>
                <BrandComponent />
            </div>

            <nav className='ButttonComponents'>
                <ButtonComponent texto='Electricidad' color="lightgray" />
                <ButtonComponent texto='Iluminación' color="lightgray" />
                <ButtonComponent texto='Accesorios' color="lightgray" />
            </nav>

            <div className='CartWidget'>
                <CartWidget />
            </div>
        </header>
    )
}