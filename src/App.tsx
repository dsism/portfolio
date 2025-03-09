import './App.css'

export const App = () => {
  return (
    <div className="main-container">
      <div className='grid-parent'>
        <div className='grid-portion grid-text'>
          <div>
            <h1>Full Stack Developer</h1>
            <p>Welcome! I'm Danielle Ismerim, a web developer skilled in technologies built on top of JavaScript, such as React, NodeJS, TypeScript, etc. </p>
            <p>While this portfolio is under development, feel free to visit my LinkedIn profile for the latest updates by clicking the link below.</p>
          </div>
          <div className='icons-area'>
            <a target='_blank' href="https://www.linkedin.com/in/danielleismerim/">
              <img className='icon' src="linkedin.png" alt="linkedin" />
            </a>
            {/* <a target='_blank' href="https://gitlab.com/danismerim">
              <img className='icon' src="gitlab.png" alt="gitlab" />
            </a> */}
          </div>
        </div>
        <div className='grid-portion grid-img'>
          <img className='photo' alt='Danielle Ismerim - Full Stack Developer' src='photo.jpg' />
        </div>
      </div>
    </div>
  )
}
