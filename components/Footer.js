const Footer = () => {
    const shareUrl = encodeURIComponent('https://localhost:3000');
    const title = encodeURIComponent('Team D.R.Y.');
  
    return (
      <footer>
        <h3>My Professional Accounts:</h3>
        <ul>
          <li>
            <a
              href={`https://www.linkedin.com/in/jpuellorodriguez2016`}
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href={`https://github.com/jhanaykapuello`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
          </li>
          <li>
            <a
              href={`https://twitter.com/jhanaykar`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>
          </li>
        </ul>
      </footer>
    );
  };
  
  export default Footer;