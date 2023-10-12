import { AppConfig } from '../utils/AppConfig';

type ILogoProps = {
  xl?: boolean;
  black?: boolean;
};

const Logo = (props: ILogoProps) => {
  const fontStyle = props.xl
    ? 'font-semibold text-4xl'
    : 'font-semibold text-2xl';

  const colorLogo = props.black ? 'text-black' : 'text-white';
  return (
    <span className={`inline-flex items-center ${fontStyle} ${colorLogo}`}>
      {AppConfig.site_name}
    </span>
  );
};

export { Logo };
