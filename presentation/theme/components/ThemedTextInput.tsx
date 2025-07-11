import { useThemeColor } from '@/presentation/theme/hooks/useThemeColor'
import { Ionicons } from '@expo/vector-icons'
import React, { useRef, useState } from 'react'
import { StyleSheet, TextInputProps, View, ViewStyle } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'

interface Props extends TextInputProps {
    icon?: keyof typeof Ionicons.glyphMap
    containerStyle?: ViewStyle
}

export const ThemedTextInput = ({ icon, style, ...rest }: Props) => {

    const primaryColor = useThemeColor({}, 'primary')
    const textColor = useThemeColor({}, 'text')
    const [isActive, setIsActive] = useState(false)
    const inputRef = useRef<TextInput>(null)

    return (
        <View
            style={[
                {
                    ...styles.border,
                    borderColor: isActive ? primaryColor : '#ccc',
                },
                style,
            ]}
            onTouchStart={() => inputRef.current?.focus()}
        >
            {icon && (
                <Ionicons
                    name={icon}
                    size={24}
                    color={textColor}
                    style={{ marginRight: 10 }}
                />
            )}

            <TextInput
                ref={inputRef}
                placeholderTextColor={"#5c5c5c"}
                onFocus={() => setIsActive(true)}
                onBlur={() => setIsActive(false)}
                style={{
                    color: textColor,
                    marginRight: 10,
                    flex: 1
                }}
                {...rest}
            />
        </View>
    )
}

export default ThemedTextInput

const styles = StyleSheet.create({
    border: {
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
        flexDirection: 'row',
        alignItems: 'center'
    }
})