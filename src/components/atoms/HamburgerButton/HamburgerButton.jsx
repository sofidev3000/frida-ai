import "./hamburger-button.css"

const HamburgerButton = () => {
  return (
    <>
      <button class="hamburger hamburger--collapse " type="button">
        <span class="hamburger-box">
          <span class="hamburger-inner"></span>
        </span>
      </button>
    </>
  );
};

export default HamburgerButton;
