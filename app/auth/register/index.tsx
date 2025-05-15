import ThemedButton from '@/presentation/theme/components/ThemedButton'
import ThemedLink from '@/presentation/theme/components/ThemedLink'
import { ThemedText } from '@/presentation/theme/components/ThemedText'
import ThemedTextInput from '@/presentation/theme/components/ThemedTextInput'
import { useThemeColor } from '@/presentation/theme/hooks/useThemeColor'
import React from 'react'
import { KeyboardAvoidingView, useWindowDimensions, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'

const RegisterScreen = () => {
    const { height } = useWindowDimensions()
    const backgroundColor = useThemeColor({}, 'background')

    return (
        <KeyboardAvoidingView behavior='padding' style={{ flex: 1 }}>
            <ScrollView
                style={{
                    paddingHorizontal: 40,
                    backgroundColor: backgroundColor,
                }}>
                <View
                    style={{
                        paddingTop: height * 0.35,
                    }}
                >
                    <ThemedText type='title'>Crear cuenta</ThemedText>
                    <ThemedText style={{ color: 'grey' }}>
                        Por favor crea una cuenta para continuar
                    </ThemedText>
                </View>

                {/* Email y Password */}

                <View style={{ marginTop: 20 }}>
                    <ThemedTextInput
                        placeholder='Nombnre Completo'
                        autoCapitalize='words'
                        icon="person-outline"
                    />
                    <ThemedTextInput
                        placeholder='Correo Electronico'
                        keyboardType='email-address'
                        autoCapitalize='none'
                        icon="mail-outline"
                    />
                    <ThemedTextInput
                        placeholder='Contraseña'
                        secureTextEntry
                        autoCapitalize='none'
                        icon="lock-closed-outline"
                    />
                </View>

                {/* Spacer */}
                <View style={{ marginTop: 10 }} />

                {/* Boton */}
                <ThemedButton icon="arrow-forward-outline"> Crear Cuenta</ThemedButton>

                <View style={{ marginTop: 50 }} />

                {/* Enlace de Registro */}

                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                >
                    <ThemedText>Ya tienes cuenta?</ThemedText>
                    <ThemedLink dismissTo href="/auth/login" style={{ marginHorizontal: 5 }}>
                        Ingresar
                    </ThemedLink>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

export default RegisterScreen