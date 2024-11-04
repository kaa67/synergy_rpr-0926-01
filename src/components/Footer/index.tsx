import tg from 'media/images/footer/telegram.svg';
import vk from 'media/images/footer/vk.svg';

const Footer = () => (
  <footer className="glass fixed z-40 bottom-0 left-0 right-0">
    <div className="container mx-auto px-4">
      <div className="flex flex-col sm:flex-row align-middle justify-center">
        <p className="grow">
          Copyright © {new Date().getFullYear()} - All right reserved by
          Kolosov Andrey @kolosoft
        </p>

        <p className="grow-0 flex flex-row align-middle justify-center gap-4">
          <a href="/">
            <img src={tg} alt="@kolosoft" />
          </a>
          <a href="/">
            <img src={vk} alt="@kolosoft" />
          </a>
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
