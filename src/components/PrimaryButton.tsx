import { Text, TouchableOpacity, type TouchableOpacityProps } from 'react-native';

type PrimaryButtonProps = TouchableOpacityProps & {
  label: string;
};

export function PrimaryButton({
  label,
  className,
  ...touchableProps
}: PrimaryButtonProps) {
  return (
    <TouchableOpacity
      activeOpacity={0.85}
      className={`items-center rounded-2xl bg-lingua-purple-deep py-4 ${className ?? ''}`}
      {...touchableProps}
    >
      <Text className="font-poppins-semibold text-body-lg text-white">
        {label}
      </Text>
    </TouchableOpacity>
  );
}
