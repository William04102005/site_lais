p {
    margin: 0px;
  }
  
  body {
    margin: 0px;
    height: 200vh;
    background: #eee;
  }
  
  .cookies-container {
    color: #b37f44;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    position: fixed;
    width: 100%;
    bottom: 2rem;
    z-index: 1000;
    font-size: 10px;
  }
  
  .cookies-content {
    box-shadow: 0 1px 3px #ebcaa8;
    background: #ececc9;
    max-width: 520px;
    border-radius: 5px;
    padding: 1rem;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 0.5rem;
    opacity: 0;
    transform: translateY(1rem);
    animation: slideUp 0.5s forwards;
  }
  
  @keyframes slideUp {
    to {
      transform: initial;
      opacity: initial;
    }
  }
  
  .cookies-pref label {
    margin-right: 1rem;
  }
  
  .cookies-save {
    grid-column: 2;
    grid-row: 1/3;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background: #F5F5DC;
    color:  #b37f44;
    cursor: pointer;
    border: none;
    border-radius: 5px;
    padding: 0.8rem 1rem;
    font-size: 1rem;
  }
  
  @media (max-width: 500px) {
    .cookies-content {
      grid-template-columns: 1fr;
    }
    .cookies-save {
      grid-column: 1;
      grid-row: 3;
    }
  }
  
