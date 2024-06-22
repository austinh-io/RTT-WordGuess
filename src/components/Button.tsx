type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  type?: keyof typeof buttonTypes;
  disabled?: boolean;
};

const buttonTypes = {
  primary: {
    bg: {
      dark: "bg-primary-accent-dark",
      light: "bg-primary-accent-light",
    },
    hover: {
      dark: "hover:bg-primary-accent-hover-dark",
      light: "hover:bg-primary-accent-hover-light",
    },
  },
  danger: {
    bg: {
      dark: "bg-secondary-accent-dark",
      light: "bg-secondary-accent-light",
    },
    hover: {
      dark: "hover:bg-secondary-accent-hover-dark",
      light: "hover:bg-secondary-accent-hover-light",
    },
  },
};

const Button = ({
  children,
  onClick,
  type = "primary",
  disabled = false,
}: ButtonProps) => {
  return (
    <button
      className={` dark:${buttonTypes[type].bg.dark} ${buttonTypes[type].bg.light} ${buttonTypes[type].hover.light} dark:${buttonTypes[type].hover.dark} text-primary-text-light dark:text-primary-text-dark  transition-colors  font-bold py-2 px-4 rounded`}
      onClick={() => onClick && onClick()}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
