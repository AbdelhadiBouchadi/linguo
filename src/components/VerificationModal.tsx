import { useEffect, useRef, useState } from 'react';
import {
  KeyboardAvoidingView,
  Modal,
  Platform,
  Pressable,
  Text,
  TextInput,
  View,
} from 'react-native';

const CODE_LENGTH = 6;

type VerificationModalProps = {
  visible: boolean;
  email: string;
  onRequestClose: () => void;
  /** Verifies the code against Clerk. Return an error message to show, or nothing on success. */
  onVerify: (code: string) => Promise<string | void>;
  onResend?: () => void;
};

export function VerificationModal({
  visible,
  email,
  onRequestClose,
  onVerify,
  onResend,
}: VerificationModalProps) {
  const inputRef = useRef<TextInput>(null);
  const [code, setCode] = useState('');
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!visible) return;

    const focusTimeout = setTimeout(() => {
      setCode('');
      setError(null);
      inputRef.current?.focus();
    }, 250);
    return () => clearTimeout(focusTimeout);
  }, [visible]);

  useEffect(() => {
    if (code.length !== CODE_LENGTH) return;

    let cancelled = false;

    (async () => {
      const errorMessage = await onVerify(code);
      if (cancelled) return;

      if (errorMessage) {
        setError(errorMessage);
        setCode('');
        inputRef.current?.focus();
      } else {
        onRequestClose();
      }
    })();

    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [code]);

  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={onRequestClose}
    >
      <Pressable
        onPress={onRequestClose}
        style={{ flex: 1, backgroundColor: 'rgba(13, 19, 43, 0.5)' }}
      >
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={{ flex: 1, justifyContent: 'flex-end' }}
        >
          <Pressable onPress={(e) => e.stopPropagation()}>
            <View className="rounded-t-3xl bg-white px-6 pb-8 pt-6">
              <View className="mb-6 items-center">
                <View className="mb-4 h-1 w-10 rounded-full bg-border" />
                <Text className="font-poppins-bold text-h3 text-text-primary">
                  Check your email
                </Text>
                <Text className="mt-2 text-center font-poppins-regular text-body-md text-text-secondary">
                  We sent a 6-digit code to{'\n'}
                  <Text className="font-poppins-medium text-text-primary">
                    {email}
                  </Text>
                </Text>
              </View>

              <Pressable
                onPress={() => inputRef.current?.focus()}
                className="mb-2 flex-row justify-center gap-2.5"
              >
                {Array.from({ length: CODE_LENGTH }).map((_, index) => {
                  const digit = code[index];
                  const isActive = index === code.length;

                  return (
                    <View
                      key={index}
                      className={`h-14 w-11 items-center justify-center rounded-2xl border bg-surface ${
                        error
                          ? 'border-error'
                          : isActive
                            ? 'border-lingua-purple-deep'
                            : 'border-border'
                      }`}
                    >
                      <Text className="font-poppins-semibold text-h3 text-text-primary">
                        {digit ?? ''}
                      </Text>
                    </View>
                  );
                })}
              </Pressable>

              {error ? (
                <Text className="mb-2 text-center font-poppins-regular text-body-sm text-error">
                  {error}
                </Text>
              ) : null}

              {onResend && (
                <Pressable onPress={onResend} className="items-center py-2">
                  <Text className="font-poppins-medium text-body-sm text-lingua-purple-deep">
                    Resend code
                  </Text>
                </Pressable>
              )}

              <TextInput
                ref={inputRef}
                value={code}
                onChangeText={(text) =>
                  setCode(text.replace(/[^0-9]/g, '').slice(0, CODE_LENGTH))
                }
                keyboardType="number-pad"
                maxLength={CODE_LENGTH}
                style={{
                  position: 'absolute',
                  width: 1,
                  height: 1,
                  opacity: 0,
                }}
              />
            </View>
          </Pressable>
        </KeyboardAvoidingView>
      </Pressable>
    </Modal>
  );
}
