import './App.css'

export const App = () => {
  return (
    <div className="main-container">
      <div className='grid-parent'>
        <div className='grid-portion grid-text'>
          <h1>Full Stack Developer</h1>
          <p>Welcome! I'm Danielle Ismerim, a web developer skilled in technologies built on top of JavaScript, such as React, NodeJS, TypeScript, etc. While this portfolio is under development, feel free to visit my LinkedIn profile for the latest update:</p>
          <a target='_blank' href="https://www.linkedin.com/in/danielle-ismerim-743181101/">
            <img className='icon' src="/linkedin.png" alt="linkedin" />
          </a>
        </div>
        <div className='grid-portion grid-img'>
          <img className='photo' alt='Danielle Ismerim - Full Stack Developer' src='/photo.jpeg' />
        </div>
      </div>
    </div>
  )
}
