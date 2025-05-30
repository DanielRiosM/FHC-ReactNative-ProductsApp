import { useAuthStore } from '@/presentation/auth/store/useAuthStore'
import ThemedButton from '@/presentation/theme/components/ThemedButton'
import ThemedLink from '@/presentation/theme/components/ThemedLink'
import { ThemedText } from '@/presentation/theme/components/ThemedText'
import ThemedTextInput from '@/presentation/theme/components/ThemedTextInput'
import { useThemeColor } from '@/presentation/theme/hooks/useThemeColor'
import { router } from 'expo-router'
import React, { useState } from 'react'
import { Alert, KeyboardAvoidingView, useWindowDimensions, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'

const RegisterScreen = () => {

    const { register } = useAuthStore()

    const { height } = useWindowDimensions()
    const backgroundColor = useThemeColor({}, 'background')

    const [isPosting, setIsPosting] = useState(false)
    const [form, setForm] = useState({
        email: '',
        password: '',
        fullName: '',
    })

    const onRegister = async () => {
        const { email, password, fullName } = form

        console.log(email, password, fullName);


        if (email.length == 0 || password.length == 0 || fullName.length == 0) {
            return
        }

        setIsPosting(true)
        const wasSuccessful = await register(email, password, fullName)
        setIsPosting(false)

        if (wasSuccessful) {
            router.replace('/')
            return
        }

        Alert.alert('Error', 'Al registrar al usuario')
    }

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

                        value={form.fullName}
                        onChangeText={(value) => setForm({ ...form, fullName: value })}
                    />
                    <ThemedTextInput
                        placeholder='Correo Electronico'
                        keyboardType='email-address'
                        autoCapitalize='none'
                        icon="mail-outline"

                        value={form.email}
                        onChangeText={(value) => setForm({ ...form, email: value })}
                    />
                    <ThemedTextInput
                        placeholder='Contraseña'
                        secureTextEntry
                        autoCapitalize='none'
                        icon="lock-closed-outline"

                        value={form.password}
                        onChangeText={(value) => setForm({ ...form, password: value })}
                    />
                </View>

                {/* Spacer */}
                <View style={{ marginTop: 10 }} />

                {/* Boton */}
                <ThemedButton icon="arrow-forward-outline"
                    onPress={onRegister}
                    disabled={isPosting}
                >
                    Crear Cuenta
                </ThemedButton>

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