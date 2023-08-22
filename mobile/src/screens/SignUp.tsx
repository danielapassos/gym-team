import { VStack, Text, Image, Center, Heading, ScrollView, useToast, Toast } from "native-base";
import BackgroundImg from '@assets/background.png'
import LogoSvg from '@assets/logo.svg'
import { Input } from "@components/Input";
import { Button } from "@components/Button";
import { useNavigation } from "@react-navigation/native";
import { useForm, Controller } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup';
import { api } from "@services/api";
import { AppError } from "@utils/AppError";

type FormDataProps = {
  name: string;
  email: string;
  password: string;
  password_confirm: string;
}

const signUpSchema = yup.object({
  name: yup.string().required('Informe o nome.'),
  email: yup.string().required('Informe o e-mail').email('E-mail inválido.'),
  password: yup.string().required('Informe a senha').min(6, 'A senha deve ter pelo menos 6 dígitos.'),
  password_confirm: yup.string().required('Confirme a senha.').oneOf([yup.ref('password'), null], 'A confirmação da senha não confere')
});

export function SignUp() {
    const toast = useToast()
  
  const { control, handleSubmit, formState: { errors } } = useForm<FormDataProps>({
    resolver: yupResolver(signUpSchema),
  });

  const navigation = useNavigation();

  function handleGoBack() {
    navigation.goBack();
  }

  async function handleSignUp({ name, email, password }: FormDataProps) {
    try {
        const response = await api.post('/users', { name, email, password });
        console.log(response.data);
    } catch (error) {
        const isAppError = error instanceof AppError;
        const title = isAppError ? error.message: 'Please, try again later.'
        toast.show({
            title,
            placement: 'top',
            bgColor: 'red.500'
        })
    }
    }

    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator = {false}>
        <VStack flex={1} px="10px" pb={16}>
            <Image
                defaultSource={BackgroundImg}
                source={BackgroundImg}
                alt="Gym App Background Image"
                resizeMode="contain"
                position="absolute"
            />
        <Center my={24}>
            <LogoSvg />
            <Text color="gray.100" fontSize="sm">
                Train your mind and body
            </Text>
        </Center>

        <Center>
            <Heading color="gray.100" fontSize="xl" mb={6} fontFamily="heading">
                Create your account
            </Heading>

            <Controller 
                control={control}
                name="name"
                rules={{
                    required: 'Name is required.'
                }}
                render={( { field: { onChange, value } }) => (

                <Input 
                    placeholder="Name"
                    onChangeText={onChange}
                    value={value}
                    errormessage={errors.name?.message}
                />
                )}
            />

            <Controller 
                control={control}
                name="email"
                rules={{
                    required: 'Email is required.',
                    pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'This email is invalid.'
                    }
                }}
                render={( { field: { onChange, value } }) => (
                <Input 
                    placeholder="Email" 
                    keyboardType="email-address"
                    autoCapitalize="none"
                    onChangeText={onChange}
                    value={value}
                    errormessage={errors.email?.message}
                />
                )}
            />

            <Controller 
                control={control}
                name="password"
                rules={{
                    required: 'Password is required.'
                }}
                render={( { field: { onChange, value } }) => (
                <Input 
                    placeholder="Password"
                    secureTextEntry
                    onChangeText={onChange}
                    value={value}
                    errormessage={errors.password?.message}
                />
                )}
            />

            <Controller 
                control={control}
                name="password_confirm"
                rules={{
                    required: 'You must confirm your password.'
                }}
                render={( { field: { onChange, value } }) => (

                <Input 
                    placeholder="Confirm your password"
                    secureTextEntry
                    onChangeText={onChange}
                    value={value}
                    onSubmitEditing={handleSubmit(handleSignUp)}
                    returnKeyType="send"
                    errormessage={errors.password_confirm?.message}
                />
                )}
            />

            <Button title="Create and access" onPress={handleSubmit(handleSignUp)}/>
        </Center>

            <Button title="Back to Login" variant="outline" mt={24} onPress={handleGoBack}/>
        
        </VStack>
        </ScrollView>
    )
}