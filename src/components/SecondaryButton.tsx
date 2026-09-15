import { Text, TouchableOpacity, type TouchableOpacityProps } from 'react-native';

type SecondaryButtonProps = TouchableOpacityProps & {
  label: string;
};

export function SecondaryButton({
  label,
  className,
  ...touchableProps
}: SecondaryButtonProps) {
  return (
    <TouchableOpacity
      activeOpacity={0.85}
      className={`items-center rounded-2xl border border-lingua-purple-deep py-4 ${className ?? ''}`}
      {...touchableProps}
    >
      <Text className="font-poppins-semibold text-body-lg text-lingua-purple-deep">
        {label}
      </Text>
    </TouchableOpacity>
  );
}
