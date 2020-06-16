import React    from 'react'
import './Layout.css'

class Layout extends React.Component {
    render () {
        return (
            <div className='body'>

                <header className="header">
                    <div className="left">
                        <div>Logo</div>

                        <ul>
                            <li><a href="#">Company</a></li>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Network</a></li>
                            <li><a href="#">News</a></li>
                        </ul>

                    </div>

                    <div className="right">
                        <div>1</div>
                        <div>2</div>
                    </div>     
                </header>
                <div className="section_1">
                    section1
                    
                </div>
            </div>
        )
    }
}


export default Layout
