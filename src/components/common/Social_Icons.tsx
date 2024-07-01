import '../../assets/styles/social_icons.css';
import Logo from '../atoms/Logo';

const Social_Icons = () => {
  return (
    <>
      <input type="radio" name="toggle" id="toggleOpen" value="toggleOpen" />
      <figure id="welcomeMessage">
        <figcaption>
          <h1>
            <label htmlFor="toggleOpen" title="Click to Open"></label>
            <b>
              F
              <a href="javascript:void(0);" title="Go To Home">
                <Logo />
              </a>
            </b>
            <b>
              o
              <a href="javascript:void(0);" title="Additional Information">
                <Logo />
              </a>
            </b>
            <b>
              l
              <a href="javascript:void(0);" title="Go To Shop">
                <Logo />
              </a>
            </b>
            <b>
              l
              <a href="javascript:void(0);" title="Send an Email">
                <Logo />
              </a>
            </b>
            <b>
              o
              <a href="javascript:void(0);" title="Facebook">
                <Logo />
              </a>
            </b>
            <b>
              w
              <a href="javascript:void(0);" title="Instagram">
                <Logo />
              </a>
            </b>
            <b>
              u
              <a href="javascript:void(0);" title="LinkedIn">
                <Logo />
              </a>
            </b>
            <b>
              s
              <a href="javascript:void(0);" title="LinkedIn">
                <Logo />
              </a>
            </b>
          </h1>
        </figcaption>
      </figure>
    </>
  );
};

export default Social_Icons;
