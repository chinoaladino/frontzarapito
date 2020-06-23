import React from 'react';
import './index.css';


class Dropdown extends React.Component {
constructor(){
 super();

 this.state = {
       displayMenu: false,
     };

  this.showDropdownMenu = this.showDropdownMenu.bind(this);
  this.hideDropdownMenu = this.hideDropdownMenu.bind(this);

};

showDropdownMenu(event) {
    event.preventDefault();
    this.setState({ displayMenu: true }, () => {
    document.addEventListener('click', this.hideDropdownMenu);
    });
  }

  hideDropdownMenu() {
    this.setState({ displayMenu: false }, () => {
      document.removeEventListener('click', this.hideDropdownMenu);
    });

  }

  render() {
    return (
        <div  className="dropdown" style = {{width:"200px", height: "45px", marginLeft:"50%"}} >
         <div className="button"  onClick={this.showDropdownMenu} style = {{width:"100%", height:"100%"}}> Iniciar Sesion </div>

          { this.state.displayMenu ? (
          <ul>
         <li>

            <div></div>
         <div className="dropdown-menu">
  <form className="px-4 py-3">
    <div className="form-group">
      <label for="exampleDropdownFormEmail1">Email address</label>
      <input type="email" className="form-control" id="exampleDropdownFormEmail1" placeholder="email@example.com"/>
    </div>
    <div className="form-group">
      <label for="exampleDropdownFormPassword1">Password</label>
      <input type="password" className="form-control" id="exampleDropdownFormPassword1" placeholder="Password"/>
    </div>
    <div classNameName="form-group">
      <div classNameName="form-check">
        <input type="checkbox" className="form-check-input" id="dropdownCheck"/>
        <label className="form-check-label" for="dropdownCheck">
          Remember me
        </label>
      </div>
    </div>
    <button type="submit" className="btn btn-primary">Sign in</button>
  </form>
  <div className="dropdown-divider"></div>
  <a className="dropdown-item" href="#">New around here? Sign up</a>
  <a className="dropdown-item" href="#">Forgot password?</a>
</div>
</li>
         <li><a href="#Manage Pages">Manage Pages</a></li>
         <li><a href="#Create Ads">Create Ads</a></li>
         <li><a href="#Manage Ads">Manage Ads</a></li>
         <li><a href="#Activity Logs">Activity Logs</a></li>
         <li><a href="#Setting">Setting</a></li>
         <li><a href="#Log Out">Log Out</a></li>
         <li>
             <div>
                 <input type="text"/>
                 </div></li>

          </ul>
        ):
        (
          null
        )
        }

       </div>

    );
  }
}

export default Dropdown;