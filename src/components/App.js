import React, {Component} from 'react';
import Projects from './Projects';
import SocialProfiles from './SocialProfiles';
import project1 from '../assets/project1.png';
import Title from './Title';

class App extends Component {
    state = { displayBio: false };

    toggleDisplayBio(){
        this.setState({displayBio: !this.state.displayBio});
    }

    render () {
        return (
            <div>
                <img src={project1} alt="profile" className="profile" />
                <h1>Hello!</h1>
                <p>My name is Anita.</p>
                <Title/>
                {
                    this.state.displayBio ? (
                    <div>
                        <p>I live in Warsaw, Poland</p>
                        <p>I work as Front-End developer</p>
                        <button onClick={() => this.toggleDisplayBio()}>Show less</button>
                    </div>
                ) : (<div>
                        <button onClick={() => this.toggleDisplayBio()}>Read more</button>
                    </div>)
                }
                <hr/>
                <Projects/>
                <hr/>
                <SocialProfiles/>
            </div>
        )
    }
}

export default App;

