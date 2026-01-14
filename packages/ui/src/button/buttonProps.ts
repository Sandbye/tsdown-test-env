export type DefaultButtonProps = {
  label: string;
  onclick: (...args: any[]) => void;
};

export type ExtendedButtonProps = DefaultButtonProps & {
  disabled?: boolean;
  icon?: string;
};
