import { Ionicons } from '@expo/vector-icons';
import {
  Text,
  TouchableOpacity,
  type TouchableOpacityProps,
} from 'react-native';

type SocialButtonProps = TouchableOpacityProps & {
  label: string;
  icon: keyof typeof Ionicons.glyphMap;
  iconColor: string;
};

export function SocialButton({
  label,
  icon,
  iconColor,
  ...touchableProps
}: SocialButtonProps) {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      className="mb-3 flex-row items-center justify-center rounded-2xl border border-border bg-white py-4"
      {...touchableProps}
    >
      <Ionicons name={icon} size={20} color={iconColor} />
      <Text className="ml-3 font-poppins-medium text-body-md text-text-primary">
        {label}
      </Text>
    </TouchableOpacity>
  );
}
