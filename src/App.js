import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <head>
        <title>Cindy Wang</title>
        <link rel="stylesheet" href='style.css'></link>
      </head>
      <body>
          <h2>Hello World! :)</h2>

          <p>My name is Cindy and I am from Fargo, North Dakota.</p>

          <p>This term, I'll be living with a few friends in NYC!</p>

          <p>I am planning on majoring in computer science and economics.</p>
          <p>The classes I'm taking for this quarter are: </p>
              <ul>
                  <li>ECON 1</li>
                  <li>PHYS 3</li>
                  <li>WRIT 5.26</li>
                  <li>WGSS 15</li>
              </ul>
              
          <p>Some clubs that I've joined are:</p>
              <ul>
                  <li>Formula Racing</li>
                  <li>Dartmouth Outing Club (DOC)</li>
                  <li>Women in Computer Science (WiCS)</li>
                  <li>Dartmouth Undergraduate Journal of Science (DUJS)</li>
              </ul>
          
          <p>In my free time, some things that I like to do are:</p>
              <ul>
                  <li>Go for a run or hike</li>
                  <li>Read or write</li>
                  <li>Watch movies and shows</li>
                  <li>Hang out with friends and family</li>
                  <li>Play the piano</li>
                  <li>Bake desserts</li>
                  <li>Paint</li>
              </ul>

          <p>I am excited to be a part of this course, and I am looking forward 
              to learning more about web development!</p>
    </div>
  );
}

export default App;