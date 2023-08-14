import React, { Component } from 'react';
import sail from "./images/sail_image-removebg-preview.png"

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: '',
      selectedLanguage: '',
    };
  }

  handleOptionChange = (event) => {
    this.setState({ selectedOption: event.target.value });
  };

  handleLanguageChange = (event) => {
    this.setState({ selectedLanguage: event.target.value });
  };

  render() {
    return (
      <header className="bg-[white] w-[100%] h-[10%] shadow-xl shadow-[red] md:h-[10%] shadow-xl shadow-[red] lg:h-[12%] ">
        <nav className="container mx-auto px-4 py-2  flex flex-col md:flex-row justify-between items-center">
          <div className="text-white text-xl font-bold mb-4 md:mb-0 flex w-[10rem]">
            <img src={sail} alt="" className=" h-[6rem] rounded-[5rem]" />
            <h1 className='text-[blue] mt-[1.5rem] ml-[0.5rem]'>LMS</h1>
            
          </div>
          <div className="space-y-2 md:space-y-0 md:space-x-4">
            <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
              <li className="text-[#333983]"><button>Courses</button></li>
              <li className="text-[#333983]"><button>About</button></li>
              <li className="text-[#333983]"><button>Contact</button></li>
            </ul>
          </div>
          <div className="text-white">
            <select
              className="bg-[white] text-[black] px-2 py-1 rounded mr-2 cursor-pointer text-[#0769b2]"
              value={this.state.selectedOption}
              onChange={this.handleOptionChange}
            >
              <option value="" >Admin</option>
              <option value="SignIn"><button >Log In</button></option>
           
            </select>
            <select
              className="bg-[white] text-black px-2 py-1 rounded cursor-pointer text-[#0769b2]"
              value={this.state.selectedLanguage}
              onChange={this.handleLanguageChange}
            >
              <option value="">INSTRUCTOR</option>
              <option value="Spanish"><button>Log In</button></option>
              <option value="French"><button>Sign Up</button></option>
            </select>
            <p className="text-sm mt-1">
               {this.state.selectedOption}
            </p>
          </div>
        </nav>
      </header>
    );
  }
}
