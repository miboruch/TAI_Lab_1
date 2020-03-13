const navbar = `
        <nav class="navbar navbar-expand-lg navbar-light bg-light nav">
          <ul class="main-nav">
            <li><a href="index.html">Home</a></li>
            <li><a href="quiz.html">Quiz</a></li>
            <li>
              <a href="contact.html">
                Contact
              </a>
            </li>
          </ul>
        </nav>
`;

const navbarWrapper = document.querySelector(".navbar");
navbarWrapper.innerHTML = navbar;
