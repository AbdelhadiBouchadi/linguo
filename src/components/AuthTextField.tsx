import { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View, type TextInputProps } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { colors } from '@/theme';

type AuthTextFieldProps = TextInputProps & {
  label: string;
  isPassword?: boolean;
  error?: string | null;
};

export function AuthTextField({
  label,
  isPassword,
  error,
  ...inputProps
}: AuthTextFieldProps) {
  const [isSecure, setIsSecure] = useState(isPassword);

  return (
    <View className="mb-4">
      <View
        className={`rounded-2xl border bg-white px-4 py-2.5 ${
          error ? 'border-error' : 'border-border'
        }`}
      >
        <Text className="font-poppins-regular text-caption text-text-secondary">
          {label}
        </Text>
        <View className="flex-row items-center">
          <TextInput
            className="flex-1 py-1 font-poppins-medium text-body-lg text-text-primary"
            placeholderTextColor={colors.textSecondary}
            secureTextEntry={isSecure}
            autoCapitalize="none"
            autoCorrect={false}
            {...inputProps}
          />
          {isPassword && (
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => setIsSecure((prev) => !prev)}
              hitSlop={8}
            >
              <Ionicons
                name={isSecure ? 'eye-outline' : 'eye-off-outline'}
                size={20}
                color={colors.textSecondary}
              />
            </TouchableOpacity>
          )}
        </View>
      </View>
      {error && (
        <Text className="mt-1.5 ml-1 font-poppins-regular text-caption text-error">
          {error}
        </Text>
      )}
    </View>
  );
}
