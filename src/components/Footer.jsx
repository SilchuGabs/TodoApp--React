import React, {Component}from 'react';
import './../scss/components/_footer.scss'

class Footer extends Component {
render(){
    return(
        <div>
           <footer className="footer">
        <p className="text-muted">
            Copyright&copy;  2021  What's Next?&#174;
        </p>
           </footer>

        </div>
    )
}
}

export default Footer